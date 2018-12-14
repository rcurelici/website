var x = document.getElementById('hamburger_link');
var setVisible = document.getElementById('main_nav');

function attivaMenu(){
  if (setVisible.className == 'notVisible') {
    setVisible.className = 'flex';
  }else {
    setVisible.className = 'notVisible';
  }
}

x.addEventListener('click', attivaMenu);
