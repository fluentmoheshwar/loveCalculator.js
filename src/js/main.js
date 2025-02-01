import "../css/style.css";

// access required elements
const form = document.getElementById("inputForm");
const resultPlaceholder = document.getElementById("result");

function calculateLove(yourName, partnerName) {
  // prepare name strings for calculating.
  yourName = yourName.toLowerCase().trim().replace(/\s/g, "");
  partnerName = partnerName.toLowerCase().trim().replace(/\s/g, "");

  let percent = 0;

  // Add 10% for each letter that is common in both names
  for (let letter of yourName) {
    if (partnerName.indexOf(letter) > -1) {
      percent += 10;
    }
  }
  // Add 20% if the first letters of the names are the same
  if (yourName[0] === partnerName[0]) {
    percent += 20;
  }
  // Add 15% if the last letters of the names are the same
  if (yourName[-1] === partnerName[-1]) {
    percent += 15;
  }
  // Add a random number between 0 and 20 to the percentage
  percent += Math.floor(Math.random() * 21);

  // Limit percentage to 100
  if (percent > 100) {
    percent = 100;
  }

  return percent;
}

form.onsubmit = (event) => {
  event.preventDefault();
  const yourName = document.getElementById("yourName").value;
  const partnerName = document.getElementById("partnerName").value;
  const result = calculateLove(yourName, partnerName);
  resultPlaceholder.innerText = `Love percentage is ${result}%`;
};

function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.classList.add("heart", "text-red-500", "text-lg");
  document.body.appendChild(heart);

  const size = Math.random() * 2 + 1 + "rem";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = size;
  heart.style.top = "-10%";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);
