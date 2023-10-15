const obsever = new IntersectionObserver((elementos) => {
    elementos.forEach((elemento) => {
        if (elemento.isIntersecting) {
            elemento.target.classList.add("exibir")
        }
        else {
            elemento.target.classList.remove("exibir")
        }
    })
})

const elementosParaExibir = document.querySelectorAll(".animar-entrar")

elementosParaExibir.forEach((e) => obsever.observe(e))