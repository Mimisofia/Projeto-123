noseX = 0;
nosey = 0;

difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
}