nosex = 0;
nosey = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    x = ml5.poseNet(video, modelLoaded);
    x.on('pose', gotPoses);
}
function preload(){
clown = loadImage('moustache.png');
}
function draw(){
image(video, 0, 0, 300, 300);
image(clown, nosex, nosey, 30, 30);
}
function take_snapshot(){
    save("mustache-Image.png");
}
function modelLoaded(){
    console.log("Model loaded!");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
nosex = results[0].pose.nose.x-12;
nosey = results[0].pose.nose.y;
}
}