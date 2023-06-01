function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vmt5o3I0h/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}