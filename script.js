function liberarBotao() {
    const verify=document.querySelectorAll(".Selecionada").length;
    const botao =document.querySelector("footer .botaoBottom");
    const botaoDesativo= document.querySelector("footer").firstElementChild
    if(verify ===3){
        botao.classList.remove("escondido");
        botaoDesativo.classList.add("escondido")
    }
}

function seleciona(opcao,tipo){
    const opcaoSelecionada=document.querySelector(`.${tipo} .Selecionada`);
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("Selecionada");
    }        
    opcao.classList.add("Selecionada");
    liberarBotao()    
}
function fechaConta(){
    let comida = document.querySelector(".Comida .Selecionada");
    let drink = document.querySelector(".Drink .Selecionada");
    let desert = document.querySelector(".Desert .Selecionada");
    const nomeComida=comida.querySelector("h4").innerHTML;
    const nomeDrink=drink.querySelector("h4").innerHTML;
    const nomeDesert=desert.querySelector("h4").innerHTML;
    comida=comida.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    drink=drink.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    desert=desert.querySelector("h6").innerHTML.slice(2).replace(",", ".");
    const valorFinal= (Number(comida)+Number(drink)+Number(desert)).toFixed(2);
    window.open("https://wa.me/5521965778101?text="+encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida}
    - Bebida: ${nomeDrink}
    - Sobremesa: ${nomeDesert}
    Total: R$ ${valorFinal}`));
}

