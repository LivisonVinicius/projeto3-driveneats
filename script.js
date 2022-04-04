function liberarBotao() {
    const verify = document.querySelectorAll(".Selecionada").length;
    const botao = document.querySelector(".botaoBottom");
    const botaoDesativo = document.querySelector("footer").firstElementChild
    if (verify === 3) {
        botao.classList.remove("escondido");
        botaoDesativo.classList.add("escondido");
    }if ( verify===1){
        botaoDesativo.querySelector("h2").innerHTML =botaoDesativo.querySelector("h2").innerHTML.replace("3" , 3-verify.toString()) 
        console.log(verify)
    }if (verify===2){
        botaoDesativo.querySelector("h2").innerHTML =botaoDesativo.querySelector("h2").innerHTML.replace("os 2 itens" , `mais ${3-verify.toString()} item`) 
        console.log(verify)

    }
}
function seleciona(opcao, tipo) {
    const opcaoSelecionada = document.querySelector(`.${tipo} .Selecionada`);
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("Selecionada");
    }
    opcao.classList.add("Selecionada");
    liberarBotao()
}
function fechaConta() {
    let comida = document.querySelector(".Comida .Selecionada");
    let drink = document.querySelector(".Drink .Selecionada");
    let dessert = document.querySelector(".Dessert .Selecionada");
    const nomeComida = comida.querySelector("h4").innerHTML;
    const nomeDrink = drink.querySelector("h4").innerHTML;
    const nomeDessert = dessert.querySelector("h4").innerHTML;
    const nome = prompt("Insira o seu nome:")
    const endereço = prompt("Insira o endereço da entrega:");
    comida = comida.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    drink = drink.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    dessert = dessert.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    const valorFinal = (Number(comida) + Number(drink) + Number(dessert)).toFixed(2);
    window.open("https://wa.me/5521965778101?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida}
    - Bebida: ${nomeDrink}
    - Sobremesa: ${nomeDessert}
    Total: R$ ${valorFinal}
    
    Nome: ${nome}
    Endereço: ${endereço}`));
}
function confirmacao() {
    const confirmar = document.querySelector(".confirmacao")
    confirmar.classList.remove("escondido")
    let comida = document.querySelector(".Comida .Selecionada");
    let drink = document.querySelector(".Drink .Selecionada");
    let dessert = document.querySelector(".Dessert .Selecionada");
    const nomeComida = comida.querySelector("h4").innerHTML;
    const nomeDrink = drink.querySelector("h4").innerHTML;
    const nomeDessert = dessert.querySelector("h4").innerHTML;
    comida = comida.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    drink = drink.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    dessert = dessert.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    const valorFinal = (Number(comida) + Number(drink) + Number(dessert)).toFixed(2);
    document.querySelector(".comida h4").innerHTML = nomeComida;
    document.querySelector(".bebida h4").innerHTML = nomeDrink;
    document.querySelector(".sobremesa h4").innerHTML = nomeDessert;
    document.querySelector(".valorFinal h5").innerHTML = valorFinal;
    document.querySelector(".comida h5").innerHTML = comida;
    document.querySelector(".bebida h5").innerHTML = drink;
    document.querySelector(".sobremesa h5").innerHTML = dessert;
}
function cancelar() {
    const cancelar = document.querySelector(".confirmacao")
    cancelar.classList.add("escondido")
}

