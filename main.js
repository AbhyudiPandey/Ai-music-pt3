song1 = "";
song2 = "";
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;


function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("sample-15s.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log('leftwristX = ' + leftwristX + 'leftwristY = '  + leftwristY);
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log('rightwristX = ' + rightwristX + 'rightwristY = '  + rightwristY);
    }
}

function modelloaded()
{
    console.log('modelloaded succssesful');
}

function draw()
{
    image(video,0,0,600,500);

}

function play()
{
    song1.play();
    song1.setvolume(1);
    song1.rate(1);
}





