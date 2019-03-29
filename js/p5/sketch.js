var t;
var mySong;

var bgcolor;
var buttona;
var buttonb;
var buttonc;
var buttond;
var buttone;
var buttonf;
var buttong;
var buttonh;
var buttoni;
var buttonj;

var numbera = 12;
var numberb = 250;
var numberc = 72;
var numberd = 396;
var numberf = 27;
var numberg = 0.7;
var countryname = 'Afghanistan';

function preload() {
  mySong = loadSound('./music/taipingchangan.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  bgcolor = color(200);

  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  mySong.play();

  buttona = createButton('Afghanistan');
  buttona.mousePressed(changeNumbera);

  buttonb = createButton('China');
  buttonb.mousePressed(changeNumberb);

  buttonc = createButton('Gambia');
  buttonc.mousePressed(changeNumberc);

  buttond = createButton('India');
  buttond.mousePressed(changeNumberd);

  buttone = createButton('Italy');
  buttone.mousePressed(changeNumbere);

  buttonf = createButton('Korea North');
  buttonf.mousePressed(changeNumberf);

  buttong = createButton('Nigeria');
  buttong.mousePressed(changeNumberg);

  buttonh = createButton('Sierra Leone');
  buttonh.mousePressed(changeNumberh);

  buttoni = createButton('South Africa');
  buttoni.mousePressed(changeNumberi);

  buttonj = createButton('Yemen');
  buttonj.mousePressed(changeNumberj);
}

function changeNumbera() {
  numbera = 12;
  numberb = 250;
  numberc = 72;
  numberf = 27;
  numberg = 0.7;
  frameCount = 0;
  numberd = 396;
  countryname = 'Afghanistan';
}

function changeNumberb() {
  numbera = 4;
  numberb = 100;
  numberc = 48;
  numberf = 4;
  numberg = 0.6;
  frameCount = 0;
  numberd = 27;
  countryname = 'China';
}

function changeNumberc() {
  numbera = 19;
  numberb = 280;
  numberc = 58;
  numberf = 27;
  numberg = 0.75;
  frameCount = 0;
  numberd = 706;
  countryname = 'Gambia';
}

function changeNumberd() {
  numbera = 7;
  numberb = 150;
  numberc = 70;
  numberf = 4;
  numberg = 0.6;
  frameCount = 0;
  numberd = 174;
  countryname = 'India';
}

function changeNumbere() {
  numbera = 3;
  numberb = 100;
  numberc = 48;
  numberf = 4;
  numberg = 0.6;
  frameCount = 0;
  numberd = 4;
  countryname = 'Italy';
}

function changeNumberf() {
  numbera = 5;
  numberb = 150;
  numberc = 70;
  numberf = 4;
  numberg = 0.6;
  frameCount = 0;
  numberd = 82;
  countryname = 'Korea North';
}

function changeNumberg() {
  numbera = 21;
  numberb = 280;
  numberc = 58;
  numberf = 27;
  numberg = 0.75;
  frameCount = 0;
  numberd = 814;
  countryname = 'Nigeria';
}

function changeNumberh() {
  numbera = 33;
  numberb = 280;
  numberc = 58;
  numberf = 27;
  numberg = 0.75;
  frameCount = 0;
  numberd = 1360;
  countryname = 'Sierra Leone';
}

function changeNumberi() {
  numbera = 6;
  numberb = 150;
  numberc = 70;
  numberf = 4;
  numberg = 0.6;
  frameCount = 0;
  numberd = 138;
  countryname = 'South Africa';
}

function changeNumberj() {
  numbera = 11;
  numberb = 250;
  numberc = 72;
  numberf = 27;
  numberg = 0.7;
  frameCount = 0;
  numberd = 385;
  countryname = 'Yemen';
}

function draw() {
  background(0);
  t = abs(cos(frameCount * 0.003));
  flower(
    numberb * t + 50,
    numberf,
    numbera,
    100,
    numberc,
    0.45 * t + 0.1,
    numberg,
    PI * (1 - t)
  ); //33

  if (frameCount == 520) {
    frameCount = 0;
  }
  textAlign(LEFT);
  textSize(12);
  fill(120);
  textFont('Lora');
  text(
    'The dataset is about the maternal mortality ratio in various countries in 2015. ',
    20,
    220
  );
  text('The Info-poetry is about the metaphor of flower. ', 20, 235);
  text(
    'The flower flake number is projected as maternal mortality ratio number. ',
    20,
    250
  );
  text(
    'Flowers would sacrifice and give next generations life, which is the same as ',
    20,
    280
  );
  text(
    'that mothers give birth to next generations but sacrifice themselves due to ',
    20,
    295
  );
  text(
    'fertility. The mother love in fertility is like the beauty of flower blossom,',
    20,
    310
  );
  text(
    'while the mother sacrifice in fertility is like the flower withering. ',
    20,
    325
  );

  text(
    'Here, the illustration shows that the digital flower is withering and gradually ',
    20,
    355
  );
  text(
    'changing into a ball, as the fertilized egg. You can click the button to see the ',
    20,
    370
  );
  text('flowers (Maternal Mortality Ratio) in various countries. ', 20, 385);

  text(
    'What I want to state is that we need to remember the love from mother, no  ',
    20,
    415
  );
  text(
    'matter whether she is by your side or not. Besides, contrasting in various  ',
    20,
    430
  );
  text(
    'country situations, we need to care about fertility health all over world, ',
    20,
    445
  );
  text('especially the third world country. ', 20, 460);

  text('@ Yifang Bao. Politecnico Milano. 2019  ', 20, height - 20);

  text('Maternal Mortality Ratio: ', 20, 120);
  text('Country:', 20, 60);
  fill(255);
  text('/ 100,000 ', 30, 170);
  textSize(24);
  text(numberd, 30, 150);
  text(countryname, 30, 90);
  textSize(37);
  fill(252);
  text('Maternal Mortality Ratio in 2015', width / 2 - 35, 85);
}

function flower(r, c, petalCount, circleCount, maxRad, minRad, frac, rot) {
  var rad = 0;
  noStroke();

  push();
  // translate(mouseX,mouseY);
  translate(width / 2 + 250, height / 2 + 50);
  for (var j = 0; j < petalCount; j++)
    for (var i = c; i <= circleCount; i = i + 1) {
      var tt = i / circleCount;
      var x = r * tt * cos(tt * rot + (2 * PI * j) / petalCount - PI / 2);
      var y = r * tt * sin(tt * rot + (2 * PI * j) / petalCount - PI / 2);

      if (i < frac * circleCount)
        rad = map(i, 0, frac * circleCount, minRad, maxRad);
      else rad = map(i, frac * circleCount, circleCount, maxRad, minRad);
      // fill(120,52,255,20);
      // fill(lerpColor( color(50 * t + 205, 127 * (1 - t), 0,10,10), color(100,105 * t, 100,10),i / circleCount));
      // fill(lerpColor( color(50 * t + 205, 127 * (1 - t), 0,10,20), color(20,85 * t, 100,20),i / circleCount));
      fill(
        lerpColor(
          color(50 * t + 205, 127 * (1 - t), 0, 10),
          color(20, 85 * t, 80, 20),
          i / circleCount
        )
      );
      ellipse(x, y, 2 * rad, 2 * rad);
    }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
