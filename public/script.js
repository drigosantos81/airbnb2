function modal() {
    const modal = document.querySelector('.modal');
    const grids = document.querySelectorAll('.card');
    for (let grid of grids) {
        grid.addEventListener("click", function() {
            const imageId = grid.getAttribute("id");
            // const prop = grid.getElementById("propriedade").innerHTML;
            // const nome = grid.getElementById("nome").innerHTML;
            // const preco = grid.getElementById("preco").innerHTML;

            modal.classList.add("active");
            
            modal.querySelector("img").src = imageId;
            // modal.querySelector("h3").innerHTML = prop;
            // modal.querySelector("p").innerHTML = nome;
        });
    }

    document.querySelector(".close").addEventListener("click", function(event) {
        event.preventDefault(event);
        modal.classList.remove("active");
    });
}