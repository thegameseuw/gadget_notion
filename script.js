document.addEventListener("DOMContentLoaded", function() {
  let currentCard = 0;
  const cardElement = document.querySelector(".card");
  const cardFrontElement = document.querySelector(".card-front");
  const cardBackElement = document.querySelector(".card-back");

  const flashcards = [
    { front: "Chat", back: "Cat" },
    { front: "Chien", back: "Dog" },
    { front: "Maison", back: "House" },
    // Ajoutez d'autres cartes ici
  ];

  function showNextCard() {
    if (currentCard < flashcards.length) {
      cardFrontElement.textContent = flashcards[currentCard].front;
      cardBackElement.textContent = flashcards[currentCard].back;
      currentCard++;
    } else {
      currentCard = 0;
    }
  }

  cardElement.addEventListener("click", function() {
    cardElement.classList.toggle("flipped");
  });

  document.getElementById("next-card").addEventListener("click", function() {
    cardElement.classList.remove("flipped");
    showNextCard();
  });

  showNextCard();
});
