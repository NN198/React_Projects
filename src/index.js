

let img;
let detector;

function preload(){
  img = loadImage('./images/ladyEating.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results)
{
  if(error)
    {
      console.log(error)
    }
  console.log(results);
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);
  console.log(detector)
  detector.detect(img, gotDetections);
}
// function setup()
// {
//     // noCanvas();
//     // tf.tensor([1,2,4,5]).print()
//     // createCanvas(600, 600);
//     // Call the draw function
//     // draw();
//     const data = tf.tensor([1,2,3,4]).print();
//     console.log(data.toString());
// }

// // function draw() {
// //     // Draw something on the canvas
// //     background(220);
// //     fill(255, 0, 0);
// //     rect(80, 50, 100, 100);
// //     // You can add more drawing logic here
// //   }

// setup()
