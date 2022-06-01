const response = [
    {
      nome: "Bosta em Lata",
      img: "https://static3.tcdn.com.br/img/img_prod/350075/adubo_organico_bosta_em_lata_para_orquideas_400g_5619_1_20220412114051.jpg",
      preco: 50
    },
    {
      nome: "Adubo",
      img: "https://www.sitiopema.com.br/wp-content/uploads/2021/09/Adubo-organico-macrofitas-12.jpg",
      preco: 100
    },
]
  
  let httpRequest;
  
  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE 8 and older
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  httpRequest.onreadystatechange = 
  
  
  
  window.onload = () => {
    
    const cardRender = document.getElementById("render");
    
  function createdCardHtml(nome, img, preco){
    
    return `
    <div class="card">
      <h1>${nome}</h1>
      <img src="${img}" />
      <h2>R$ ${preco}</h2>
      <button>Comprar</button>
    </div>`
    
  }
  
  const cards =  response.reduce((anterior, atual) => {
    
    return anterior+createdCardHtml(atual.nome, atual.img, atual.preco);
    
  }, "")
  
  // const cards = response.map((res) => {
    
    //   return createdCardHtml(res.nome, res.img, res.description);
    
    // }).join("")
    
    console.log(cards);
    
    cardRender.innerHTML = cards
    
    console.log(cardRender)
    
  }