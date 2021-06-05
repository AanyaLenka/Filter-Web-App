nose_x=0;
nose_y=0;

function preload()
{
beard=loadImage('m0-removebg-preview.png');
}

function setup()
{
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function take_snapshot()
{
save('funny face.png');
}

function draw()
{
image(video,0,0,400,400);
image(beard,nose_x,nose_y,60,30);
}

function modelLoaded()
{
console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
nose_x=results[0].pose.nose.x-26;
nose_y=results[0].pose.nose.y;
console.log("nose x= "+nose_x);
console.log("nose y= "+nose_y);
}
}