var string1 = "The villagers got a pair of coffins in a hurry. They put Amooma and Apoopan in the coffins and took them to the burial ground";
 

var string2 ="But when it was time to shut the coffin Apoopan's coffin turned out to be a little small.  'Let us just break his leg' said one man. ";



var string3= " 'After all he is dead.'  'Let us do that' said another.";

var string4=  " All the villagers agreed to break Apoopan's leg to make him fit in the coffin. ";

var string5="Hearing this Apoopan jumped up with a start and said  'No, no, no! Please spare my legs.'"; 

  var string6= " 'I win the appam' shouted Amooma and ran towards the house.";

 
	

			function checkCompatibilty () {
				if(!('speechSynthesis' in window)){
					alert('Your browser is not supported. If google chrome, please upgrade!!');
				}
			};

			checkCompatibilty();

			var voiceOptions = document.getElementById('voiceOptions');
			var volumeSlider = document.getElementById('volumeSlider');
			var rateSlider = document.getElementById('rateSlider');
			var pitchSlider = document.getElementById('pitchSlider');
var myText = document.getElementById('myText');

			var voiceMap = [];

			function loadVoices () {
				var voices = speechSynthesis.getVoices();
				for (var i = 0; i < voices.length; i++) {
					var voice = voices[i];
					var option = document.createElement('option');
					option.value = voice.name;
					option.innerHTML = voice.name;
					voiceOptions.appendChild(option);
					voiceMap[voice.name] = voice;
				};
			};

			window.speechSynthesis.onvoiceschanged = function(e){
				loadVoices();
			};


function initializeMsg(msg){
  msg.volume = volumeSlider.value;
				msg.voice = voiceMap[voiceOptions.value];
                msg.rate = rateSlider.value;
				msg.Pitch = pitchSlider.value;
}

			
function speak(){
                
                var msg1 = new SpeechSynthesisUtterance();
                initializeMsg(msg1);
				msg1.text = string1;
				window.speechSynthesis.speak(msg1);
                var msg2 = new SpeechSynthesisUtterance();
                initializeMsg(msg2);
                msg2.text = string2;
               	window.speechSynthesis.speak(msg2);
                var msg3 = new SpeechSynthesisUtterance();
                initializeMsg(msg3);
                msg3.text = string3;
                window.speechSynthesis.speak(msg3);
     
                var msg4 = new SpeechSynthesisUtterance();
                initializeMsg(msg4);           
                msg4.text = string4;
                window.speechSynthesis.speak(msg4); 
                
                var msg5 = new SpeechSynthesisUtterance();
                initializeMsg(msg5);
                msg5.text = string5;
                window.speechSynthesis.speak(msg5);
     
                var msg6 = new SpeechSynthesisUtterance();
                initializeMsg(msg6);           
                msg6.text = string6;
                window.speechSynthesis.speak(msg6); 
};

			

speak();

function stop(){
speechSynthesis.cancel();
}

function pause(){
speechSynthesis.pause();
}

function resume(){
speechSynthesis.resume();
}
