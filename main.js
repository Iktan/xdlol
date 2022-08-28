var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
    speak();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = 'selfie_1';
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000)

    setTimeout(function(){
        img_id = 'selfie_2';
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 15000)

    setTimeout(function(){
        img_id = 'selfie_3';
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 20000)

    setTimeout(function(){
        img_id = 'selfie_4';
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 25000)

    setTimeout(function(){
        img_id = 'selfie_5';
        take_snapshot();
        speak_data = "Thank You";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 30000)
}

function take_snapshot(){
    console.log(img_id);
    
    Webcam.snap(function(data_uri){

        if (img_id == 'selfie_1'){
            document.getElementById('img_1').src = data_uri;
        }
    });

    Webcam.snap(function(data_url){

        if (img_id == 'selfie_2'){
            document.getElementById('img_2').src = data_url;
        }
    });

    Webcam.snap(function(data_ur){

        if (img_id == 'selfie_3'){
            document.getElementById('img_3').src = data_ur;
        }
    });

    Webcam.snap(function(data_urii){
        if (img_id == 'selfie_4'){
            document.getElementById('img_4').src = data_urii;
        }
    });

    Webcam.snap(function(data_urll){
        if (img_id == 'selfie_5'){
            document.getElementById('img_5').src = data_urll;
        }
    });
}