const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
recognition.Lang = "en-US";

const voice = document.querySelector("#btn");
btn.addEventListener("click", () => {


    //convert text to voice
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command) {
        if (command.includes("open youtube")) {
            speak("open youtube....")
            window.open("https://www.youtube.com", "_blank")

        } else if (command.includes("open facebook")) {
            speak("open facebook....")
            window.open("https://www.facebook.com", "_blank")

        } else if (command.includes("open instagram")) {
            speak("open instagram....")
            window.open("https://www.instagram.org", "_blank")

        } else if (command.includes("open telegram")) {
            speak("open telegtam....")
            window.open("https://www.telegram.com", "_blank")

        } else if (command.includes("open google")) {
            speak("open google....")
            window.open("https://www.google.com", "_blank")

        } else if (command.includes("open whatsapp")) {
            speak("open whatsapp....")
            window.open("https://www.whatsapp.com", "_blank")
        }
        else {
            speak("search on google.....");
            window.open('https://www.google.com//search?q=${command}',"_blank")
            
        }
        

    }
    speak("Hello, how can i help you")

    setTimeout(() => {
        btn.innerHTML ="Listening..."
        btn.style.backgroundcolor ="red"
        recognition.start();

    }, 2000);

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase()
        handleCommands(command);
        

    };
     recognition.onend = ()=>{
        btn.style.backgroundcolor ="red"
        btn.innerHTML ="start listening"

        
     }
});

