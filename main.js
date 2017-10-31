var juego= new Phaser.Game(800,600,Phaser.AUTO,"",{preload:preload,create:create,update:update});
var raqueta= new Raquetas(juego);
var pelota= new Bolas(juego);
function preload(){
    
    raqueta.precarga();
    pelota.precarga();
    //agregamos la fuente de texto
    
}

function create(){
   // juego.physics.startSystem(Phaser.Physics.ARCADE);
    raqueta.crear();
    pelota.crear();
   //creamos el input de entrada
   // juego.input.onDown.add(p.control,this);
}



function update(){
   
    raqueta.control(pelota);
    raqueta.colision(pelota);
    pelota.colision();
    
}
