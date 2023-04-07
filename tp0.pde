//Octavio Rodriguez
//Tp0 Com5
PImage img;  
void setup(){
   img = loadImage("maza-mecanica.jpg");
  background(255);
  size(800,400);
  textSize(25);
  
}
  void draw(){
    image(img, -50, -20);
    noStroke();
    rotate(radians(15));
   
    //mango de la maza
    fill(00, 50,50);
    rect(423,125,50,165);
    fill(175,00,00);
    rect(425,50,45,75);
    fill(00,50,50);
    rect(420,35,55,15);
   
   //cabeza de la maza
   fill(80);
   rect(375,-38,150,75);
   fill(00);
   text("Mota",420,5);
 
    //detalle del mango
    noFill();
    stroke(255);
    rect(430,55,35,65);
    ellipse(455,65,15,10);
   }
  
