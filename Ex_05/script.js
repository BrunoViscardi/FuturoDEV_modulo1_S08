//selecionando um elemento html por classe
let texto = document.getElementsByClassName("texto")



//atribuindo novos atributos a classe. Necessário um processo iterativo com o for
for (let index = 0; index < texto.length; index++) {
    texto[index].style.cssText = "background-color:chartreuse; border: 5px royalblue solid"
}


