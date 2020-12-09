var vidDimensions = {
    width : 200,
    height: 200
    }
var canvas
var video
var vidDimensions = {
    width : 200,
    height: 200
    }
var canvas
var video


function successCallback(stream) {
    window.stream = stream; // global variable available to console
    video = document.querySelector("video");
    video.src = window.URL.createObjectURL(stream);
    video.play();
}

function errorCallback(error){
    console.log("navigator.getUserMedia error: ", error);
}

function setupVideoPreview(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    constraints = {video: true};
    navigator.getUserMedia(constraints, successCallback, errorCallback);
}
//end video 

function initiateButton(){
    capture = document.getElementById('capture');
    console.log(capture);
    capture.addEventListener('click', function(ev){
          buttonPress();
          ev.preventDefault();
        }, false);
}
function initiateCanvas(){
    canvas = document.getElementById('preview');
    context = canvas.getContext('2d');
    canvas.height = vidDimensions.height
    canvas.width = vidDimensions.width

}
function captureImage(){
    context.drawImage(video, 0, 0, vidDimensions.width, vidDimensions.height);
    var data = canvas.toDataURL('image/png');
    return data
}
function buttonPress(){
    distributeData(captureImage());
}
document.addEventListener("DOMContentLoaded", function(event) { 
    setupVideoPreview();
    initiateButton();
    initiateCanvas()
})

function successCallback(stream) {
    window.stream = stream; // global variable available to console
    video = document.querySelector("video");
    video.src = window.URL.createObjectURL(stream);
    video.play();
}

function errorCallback(error){
    console.log("navigator.getUserMedia error: ", error);
}

function setupVideoPreview(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    constraints = {video: true};
    navigator.getUserMedia(constraints, successCallback, errorCallback);
}
//end video 

function initiateButton(){
    capture = document.getElementById('capture');
    console.log(capture);
    capture.addEventListener('click', function(ev){
          buttonPress();
          ev.preventDefault();
        }, false);
}
function initiateCanvas(){
    canvas = document.getElementById('preview');
    context = canvas.getContext('2d');
    canvas.height = vidDimensions.height
    canvas.width = vidDimensions.width

}
function captureImage(){
    context.drawImage(video, 0, 0, vidDimensions.width, vidDimensions.height);
    var data = canvas.toDataURL('image/png');
    return data
}
function buttonPress(){
    distributeData(captureImage());
}


