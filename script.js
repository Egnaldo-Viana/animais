function initTabNav() {
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
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
