const tabMneu = document.querySelectorAll(".js-tabmenu li");
const tabContetnt = document.querySelectorAll(".js-tabcontent section");

if (tabMneu.length && tabContetnt.length) {
  tabContetnt[0].classList.add("ativo");

  function activeTab(index) {
    tabContetnt.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContetnt[index].classList.add("ativo");
  }

  tabMneu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
