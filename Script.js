/* ========= Slideshow ========= */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto slideshow every 4 seconds
setInterval(function () {
  plusSlides(1);
}, 4000);

/* ========= Tracking Parcel ========= */
function trackParcel() {
  let id = document.getElementById("trackId").value;
  let result = document.getElementById("trackingResult");

  if (id.trim() === "") {
    result.innerHTML = "❌ Please enter a valid Tracking ID.";
    return;
  }

  result.innerHTML = '<span class="loader"></span> Checking status...';

  setTimeout(() => {
    result.innerHTML = "✅ Parcel with Tracking ID <b>" + id + "</b> is in transit.";
  }, 2000);
}

/* ========= Price Calculation ========= */
function calculatePrice() {
  let weight = document.getElementById("weight").value;
  let priceOutput = document.getElementById("priceOutput");

  if (weight <= 0) {
    priceOutput.innerHTML = "❌ Please enter a valid weight.";
    return;
  }

  priceOutput.innerHTML = '<span class="loader"></span> Calculating...';

  setTimeout(() => {
    let price = weight * 70;
    priceOutput.innerHTML = "💰 Estimated Price: ₹" + price;
    document.getElementById("payNow").style.display = "block"; // Show payment button
    document.getElementById("payNow").setAttribute(
      "href",
      `upi://pay?pa=yourupiid@oksbi&pn=MarutiCourier&am=${price}&cu=INR`
    );
  }, 2000);
}
