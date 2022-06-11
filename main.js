console.log('ml5 version:', ml5.version);
function gotResults(error, result) 
{
    //label[0].results
    if (error) 
    {
        console.error(error);
    } 
    else 
    {
        document.getElementById("result").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence;
    }
}

navigator.mediaDevices.getUserMedia({ audio: true });

function modelLoaded() 
{
    console.log('MODEL LOADED!');
}
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kQwl6T8to/', modelLoaded);

function check() 
{
    classifier.classify(what, gotResults);
}
