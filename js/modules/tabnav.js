export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu']  li ");
  const tabContetnt = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContetnt.length) {
    tabContetnt[0].classList.add("ativo");

    function activeTab(index) {
      tabContetnt.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContetnt[index].dataset.anime;
      tabContetnt[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
