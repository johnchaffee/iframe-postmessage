window.onload = function () {

	// --- SENDING MESSAGEES ---

  // Get a reference to the text box
  const textBox = document.getElementById("body");

  // Get a reference to the send message button
  const sendBtn = document.getElementById("sendBtn");

  // Add an event listener to execute function when send message button is clicked
  sendBtn.addEventListener("click", sendMessage);

  // Post message to targetWindow
  function sendMessage(e) {
    console.log("Send e.data: " + JSON.stringify(textBox.value, null, 2));
    // NOTE Replace targetWindow url with "*" when testing on localhost
    targetWindow.postMessage(textBox.value, "https://fir-smiling-sarahsaurus.glitch.me");
  }

  // --- RECEIVING MESSAGES ---

  // Get a reference to the <div> on the page that will display the message text.
  const messageEle = document.getElementById("message");

  // Add an event listener to process messages received by the window
  window.addEventListener("message", (e) => {
    console.log(e);
    console.log("Receive e.origin: " + e.origin);
    console.log("Receive e.isTrusted: " + e.isTrusted);
    console.log("Receive e.data: " + JSON.stringify(e.data, null, 2));

    // NOTE Replace e.origin url with "http://localhost" when testing on localhost
    if (e.origin !== "https://fir-smiling-sarahsaurus.glitch.me") {
    	return;
    } else {
    messageEle.innerHTML += `<p>Received Message from ${e.origin}: ${e.data}</p>`;
    }
  });
};
