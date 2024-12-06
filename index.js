// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navContainer = document.querySelectorAll('.nav-container');

function switchMenu() {
  if (toggleBtn) toggleBtn.classList.toggle('collapsed');
  if (nav) nav.classList.toggle('collapsed');
  if (navList) navList.classList.toggle('collapsed');
}
if (toggleBtn) toggleBtn.addEventListener('click', switchMenu);
if (navContainer) navContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-item')) {
    switchMenu();
  }
});
// function closeMenu() {
//   setTimeout(() => {
//     toggleBtn.classList.remove('collapsed');
//     nav.classList.remove('collapsed');
//     navList.classList.remove('collapsed');
//   }, 1000);  
// }
// navItems.forEach(el => el.addEventListener('click', closeMenu));