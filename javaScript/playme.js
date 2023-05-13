const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('menu');
});





function playPause() {
  var mediaPlayer = document.getElementById('playBTN');
  if (mediaPlayer.paused) {
      mediaPlayer.playBTN(); 
      $('#playBTN').show();
      $('#pauseBTN').hide();
  } else {
      mediaPlayer.pause(); 
      $('#playBTN').show();
      $('#pauseBTN').hide();
  }
}

