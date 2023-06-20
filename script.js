function voteNow() {
  let firstName = prompt("What is your first name?");
  let sauce = prompt("Salad Cream or Mayo?");
  sauce = sauce.toLowerCase();
  sauce = sauce.trim();
  sauce = sauce.replace("saladcream", "salad cream");

  if (sauce === "salad cream") {
    alert(`Correct ${firstName}! Salad Cream is the BEST!😋`);
  } else {
    alert(`Think again ${firstName}! Salad Cream is the BEST!😍`);
  }
}
let voteNowButton = document.querySelector("button");
voteNowButton.addEventListener("click", voteNow);
