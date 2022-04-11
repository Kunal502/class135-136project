status1 = "";
inputid= "";

function setup(){
    canvas = createCanvas(480 , 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480,480);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("Status").innerHTML = "Status : object is detecting";
    inputid = document.getElementById("object").value;
}

function modalLoaded(){
    console.log("modal is loaded");
    status1 = true;
}

function draw(){
    image(video,0,0,480,480);
}