//selecionando um elemento html por classe
let texto = document.getElementsByClassName("texto")



//alterando seu texto. Necessário um processo iterativo com o for
for (let index = 0; index < texto.length; index++) {
    texto[index].textContent = "Texto alterado"    
}
