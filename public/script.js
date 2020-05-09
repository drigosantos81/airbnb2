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

// function calcula() {
//     const ckIn = document.getElementById("data-in").innerHTML;
//     const ckOut = document.getElementById("data-out").innerHTML;
//     const qtd1 = document.getElementById("qtdH").innerHTML;

//     const resultado = (ckOut - ckIn) * qtd1;

//     form.soma.value = ((form.dt1.value) + (form.dt2.value)) * (form.qtd.value);
    
//     console.log(ckIn);
//     console.log(ckOut);
//     console.log(qtd1);
//     console.log(resultado);
    
//     document.querySelector(".modal-preco").innerHTML = resultado;
// }
