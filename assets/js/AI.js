const readAloudButton = document.getElementById("read-aloud-button");
		const textToRead = document.querySelector("main").innerText;
		const synth = window.speechSynthesis;
		let reading = false;
		let utterance = new SpeechSynthesisUtterance(textToRead);

		readAloudButton.addEventListener("click", () => {
			if (!reading) {
				// Exclude header and footer text
				const headerText = document.querySelector("header").innerText;
				const footerText = document.querySelector("footer").innerText;
				utterance.text = textToRead.replace(headerText, "").replace(footerText, "");

				// Set voice to AI-generated female voice
				const voices = synth.getVoices();
				const femaleVoice = voices.find(voice => voice.name === "Microsoft Zira - English (United States)");
				utterance.voice = femaleVoice;

				synth.speak(utterance);
				reading = true;
				readAloudButton.innerText = "Stop Reading";
			} else {
				synth.cancel();
				reading = false;
				readAloudButton.innerText = "Read Aloud";
			}
		});