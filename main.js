function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6Qf4GxFXh/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults (error, results) {
    if (error) {
        console.error(error);
     } else{ console.log(results);
 random_number_r = Math.floor(Math.random() * 255) + 1;
 random_number_g = Math.floor(Math.random() * 255) + 1; random_number_b = Math.floor(Math.random() * 255) + 1;
 document.getElementById("result_label").innerHTML = 'I can hear-'+
 results[0].label;
 document.getElementById("result_confidence").innerHTML = 'Accuracy-'+
 (results[0].confidence*100).toFixed(2)+" %";
 document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";
 img = document.getElementById('alien1'); img1 = document.getElementById('alien2'); img2= document.getElementById('alien3'); img3 = document.getElementById('alien4');

img = document.getElementById('cat') ;
img1 = document.getElementById('dog');
 img2 = document.getElementById('bird');

if (results[0].label == "meowing") {
    img.src = 'cat.gif';
    imgl.src = 'dog.png';
    img2.src = 'bird.png';
    } else if (results[0].label == "barking") {
    img.src = 'cat.png';
    img1.src = 'dog.gif';
    img2.src = 'bird.png';
    } else(results[0].label == "chirping") 
    img.src = 'cat.png';
    img1.src = 'dog.png';
    img2.src ='bird.gif';
     
    }
}
