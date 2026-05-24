const menuButton = document.querySelector(".menu-mobile");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    if(name === "") {

        alert("Preencha o nome.");

        return;
    }

    alert("Mensagem enviada com sucesso!");

});