const game = () => {
  const gamePieces = Math.floor(Math.random() * 3);
  switch (gamePieces) {
    case 0:
      document.getElementById(
        "#result"
      ).innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
      break;
    case 1:
      document.getElementById(
        "#result"
      ).innerHTML = `<i class="fa-regular fa-hand"></i>`;
      break;
    case 2:
      document.getElementById(
        "#result"
      ).innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
      break;
  }
};
