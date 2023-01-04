Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
})
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models',modelLoaded)
function modelLoaded(){
    console.log("model loaded")
}
modelLoaded.json