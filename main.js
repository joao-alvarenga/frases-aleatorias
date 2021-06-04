// variaveis para as cores 
var containerCor = [
    '#60ee70','#c55c','#458787','#963489','#121212','#cc55','#149070','#05789d'
];

var bodyCor = [
    '#7b7554','#17183b','#a11692','#ff4f79','#ffb49a','#47df','#054da1','#005858'
];

// variavel para a cor atual 
var currentColor = 0;

// adicionar um evento on click para o button 
document.getElementById('btn').addEventListener('click', click);

function click()
{
    /* checar se a cor atual é o ultimo obcjeto no array, 
    se for colocar a cor de volta a 0 (a primeira cor no array) se não for 
    acrescentamos 1 a cor atual. */
    if (currentColor == bodyCor.length-1) currentColor = 0;
    else currentColor++; 

    /* agora podemos acrescentar as cores ao body e ao container */
    document.body.style.backgroundColor = bodyCor[currentColor];
    document.querySelector('.container').style.backgroundColor = containerCor[currentColor];

    /* quando terminar de carregar volta para a cor padrão. */
    window.onload = function() {
        document.body.style.backgroundColor = colors[currentColor];
      }
    }

    

/* on click carrega os elementos */
window.onload = function()
{
    document.getElementById('btn').addEventListener('click', novaFrase,
    false);
}

//usar fetch para fazer a requisiação API.
const url = "https://api.quotable.io/random";
function novaFrase(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("frase").innerHTML = data.content; document.querySelector("#autor").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
 
 // repitir generateQuote() cada 1000 Milissegundos.
setInterval(generateQuote() ,1000);
//Nota - 1000 milissegundos = 1 segundo
