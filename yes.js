document.addEventListener("DOMContentLoaded", function() {
  // Array of 30 heartfelt confessions.
  const confessions = [
    "I promise to always cherish and respect you.",
    "Your smile brightens even my darkest days.",
    "I long to hold you close every moment of every day.",
    "Your laughter is the sweetest music to my ears.",
    "I dream of a future filled with endless love with you.",
    "Every moment with you is a treasure I hold dear.",
    "I will stand by your side through every twist and turn.",
    "You inspire me to be the best version of myself.",
    "I yearn to create countless beautiful memories with you.",
    "Your love has completely transformed my world.",
    "I want to be the reason you smile every single day.",
    "Your presence wraps me in warmth and comfort.",
    "I am forever grateful for the love we share.",
    "In your eyes, I see a lifetime of shared dreams.",
    "I vow to love you unconditionally, always.",
    "You make my heart race every time you walk into the room.",
    "I imagine growing old with you, side by side.",
    "Your love fills the emptiness I never knew existed.",
    "Every heartbeat sings the song of my love for you.",
    "I'm addicted to the magic that you bring into my life.",
    "I want to celebrate every small victory with you.",
    "Your love is the most beautiful gift I've ever received.",
    "Together, let's write the most enchanting love story.",
    "You are my constant source of happiness and strength.",
    "I will always protect and cherish the love we share.",
    "Your inner beauty leaves me in awe every day.",
    "I promise to listen, support, and care for you always.",
    "I see a lifetime of adventures awaiting us.",
    "Your love is the sweetest melody to my soul.",
    "I will love you today, tomorrow, and forever."
  ];

  let index = 0;
  const confessionContainer = document.getElementById("confession-container");

  // Function to display the next confession with animation.
  function showNextConfession() {
    // Remove the animation class to reset the animation.
    confessionContainer.classList.remove("animate");
    setTimeout(() => {
      confessionContainer.textContent = confessions[index];
      // Force reflow to restart the animation.
      void confessionContainer.offsetWidth;
      confessionContainer.classList.add("animate");
      index = (index + 1) % confessions.length;
    }, 500);
  }

  // Initialize the first confession.
  confessionContainer.textContent = confessions[0];
  confessionContainer.classList.add("animate");
  index = 1;

  // Cycle through confessions every 4 seconds.
  setInterval(showNextConfession, 4000);

  // INTERACTIVE ELEMENT: Clickable heart triggers a cute cat GIF.
  const heartIcon = document.getElementById("heartIcon");
  const catGif = document.getElementById("catGif");

  heartIcon.addEventListener("click", function() {
    // Show the cat GIF when the heart is clicked.
    catGif.style.display = "block";
    // After 3 seconds, hide the cat GIF.
    setTimeout(() => {
      catGif.style.display = "none";
    }, 3000);
  });
});