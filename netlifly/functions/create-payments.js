exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  const { name, email, phone, hotel, room, amount, currency, checkin, checkout, guests, nights } = JSON.parse(event.body);
  const KEY = process.env.PESAPAL_CONSUMER_KEY;
  const SECRET = process.env.PESAPAL_CONSUMER_SECRET;
  const BASE = process.env.PESAPAL_BASE || "https://cybqa.pesapal.com/pesapalv3";
  try {
    const tokenRes = await fetch(`${BASE}/api/Auth/RequestToken`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ consumer_key: KEY, consumer_secret: SECRET })
    });
    const tokenData = await tokenRes.json();
    const orderId = "SST-" + Date.now();
    const orderRes = await fetch(`${BASE}/api/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${tokenData.token}` },
      body: JSON.stringify({
        id: orderId,
        currency: currency,
        amount: Number(amount),
        description: `${hotel} - ${room} - ${nights} nights - ${checkin} to ${checkout} - ${guests} guests`,
        callback_url: `https://${event.headers.host}/success.html?order=${orderId}&hotel=${encodeURIComponent(hotel)}&amount=${amount}&currency=${currency}`,
        notification_id: process.env.PESAPAL_IPN_ID,
        billing_address: {
          email_address: email, phone_number: phone, country_code: "KE",
          first_name: name.split(" ")[0] || name, last_name: name.split(" ")[1] || "Guest", line_1: "Safari Stays Hotel Booking"
        }
      })
    });
    const orderData = await orderRes.json();
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ redirect_url: orderData.redirect_url, order_id: orderId }) };
  } catch (e) { return { statusCode: 500, body: JSON.stringify({ error: e.message }) }; }
};