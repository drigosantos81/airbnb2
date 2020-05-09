function modal() {
    const modal = document.querySelector('.modal');
    const grids = document.querySelectorAll('.card');
    for (let grid of grids) {
        grid.addEventListener("click", function() {
            const imageId = grid.getAttribute("id");
            const prop = grid.querySelector(".prop-image").innerHTML;
            const nome = grid.querySelector(".prop-name").innerHTML;
            const preco = grid.querySelector(".prop-preco").innerHTML;
            
            modal.classList.add("active");
            
            modal.querySelector("img").src = imageId;
            modal.querySelector("h3").innerHTML = prop;
            modal.querySelector(".modal-name").innerHTML = nome;
            modal.querySelector(".modal-preco").innerHTML = preco;
        });
    }

    document.querySelector(".close").addEventListener("click", function(event) {
        event.preventDefault(event);
        modal.classList.remove("active");
    });
}