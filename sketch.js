
let sun;
let cam;

let sunTexture;
var textures = [];

var totalTextures = 200;
var angle = 0;
var loading = true;
var counter = 0;

let paused = false;
let iconPause;
let iconPlay;
let myDeltaTime = 0;


// Because of the asynchronous nature of file loading in JavaScript, we
// have to load the images in p5.js' preload() instead of in setup().
// function preload() {


//  //sunTexture = loadImage(random(textures));//loadImage('data/starseed248.png');

//     for (let i = 0; i < 329; i++){
//     textures[i] = loadImage('data/starseed-' + i +'.png')

//   }

 
// }


function preload() {
  soundFile = loadSound("logo/modular.mp3");
  iconPause = loadImage("logo/pause.png");
  iconPlay = loadImage("logo/play.png");
}


function Texture(filename) {
  loadImage(filename, texLoaded);
  //loadSound('logo/modular.mp3');
  function texLoaded(tex) {
    //console.log(filename);
    textures.push(tex);
    //textures[index] = sound;
    counter++;
    if (counter == totalTextures) {

      loading = false;
      displayButtons();
      button2.style('background-color', 'coral');
      sun = new Planet(40, 0, 0, random(textures));
      sun.spawnMoons(textures.length, 10);

    }
  }
}

function setup() {
   //userStartAudio();
  for (let i = 0; i < totalTextures; i++){
     Texture('data1/starseed-' + i +'.PNG');
      }

  let canvas = createCanvas(600, 600, WEBGL);


  // iconPause.loadPixels();
  // iconPlay.loadPixels();

  //   // start paused
  // pauseToggle();

  //canvas.mousePressed(toggleSong);
  // Disable the context menu on the canvas so the camera can use the right mouse button
  //canvas.elt.oncontextmenu = () => false;

  //cam = createEasyCam({ distance: 700 });



  
}


function displayButtons(){

    button = createImg('logo/play.png');
  // button.width = 5
  // button.height = 5
  button.style('float', 'right');
  button.style('width', '20px');
  button.style('padding', '5px');
  button.mousePressed(toggleSong);

  button2 = createImg('logo/pause.png');
  button2.width = 5
  button2.height = 5
  button2.style('float', 'right');
  button2.style('padding', '5px');
  button2.style('width', '20px');
  
  button2.mousePressed(toggleSong);
 

}
function toggleSong() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
    button.style('background-color', 'black');
    button2.style('background-color', 'coral');
  } else {
    soundFile.play();
     button.style('background-color', 'coral');
     button2.style('background-color', 'black');
  }
}

function draw() {
 background(0);
 orbitControl(.5,.5,.5);
 ///loading animation
    if (loading) {
    stroke(255);
    noFill();
     
    rect(0, 0, 200, 20);
   rectMode(CENTER);
     rect(0, 0, 590, 590);

    noStroke();
    fill(255);
    var w = (200 * counter) / totalTextures;
    rect(0, 0, w, 20);

    //translate(width / 2, height / 2);
    //rotate(angle);
    //strokeWeight(4);
    //stroke(255);
    //line(0, 0, 100, 0);
    angle += 0.1;
  } else {


  background(0);
  stroke(255);
    noFill();
 rectMode(CENTER);
     rect(0, 0, 590, 590);
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);
  sun.show();
  sun.orbit();
    //drawPlayButton();

}
}

// function drawPlayButton() {
//   let speaker = speakerImage();
//   tint(255, 255, 255, 100);
//   image(speaker, width - 50, height - 50, speaker.width / 3, speaker.height / 3);
// }

// function pauseToggle() {

//   paused = !paused;

//   if(paused) {
//     noLoop();
//   } else {
//     loop();
//     deltaTime = 0;
//   }
// }

// function keyPressed() {
//   if (keyCode === 32) {
//     pauseToggle();
//   }
// }

// function mouseClicked() {
//   userStartAudio();
//   pauseToggle();
  
// }



// function speakerImage() {
//   if(paused)
//     return iconPlay;
//   else
//     return iconPause;
// }
