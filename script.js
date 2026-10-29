const hotels = [
  { name:"Voyager Beach Resort Mombasa", location:"Nyali, Mombasa", price:18000, rating:"4.5", main:"voyager-main.jpg", bedroom:"voyager-bedroom.jpg", toilet:"voyager-toilet.jpg", pool:"voyager-pool.jpg" },
  { name:"Villa Rosa Kempinski Nairobi", location:"Westlands, Nairobi", price:25000, rating:"5.0", main:"kempinski-main.jpg", bedroom:"kempinski-bedroom.jpg", toilet:"kempinski-toilet.jpg", pool:"kempinski-pool.jpg" },
  { name:"Sarova Stanley Nairobi", location:"CBD, Nairobi", price:15000, rating:"4.6", main:"stanley-main.jpg", bedroom:"stanley-bedroom.jpg", toilet:"stanley-toilet.jpg", pool:"stanley-pool.jpg" },
  { name:"Sarova Whitesands Beach Resort", location:"Nyali, Mombasa", price:20000, rating:"4.7", main:"whitesands-main.jpg", bedroom:"whitesands-bedroom.jpg", toilet:"whitesands-toilet.jpg", pool:"whitesands-pool.jpg" },
  { name:"Diani Reef Beach Resort", location:"Diani, Kwale", price:22000, rating:"4.6", main:"diani-reef-main.jpg", bedroom:"diani-reef-bedroom.jpg", toilet:"diani-reef-toilet.jpg", pool:"diani-reef-pool.jpg" },
  { name:"Baobab Beach Resort", location:"Diani, Kwale", price:17000, rating:"4.5", main:"baobab-main.jpg", bedroom:"baobab-bedroom.jpg", toilet:"baobab-toilet.jpg", pool:"baobab-pool.jpg" },
  { name:"Serena Beach Resort & Spa", location:"Shanzu, Mombasa", price:21000, rating:"4.6", main:"serena-beach-main.jpg", bedroom:"serena-beach-bedroom.jpg", toilet:"serena-beach-toilet.jpg", pool:"serena-beach-pool.jpg" },
  { name:"PrideInn Paradise Beach Resort", location:"Shanzu, Mombasa", price:16000, rating:"4.4", main:"prideinn-main.jpg", bedroom:"prideinn-bedroom.jpg", toilet:"prideinn-toilet.jpg", pool:"prideinn-pool.jpg" },
  { name:"Hemingways Watamu", location:"Watamu, Kilifi", price:32000, rating:"4.8", main:"hemingways-main.jpg", bedroom:"hemingways-bedroom.jpg", toilet:"hemingways-toilet.jpg", pool:"hemingways-pool.jpg" },
  { name:"Leopard Beach Resort", location:"Diani, Kwale", price:23000, rating:"4.7", main:"leopard-main.jpg", bedroom:"leopard-bedroom.jpg", toilet:"leopard-toilet.jpg", pool:"leopard-pool.jpg" },
  { name:"The Sands at Nomad Diani", location:"Diani, Kwale", price:26000, rating:"4.7", main:"nomad-main.jpg", bedroom:"nomad-bedroom.jpg", toilet:"nomad-toilet.jpg", pool:"nomad-pool.jpg" },
  { name:"Swahili Beach Resort", location:"Diani, Kwale", price:24000, rating:"4.6", main:"swahili-main.jpg", bedroom:"swahili-bedroom.jpg", toilet:"swahili-toilet.jpg", pool:"swahili-pool.jpg" },
  { name:"Neptune Beach Resort", location:"Bamburi, Mombasa", price:15000, rating:"4.3", main:"neptune-main.jpg", bedroom:"neptune-bedroom.jpg", toilet:"neptune-toilet.jpg", pool:"neptune-pool.jpg" },
  { name:"Bamburi Beach Hotel", location:"Bamburi, Mombasa", price:13000, rating:"4.2", main:"bamburi-main.jpg", bedroom:"bamburi-bedroom.jpg", toilet:"bamburi-toilet.jpg", pool:"bamburi-pool.jpg" },
  { name:"Travellers Beach Hotel", location:"Nyali, Mombasa", price:14000, rating:"4.3", main:"travellers-main.jpg", bedroom:"travellers-bedroom.jpg", toilet:"travellers-toilet.jpg", pool:"travellers-pool.jpg" },
  { name:"Reef Hotel Mombasa", location:"Nyali, Mombasa", price:12000, rating:"4.1", main:"reef-hotel-main.jpg", bedroom:"reef-hotel-bedroom.jpg", toilet:"reef-hotel-toilet.jpg", pool:"reef-hotel-pool.jpg" },
  { name:"English Point Marina", location:"Nyali, Mombasa", price:19000, rating:"4.5", main:"english-point-main.jpg", bedroom:"english-point-bedroom.jpg", toilet:"english-point-toilet.jpg", pool:"english-point-pool.jpg" },
  { name:"Tamarind Tree Hotel Nairobi", location:"Karen, Nairobi", price:17000, rating:"4.5", main:"tamarind-main.jpg", bedroom:"tamarind-bedroom.jpg", toilet:"tamarind-toilet.jpg", pool:"tamarind-pool.jpg" },
  { name:"Tribe Hotel Nairobi", location:"Gigiri, Nairobi", price:21000, rating:"4.7", main:"tribe-main.jpg", bedroom:"tribe-bedroom.jpg", toilet:"tribe-toilet.jpg", pool:"tribe-pool.jpg" },
  { name:"Fairmont The Norfolk", location:"CBD, Nairobi", price:19000, rating:"4.6", main:"norfolk-main.jpg", bedroom:"norfolk-bedroom.jpg", toilet:"norfolk-toilet.jpg", pool:"norfolk-pool.jpg" },
  { name:"Nairobi Serena Hotel", location:"Upper Hill, Nairobi", price:20000, rating:"4.7", main:"serena-nairobi-main.jpg", bedroom:"serena-nairobi-bedroom.jpg", toilet:"serena-nairobi-toilet.jpg", pool:"serena-nairobi-pool.jpg" },
  { name:"Radisson Blu Nairobi Upper Hill", location:"Upper Hill, Nairobi", price:18000, rating:"4.5", main:"radisson-main.jpg", bedroom:"radisson-bedroom.jpg", toilet:"radisson-toilet.jpg", pool:"radisson-pool.jpg" },
  { name:"Four Points by Sheraton Airport", location:"JKIA, Nairobi", price:14000, rating:"4.4", main:"four-points-main.jpg", bedroom:"four-points-bedroom.jpg", toilet:"four-points-toilet.jpg", pool:"four-points-pool.jpg" },
  { name:"Eka Hotel Nairobi", location:"Mombasa Road, Nairobi", price:13000, rating:"4.4", main:"eka-main.jpg", bedroom:"eka-bedroom.jpg", toilet:"eka-toilet.jpg", pool:"eka-pool.jpg" },
  { name:"Azure Hotel Nairobi", location:"Westlands, Nairobi", price:16000, rating:"4.5", main:"azure-main.jpg", bedroom:"azure-bedroom.jpg", toilet:"azure-toilet.jpg", pool:"azure-pool.jpg" },
  { name:"Trademark Hotel Village Market", location:"Gigiri, Nairobi", price:15000, rating:"4.4", main:"trademark-main.jpg", bedroom:"trademark-bedroom.jpg", toilet:"trademark-toilet.jpg", pool:"trademark-pool.jpg" },
  { name:"Enashipai Resort & Spa", location:"Naivasha", price:19000, rating:"4.6", main:"enashipai-main.jpg", bedroom:"enashipai-bedroom.jpg", toilet:"enashipai-toilet.jpg", pool:"enashipai-pool.jpg" },
  { name:"Lake Naivasha Sopa Resort", location:"Naivasha", price:16000, rating:"4.3", main:"naivasha-sopa-main.jpg", bedroom:"naivasha-sopa-bedroom.jpg", toilet:"naivasha-sopa-toilet.jpg", pool:"naivasha-sopa-pool.jpg" },
  { name:"Sarova Mara Game Camp", location:"Masai Mara", price:28000, rating:"4.7", main:"mara-camp-main.jpg", bedroom:"mara-camp-bedroom.jpg", toilet:"mara-camp-toilet.jpg", pool:"mara-camp-pool.jpg" },
  { name:"Mara Serena Safari Lodge", location:"Masai Mara", price:30000, rating:"4.8", main:"mara-serena-main.jpg", bedroom:"mara-serena-bedroom.jpg", toilet:"mara-serena-toilet.jpg", pool:"mara-serena-pool.jpg" }
];
// --- BOOKING.COM CARDS ---
function showHotels(list) {
  const box = document.getElementById("hotels");
  if (!box) return;
  box.innerHTML = "";
  list.forEach((h) => {
    let idx = hotels.indexOf(h);
    box.innerHTML += `
      <div class="card">
        <img src="${h.main}" onclick="openHotel(${idx})">
        <div class="card-info">
          <h3 onclick="openHotel(${idx})">${h.name}</h3>
          <p>${h.location} • ⭐ ${h.rating} Excellent</p>
          <p>Free cancellation • Breakfast included</p>
          <p class="price">Ksh ${h.price} <span style="font-weight:normal;font-size:12px">/ night</span></p>
          <button class="viewBtn" onclick="openHotel(${idx})">See availability - Swipe Photos</button>
          <button class="bookBtn" onclick="openHotel(${idx})">Book This Hotel</button>
        </div>
      </div>`;
  });
}

function doSearch() {
  const q = document.getElementById("search").value.toLowerCase();
  showHotels(hotels.filter(h => h.name.toLowerCase().includes(q) || h.location.toLowerCase().includes(q)));
  const ci = document.getElementById("checkinTop").value;
  const co = document.getElementById("checkoutTop").value;
  if (ci) document.getElementById("checkin").value = ci;
  if (co) document.getElementById("checkout").value = co;
}

// --- PHOTOS ---
let currentHotel = null;
let currentIndex = 0;
let currentPhotos = [];

function openHotel(idx) {
  currentHotel = hotels[idx];
  currentPhotos = [currentHotel.main, currentHotel.bedroom, currentHotel.toilet, currentHotel.pool];
  currentIndex = 0;
  document.getElementById("detailName").innerText = currentHotel.name + " - " + currentHotel.location;
  document.getElementById("detailPrice").innerText = "Ksh " + currentHotel.price + " / night • ⭐ " + currentHotel.rating;
  document.getElementById("detail").style.display = "block";
  showPhoto();
  calcDeposit();
}
function showPhoto() {
  const labels = ["Main Photo", "Bedroom", "Toilet", "Pool"];
  document.getElementById("mainPhoto").src = currentPhotos[currentIndex];
  document.getElementById("photoLabel").innerText = labels[currentIndex] + " - " + (currentIndex+1) + " / 4 - Swipe";
  document.getElementById("dots").innerText = "●○○○".split("").map((d,i)=> i===currentIndex?"●":"○").join("");
}
function nextPhoto(){ currentIndex = (currentIndex+1)%4; showPhoto(); }
function prevPhoto(){ currentIndex = (currentIndex+3)%4; showPhoto(); }
function goPhoto(i){ currentIndex = i; showPhoto(); }

// Swipe
let startX = 0;
document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("swipeBox");
  if (box) {
    box.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    box.addEventListener("touchend", e => {
      let diff = e.changedTouches[0].clientX - startX;
      if (diff < -50) nextPhoto();
      if (diff > 50) prevPhoto();
    });
  }
  showHotels(hotels);
});

// --- 35% CALC ---
function calcDeposit() {
  if (!currentHotel) return null;
  const ci = new Date(document.getElementById("checkin").value);
  const co = new Date(document.getElementById("checkout").value);
  if (!ci || !co || isNaN(ci) || isNaN(co)) return null;
  let nights = Math.ceil((co - ci) / (1000*60*60*24));
  if (nights < 1) nights = 1;
  const total = currentHotel.price * nights;
  const deposit = Math.round(total * 0.35);
  const balance = total - deposit;
  document.getElementById("totalText").innerText = `Total for ${nights} night(s): Ksh ${total} - ${currentHotel.name}`;
  document.getElementById("depositText").innerText = `Deposit 35% to Pay: Ksh ${deposit}`;
  document.getElementById("balanceText").innerText = `Ksh ${balance}`;
  return { nights, total, deposit, balance };
}

// --- BOOKING EMAIL - NO MAILTO, WORKS IN PREVIEW ---
async function sendBookingEmail() {
  const name = document.getElementById("guestName").value.trim();
  const email = document.getElementById("guestEmail").value.trim();
  const phone = document.getElementById("guestPhone").value.trim();
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;
  if (!name || !email || !phone || !checkin || !checkout) { alert("Fill name, email, phone, check-in and check-out"); return; }
  const calc = calcDeposit();
  if (!calc) { alert("Pick dates first"); return; }

  const ref = "SST-" + Math.floor(1000 + Math.random()*9000);

  document.getElementById("bookMsg").innerText = "Sending booking... please wait...";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        access_key: "4109200f-bc76-44f8-abdf-d4a62aa92ad5",
        subject: `New Booking ${ref} - ${currentHotel.name} - Deposit Ksh ${calc.deposit}`,
        from_name: "Safari Stays Travels Website",
        to: "Travelsafaribooking@gmail.com",
        reply_to: email,
        Booking_Ref: ref,
        Hotel: currentHotel.name + " - " + currentHotel.location,
        Name: name,
        Guest_Email: email,
        Guest_Phone: phone,
        Check_in: checkin,
        Check_out: checkout,
        Guests: guests,
        Nights: calc.nights,
        Total: "Ksh " + calc.total,
        Deposit_35_Percent: "Ksh " + calc.deposit,
        Balance: "Ksh " + calc.balance,
        Payment_Method: "Pesapal - PENDING"
      })
    });
    const data = await res.json();
    if (data.success) {
      document.getElementById("bookMsg").innerHTML = `✅ Booking Sent! Ref: <b>${ref}</b><br>We have received it at Travelsafaribooking@gmail.com<br>Deposit to pay via Pesapal: <b>Ksh ${calc.deposit}</b><br>We will send Pesapal link to ${email}.`;
    } else {
      throw new Error(data.message);
    }
  } catch(e) {
    document.getElementById("bookMsg").innerHTML = `Booking saved Ref: <b>${ref}</b><br>Auto-send failed: ${e.message}<br>Copy and send to Travelsafaribooking@gmail.com:<br>Hotel ${currentHotel.name}, ${checkin} to ${checkout}, ${calc.nights} nights, Total Ksh ${calc.total}, Deposit Ksh ${calc.deposit}, Name ${name}, Email ${email}, Phone ${phone}`;
  }
}
// FIX PAST DATES - runs immediately, no waiting for DOMContentLoaded
(function(){
  function getToday(){
    const t=new Date();
    return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;
  }
  function apply(){
    const ci=document.getElementById("checkin");
    const co=document.getElementById("checkout");
    const today=getToday();
    if(ci){ ci.min=today; ci.setAttribute("min",today);
      ci.addEventListener("change",()=>{
        if(ci.value && ci.value < today){ alert("Past date not allowed"); ci.value=""; return; }
        const d=new Date(ci.value); d.setDate(d.getDate()+1);
        const s=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
        if(co){ co.min=s; co.setAttribute("min",s); co.value=""; }
      });
    }
    if(co){ co.min=today; co.setAttribute("min",today);
      co.addEventListener("change",()=>{
        if(co.value && co.value < today){ alert("Past date not allowed"); co.value=""; }
        if(ci && ci.value && co.value && co.value <= ci.value){ alert("Check-out must be after check-in"); co.value=""; }
      });
    }
  }
  apply();
  setTimeout(apply, 500);
  setTimeout(apply, 1500);
})();
// UNIVERSAL PAST-DATE BLOCK - works on ANY id
(function(){
  function todayStr(){
    const t=new Date();
    return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;
  }
  function blockPast(){
    const today=todayStr();
    // Find EVERY date input on the page, no matter its id
    document.querySelectorAll('input[type="date"]').forEach(inp=>{
      inp.min=today;
      inp.setAttribute("min",today);
    });
    // Also find ANY input with check in its id/name
    document.querySelectorAll('input[id*="check"], input[id*="Check"], input[name*="check"]').forEach(inp=>{
      inp.min=today;
      inp.setAttribute("min",today);
      inp.addEventListener("change",()=>{
        if(inp.value && inp.value < today){ alert("Past date not allowed - pick today or future"); inp.value=""; }
      });
    });
  }
  blockPast();
  setInterval(blockPast, 1000); // keep re-applying when detail modal opens
})();