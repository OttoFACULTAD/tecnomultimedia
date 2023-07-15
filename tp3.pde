//video explicativo: https://youtu.be/cQZimayUW4Y
//Octavio Rodriguez, 93079/5, Comisión 5, TP 3
PImage[] imagenes = new PImage[13];
int indiceImagenActual = 0;
PFont fuente;
boolean mostrarBotonAvanzar = false;
boolean mostrarBotonReiniciar = false;
boolean mostrarBotonAnterior = false;
boolean mostrarBotonCreditos = false;

void setup() {
  size(600, 600);
  background(0);

  // Cargar las imágenes
  for (int i = 0; i < 13; i++) {
    imagenes[i] = loadImage((i + 1) + ".jpg");
  }

  // Cargar la fuente
  fuente = createFont("Greconian.ttf", 16);
}

void draw() {
  background(0);

  // Ajustar la imagen al tamaño de la ventana
  float proporcion = min((float) width / imagenes[indiceImagenActual].width, (float) height / imagenes[indiceImagenActual].height);
  int anchoImagen = (int) (proporcion * imagenes[indiceImagenActual].width);
  int altoImagen = (int) (proporcion * imagenes[indiceImagenActual].height);
  int xImagen = width / 2;
  int yImagen = height / 2;

  imageMode(CENTER);
  image(imagenes[indiceImagenActual], xImagen, yImagen, anchoImagen, altoImagen);

//un switch para caracterizar las pantallas
  switch (indiceImagenActual) {
    case 0:
      textSize(32);
      BordeDelTexto("La Ilíada", width / 2, 50);
      mostrarBoton("creditos", width / 4, height - 40);
      mostrarBoton("random", width/ 4, height -100);
      mostrarBoton("Comenzar", width / 2, height - 40);
      break;
    case 1:
      textSize(16);
      String textoImagen2 = "En una época de Héroes y dioses, en las islas del mar Egeo,\nse desató una guerra entre Troyanos y Aqueos consecuencia \ndel rapto de Helena de Troya por parte del príncipe Paris, lo cual \ndesató la furia de Menelao esposo de Helena y rey de Esparta. \n\nEn el noveno año de la guerra de Troya ocurren \nciertos acontecimientos que involucran a Aquiles, nuestro \nprotagonista, al cual debemos ayudar para poder \ncumplir su destino";
      BordeDelTexto(textoImagen2, width / 2, height - 150);
      mostrarBoton("Avanzar", width - 80, height - 40);    
      mostrarBoton("Anterior", 72, height - 40);  
      break;
    case 2:
      textSize(16);
      String textoImagen3 = "Todo empieza con el rapto de Briseida por parte de Agamenón rey \nde Micenas y líder del ejército griego. \nComo consecuencia, Aquiles abandona junto a sus ejércitos \nel campo de batalla y el ejército Aqueo se ve muy disminuido";
      BordeDelTexto(textoImagen3, width / 2, height - 525);
      mostrarBoton("Avanzar", width - 80, height - 40);
      mostrarBoton("Anterior", 80, height - 40);
      break;
    case 3:
      textSize(16);
      String textoImagen4 = "Patroclo, quien era un amigo muy cercano de Aquiles, trata de \nconvencerlo para que le permita liderar al ejército de \nMirmidón en la batalla llevando puesta su armadura \n\nDejar que Patroclo se haga pasar por Aquiles?";
      BordeDelTexto(textoImagen4, width / 2, height - 525);
      mostrarBoton("SI", width / 2 - 80, height - 40);
      mostrarBoton("NO", width / 2 + 80, height - 40);      
      mostrarBoton("Anterior", 80, height - 40);      
      break;
    case 4:
      textSize(16);
      String textoImagen5 = "Patroclo logra hacer retroceder a las fuerzas troyanas, \npero Héctor, príncipe troyano, lo mata durante \nla batalla pensando que mató al héroe Aquiles.";
      BordeDelTexto(textoImagen5, width / 2, height - 95);
      mostrarBoton("Avanzar", width - 80, height - 40);     
      mostrarBoton("Anterior", 80, height - 40);     
      break;
    case 5:
      textSize(16);
      String textoImagen6 = "Aquiles se entera de que Héctor mata a Patroclo y de que los \ntroyanos no devolvieron su cuerpo para que fuera enterrado, \nesto desata la ira de Aquiles y provoca que decida \nvolver a la batalla para vengarse de Héctor.";
      BordeDelTexto(textoImagen6, width / 2, height - 95);
      mostrarBoton("Avanzar", width - 80, height - 40);     
      mostrarBoton("Anterior", 80, height - 40);      
      break;
    case 6:
      textSize(16);
      String textoImagen7 = "Aquiles termina por matar a Héctor en una batalla épica \ny, como venganza, arrastra su cadáver \n3 veces alrededor de las murallas de Troya para humillarlo.";
      BordeDelTexto(textoImagen7, width / 2, height - 550);
      mostrarBoton("Avanzar", width - 80, height - 40);     
      mostrarBoton("Anterior", 80, height - 40);      
      break;
    case 7:
      textSize(16);
      String textoImagen8 = "Ante este suceso Príamo, el padre de Héctor, reúne en su pecho el \nvalor necesario para cruzar al campamento enemigo y \nentrar en la tienda de Aquiles, asesino de su hijo. \nEs capaz de todo por recuperar su cadáver y dispensarle \nel funeral que merece. \n\nDejar que Príamo se lleve el cadáver de Héctor?";
      BordeDelTexto(textoImagen8, width / 2, height - 515);
      mostrarBoton("SI", width / 2 - 80, height - 40);
      mostrarBoton("NO", width / 2 + 80, height - 40);      
      mostrarBoton("Anterior", 80, height - 40);      
      break;
    case 8:
      textSize(16);
      String textoImagen9 = "Ante este acto de ternura y paternalismo \nAquiles se apiada de Príamo y le \ndevuelve el cadáver de Héctor para que \neste pueda ser enterrado dignamente.";
      BordeDelTexto(textoImagen9, width / 2, height - 525);
      mostrarBoton("Reiniciar", width / 2, height - 40);
      mostrarBotonReiniciar = true;      
      break;
    case 9:
      textSize(16);
      String textoImagen10 = "Aquiles decide matar a Priamo y los Aqueos \natacan troya 12 dias antes de lo previsto";
      BordeDelTexto(textoImagen10, width / 2, height - 525);
      mostrarBoton("Avanzar", width - 80, height - 40);
      mostrarBoton("Anterior", 80, height - 40);
      mostrarBotonReiniciar = false;
      break;
    case 10:
      textSize(16);
      String textoImagen11 = "Troya Arde";
      BordeDelTexto(textoImagen11, width / 2, height - 525);
      mostrarBoton("Reiniciar", width / 2, height - 40);
      mostrarBotonReiniciar = true;
      break;
    case 11:
      textSize(16);
      String textoImagen12 = "Aquiles y Patroclo se apartan de la guerra y los troyanos \nderrotan a los Aqueos, la historia de \nTroya cambia para siempre";
      BordeDelTexto(textoImagen12, width / 2, height - 525);
      mostrarBoton("Reiniciar", width / 2, height - 40);
      mostrarBotonReiniciar = true;
      break;
    case 12:
      textSize(16);
      fill(0);
      String textoImagen13 = "Créditos";
      BordeDelTexto(textoImagen13, width / 2, height - 525);
      if (!mostrarBotonAnterior) {
        mostrarBoton("Inicio", width / 2, height - 40);
      }
      break;
  }
}
