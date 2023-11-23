/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
    })
}

showMenu('nav-toggle', 'nav-menu');

/*=============== DROPDOWN MENU MOBILE ===============*/

const openMenu = document.getElementById("dropdown-menu");
const openDropdown = document.querySelector(".dropdown-menu"); // Corrigido para ".dropdown-menu"
const navLinks = document.querySelectorAll(".link_disable");
const closeDropdownButton = document.getElementById("closeDropdownButton");

let isDropdownOpen = false;

openMenu.addEventListener("click", () => {
    // Verifica se a largura da tela é menor ou igual a 1118 pixels
    if (window.matchMedia('(max-width: 1118px)').matches) {
        isDropdownOpen = !isDropdownOpen; // Inverte o estado do dropdown
        updateDropdownState();
    }
});

closeDropdownButton.addEventListener("click", () => {
    isDropdownOpen = false; // Fecha o dropdown
    updateDropdownState();
});

// Adicione um event listener para fechar o dropdown quando clicar fora dele
document.addEventListener("click", (event) => {
    if (isDropdownOpen && !openMenu.contains(event.target) && !openDropdown.contains(event.target)) {
        isDropdownOpen = false;
        updateDropdownState();
    }
});

// Adiciona um event listener para verificar as alterações de tamanho de tela
window.addEventListener("resize", () => {
    if (!window.matchMedia('(max-width: 1118px)').matches && isDropdownOpen) {
        // Se a tela for redimensionada para mais de 1118 pixels e o dropdown estiver aberto, fecha o dropdown
        isDropdownOpen = false;
        updateDropdownState();
    }
});

function updateDropdownState() {
    openMenu.classList.toggle("active", isDropdownOpen);
    openDropdown.classList.toggle("active", isDropdownOpen);

    // Itera sobre cada elemento da NodeList e aplica a alteração de classe
    navLinks.forEach(navLink => {
        navLink.classList.toggle("disable", isDropdownOpen);
    });
}

