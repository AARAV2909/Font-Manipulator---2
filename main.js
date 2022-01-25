function setup(){
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(10, 50);
    canvas = createCanvas(400, 400);
    canvas.position(430, 130);
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose' ,gotposes);
}
function modelDone(){
    console.log("Posenet is operate and laden")
}
function draw(){
    background("#5196e3");
}
function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"leftwrist_y = "+results[0].pose.rightWrist.x);
    }
}