//variaveiRaquete
 let xRaquete = 5
 let yRaquete = 150
 let baseRaquete = 10
 let alturaRaquete =90
 rect(xRaquete,yRaquete,baseRaquete,alturaRaquete)

//variaveisdaBolinha
 let xBolinha = 300
 let YBolinha = 200
 let diametro = 30

//velocidadeBolinha
 let velocidadexBolinha = 5
 let velocidadeyBolinha = 5

function setup(){
  createCanvas(600, 400);
}

function draw(){
  background("black")
  mostraBolinha()
  movimentoBolinha()
  verificacaoColisaoBorda()
  mostraRaquete()
  
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
}
function movimentoxBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}

if(xBolinha +15 >width || xBolinha <0)
  velocidadexBolinha *= -1
if(yBolinha +15 >height || yBolinha <0)
  velocidadeyBolinha *= -1
}

