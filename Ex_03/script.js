//criando um elemento
let subtitulo = document.createElement("h2")
//adicionando um texto ao elemento
subtitulo.textContent = "Este é o subtítulo"

//mapeando o elemento pai
let span = document.getElementById("unicoSpan")

//adicionado o elemento h2 como filho de outro elemento
span.appendChild(subtitulo)
