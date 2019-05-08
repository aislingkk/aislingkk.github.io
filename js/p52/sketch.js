var circle = 200;
var rot;
var col;
var freq = 0.00001;
var cont = 0;
var r;
var z;
var mySong;

function preload() {
  mySong = loadSound('./music/youyuanjingmeng.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 0;

  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  mySong.play();
}

function draw() {
  var x = map(0, 0, width, 1, 1.5);
  translate((width / 7) * 5, height / 2 - 10);

  var volume = analyser.getLevel();
  z = map(volume, 0, 1, 250, 450);

  background(245, 255, 250);
  fill(122, 100, 74, 90);
  stroke(12, 100, 74);

  var angle = map(0, 0, 20, 0, PI);
  var cos_a = cos(angle);
  var sin_a = sin(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);

  ellipseMode(RADIUS);
  for (var i = 0; i < z; i++) {
    circle = z / 1.5 + 50 * cos(millis() * freq * i);
    col = map(circle, 150, 250, 255, 100);
    r = map(circle, 150, 250, 1, 4.5);
    fill(82, col, 128);
    strokeWeight(r / 5);
    stroke(82, 190, 128, 70);
    ellipse(circle * cos(i), circle * sin(i), r * x, r * x);
    line(
      circle * cos(i),
      circle * sin(i),
      circle * cos(i - 3),
      circle * sin(i - 3)
    );
    rot = rot + 0.00005;
    translate(a / 100, a / 100);
  }
  textAlign(LEFT);
  textSize(10);
  fill(120);
  textFont('Lora');
  textSize(16);
  text(
    'The Beauty of Multi-Colored Flowers in Full Bloom ( 1986 Jiqing Zhang) ',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 115
  );
  textSize(12);
  text(
    '牡丹亭·游园惊梦·皂罗袍   1986·张继青',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 150
  );
  textSize(10.7);
  text(
    'Not in the garden,How could I compare thee to the spring day?',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 180 + 40
  );
  text(
    'The beauty of multi-colored flowers in full bloom is wasted on the dilapidated well and crumbling walls.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 200 + 40
  );
  text(
    'At such a good hour, in sight of such a charming scenery, I feel, however, overshadowed by a helpless sense. ',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 220 + 40
  );
  text(
    'This courtyard is where one could have enjoyed pleasurable things in a jocund mood, I wonder to whom it once belonged. ',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 240 + 40
  );
  text(
    'In the emerald edifice nestling amidst glorious clouds, the scenes seen from it at morn and eve would change.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 260 + 40
  );
  text(
    'When it was breezy and drizzling pleasure boating could found on the misty river.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 280 + 40
  );
  text(
    'Girls behind the silk screen in the chamber valued not their time.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 300 + 40
  );
  text(
    'Soon the blaze of red azalea in the green mountains would fade out.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 320 + 40
  );
  text(
    'Beyond the roseleaf raspberry they would be intoxicated and tired by the foggy river.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 340 + 40
  );
  text(
    'Peony, though charming, at leisure, they would listen to the swallow twitter and the orioles sweet notes.',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 360 + 40
  );
  textSize(11);
  text(
    '不到园林，怎知春色如许？',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 380 + 60
  );
  text(
    '原来姹紫嫣红开遍，似这般都付与断井颓垣，',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 400 + 60
  );
  text(
    '良辰美景奈何天，便赏心乐事谁家院。',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 420 + 60
  );
  text(
    '朝飞暮卷，云霞翠轩，',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 440 + 60
  );
  text(
    '雨丝风片，烟波画船，',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 460 + 60
  );
  text(
    '锦屏人忒看的这韶光贱。',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + 480 + 60
  );
  textSize(10);
  text(
    '@ Yifang Bao. Yijiang Niu. Yi Chen. Ning Wang. Politecnico Milano.2019. Digital Culture. Giovanna Di Rosario. Stefano Calzati',
    0 - (width / 7) * 5 + width / 20,
    0 - windowHeight / 2 + windowHeight - 10
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
