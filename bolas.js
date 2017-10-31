class Bolas{
    constructor(juego){
        this.pelota;
        this.bolaLanzada=false;
        this.bolaVelocidad=400;
        this.puntaje1T;
        this.puntaje2T;
        this.puntaje1=0;
        this.puntaje2=0;
    }
    precarga(){
        juego.load.image("bola","./recursos/ball.png");
        //puntaje
        juego.load.bitmapFont("fuente","./recursos/font/font.png","./recursos/font/font.xml");
    }

    crear(){

        //creamos el sprite
        this.pelota=juego.add.sprite(juego.world.centerX,juego.world.centerY,"bola");
        //habilitamos el centro
        this.pelota.anchor.setTo(0.5,0.5);
        //habilitamos la fisica
        juego.physics.arcade.enable(this.pelota);
        //habilitamos los limites
        this.pelota.body.collideWorldBounds=true;
        //habilitamos los limites del colisionador
        this.pelota.body.bounce.setTo(1,1);
       
        //el texto
        this.puntaje1T=juego.add.bitmapText(128,128,"fuente","0",64);
        this.puntaje2T=juego.add.bitmapText(juego.world.width-128,128,"fuente","0",64);
        //el contexto en que se despliega es este, por ello va this.
        juego.input.onDown.add(this.control,this);
    }

    control(){
        if(this.bolaLanzada){
            this.pelota.x=juego.world.centerX;
            this.pelota.y=juego.world.centerY;
            this.pelota.body.velocity.setTo(0,0);
            this.bolaLanzada=false;
        }else{
            this.pelota.body.velocity.x=-this.bolaVelocidad;
            this.pelota.body.velocity.y=this.bolaVelocidad;
            this.bolaLanzada=true;
        }
        console.log(this.bolaLanzada);
    }
    colision(){
      
        if(this.pelota.body.blocked.left){
            this.puntaje2+=1;
            this.puntaje2T.text=this.puntaje2;
        }else if(this.pelota.body.blocked.right){
            this.puntaje1+=1;
            this.puntaje1T.text=this.puntaje1;
        }
    }

}
