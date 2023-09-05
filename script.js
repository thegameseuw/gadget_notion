document.addEventListener("DOMContentLoaded", function() {
  let currentCard = 0;
  const cardBoxElement = document.getElementById("card-box");

  const flashcards = [
    { front: "Chat", back: "Cat" },
    { front: "Chien", back: "Dog" },
    { front: "Maison", back: "House" },
    // Ajoutez d'autres cartes ici
  ];

  flashcards.forEach((flashcard, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const cardFrontElement = document.createElement("div");
    cardFrontElement.classList.add("card-face", "card-front");
    cardFrontElement.textContent = flashcard.front;

    const cardBackElement = document.createElement("div");
    cardBackElement.classList.add("card-face", "card-back");
    cardBackElement.textContent = flashcard.back;

    cardElement.appendChild(cardFrontElement);
    cardElement.appendChild(cardBackElement);
    cardElement.addEventListener("click", function() {
      cardElement.classList.toggle("flipped");
    });
    
    cardBoxElement.appendChild(cardElement);
  });

  function showNextCard() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));
    cards[currentCard].classList.add('active');

    currentCard++;
    if (currentCard >= flashcards.length) {
      currentCard = 0;
    }
  }

  document.getElementById("next-card").addEventListener("click", function() {
    showNextCard();
  });

  showNextCard();
});
