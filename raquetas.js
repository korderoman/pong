class Raquetas{
    constructor(juego){
        this.raqueta1;
        this.raqueta2;
        this.juego=juego;
       
        
    }
    precarga(){
        //imagen
        juego.load.image("raqueta","./recursos/raqueta.png");
        //audio
        juego.load.audio("hit1",["./recursos/s1.wav"]);
        juego.load.audio("hit2",["./recursos/s2.wav"]);
        
    }

    crear(){
        //creamos las raquetas
        this.raqueta1=juego.add.sprite(0,juego.world.centerY,"raqueta");
        this.raqueta2=juego.add.sprite(juego.world.width-8,juego.world.centerY,"raqueta");
        this.raqueta1.anchor.setTo(0.5,0.5);
        this.raqueta2.anchor.setTo(0.5,0.5);
        
        //habilitamos la fisica de las raquetas
        juego.physics.arcade.enable(this.raqueta1);
        juego.physics.arcade.enable(this.raqueta2);
        
        //habilitamos los limites de la raqueta respecto al canvas
        this.raqueta1.body.collideWorldBounds=true;
        this.raqueta2.body.collideWorldBounds=true;
        //hacemos que frente a las colisiones se mantenga inmovil
        this.raqueta1.body.immovable=true;
        this.raqueta2.body.immovable=true;
        //escalamos la dimension de la raqueta
        this.raqueta1.scale.setTo(0.5,0.5);
        this.raqueta2.scale.setTo(0.5,0.5);

      
        
        

    }

    control(bola){
        this.raqueta1.y=juego.input.y;
        if(this.raqueta1.y<this.raqueta1.height/2){this.raqueta1.y=this.raqueta1.height/2;}
        else if(this.raqueta1.y>juego.world.height-this.raqueta1.height/2){this.raqueta1.y=juego.world.height-this.raqueta1.height/2;}
        this.raqueta2.body.velocity.setTo(bola.pelota.body.velocity.y);
        this.raqueta2.body.velocity.x=0;
        this.raqueta2.body.maxVelocity.y=250;
        

    }
    colision(bola){
        
        juego.physics.arcade.collide(this.raqueta1,bola.pelota,function(){
            juego.sound.play("hit1");
          
        });
        juego.physics.arcade.collide(this.raqueta2,bola.pelota,function(){
            juego.sound.play("hit2");
          
        });
    }


   


}