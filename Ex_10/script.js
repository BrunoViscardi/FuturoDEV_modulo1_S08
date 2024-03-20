
//Adicionar tarefa a lista de tarefas
document.getElementById("BotãoAdicionar").addEventListener('click', addTarefa);
function addTarefa() {
    //lendo o input
    let novaTarefa = document.getElementById("input").value

    //mapeando o lugar que receberá as novas tarefas
    let listaContainer = document.getElementById("listaContainer")


    //criando uma nova div que receberá a tarefa e suas funcionalidades
    let novoContainerTarefa=document.createElement("div")//criação do container
    novoContainerTarefa.setAttribute("class","containerTarefa") //definindo a classe

    let novoBotaoConcluido = document.createElement("div") //criação do botão concluido
    novoBotaoConcluido.setAttribute("class","botaoConcluido") //estilizando, definindo a classe
    novoBotaoConcluido.setAttribute("onclick", "concluir(this.parentNode)")//adicionando a funcionalidade a ele

    let novaDivTarefa = document.createElement("div")
    novaDivTarefa.appendChild(document.createTextNode(novaTarefa)) //adiconando o texto do input
    novaDivTarefa.setAttribute("class","tarefa") //estilizando, definindo a classe

    let novoBotaoExcluir = document.createElement("div") //criação do botão excluir
    novoBotaoExcluir.setAttribute("class","botaoExcluir") //estilizando, definindo a classe
    novoBotaoExcluir.setAttribute("onclick", "excluir(this.parentNode)")//adicionando a funcionalidade a ele


    //adicionado os elementos criados no container
    novoContainerTarefa.appendChild(novoBotaoConcluido)
    novoContainerTarefa.appendChild(novaDivTarefa)
    novoContainerTarefa.appendChild(novoBotaoExcluir)


    //inserindo no corpo do html, na lista de tarefas
    listaContainer.appendChild(novoContainerTarefa)
}


//definindo a função concluir: alteração do texto e cor do botão
function concluir(container) {
    let divTarefa = container.querySelector(".tarefa"); 
    let botaoConcluido = container.querySelector(".botaoConcluido");

    divTarefa.style.textDecoration = "line-through";
    botaoConcluido.style.backgroundColor = "#307351";
}


//definindo função excluir: remover elemento
function excluir(container) {
    container.remove()
}