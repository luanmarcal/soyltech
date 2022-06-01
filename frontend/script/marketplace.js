// const response = [
//   {
//     nome: "Bosta em Lata",
//     img: "https://static3.tcdn.com.br/img/img_prod/350075/adubo_organico_bosta_em_lata_para_orquideas_400g_5619_1_20220412114051.jpg",
//     preco: 50,
//   },
//   {
//     nome: "Adubo",
//     img: "https://www.sitiopema.com.br/wp-content/uploads/2021/09/Adubo-organico-macrofitas-12.jpg",
//     preco: 100,
//   },
// ];

const url = "http://localhost:4000/produtos";
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

let httpRequest;

if (window.XMLHttpRequest) {
  // Mozilla, Safari, ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 8 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = window.onload = () => {
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

  // const cards = response.map((res) => {

  //   return createdCardHtml(res.nome, res.img, res.description);

  // }).join("")

  console.log(cards);

  cardRender.innerHTML = cards;

  console.log(cardRender);
};
