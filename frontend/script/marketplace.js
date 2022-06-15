
const url = "https://soyltech.herokuapp.com/produtos";
let response = []

function getUsers() {
  axios
    .get(url)
    .then((res) => {
      response = res.data;
      console.log(response);
      renderApiResult.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

getUsers();
setTimeout(teste, 300);

function teste(){

  const cardRender = document.getElementById("render");

  function createdCardHtml(Nome, Img, Preco) {
    return `
    <div class="card">
      <h1>${Nome}</h1>
      <img src="${Img}" />
      <h2>R$ ${Preco}</h2>
      <button onclick="location.href='formulario_cliente.html'">
        <b>
          Compre já!
        </b>
      </button>
    </div>`;
  }

  const cards = response.reduce((anterior, atual) => {
    return anterior + createdCardHtml(atual.Nome, atual.Img, atual.Preco);
  }, "");

  cardRender.innerHTML = cards;
  console.log(cardRender);

}

