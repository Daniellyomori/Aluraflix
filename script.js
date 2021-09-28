function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    listarFilmesTela(filmeFavorito);
  } else {
    console.error("URL inválida");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesTela(filmeFavorito) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}