# post-message
 
This is a sample project that demonstrates how to pass messages between a parent and child iframe window using [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

- Parent window (index.html) embeds an iframe (child.html).
- Both the parent and window register listeners for receiving messages from the other window.
- Both the parent and the window send messages targeting the other window.

Resources:

- Tutorial - [How to Securely Send Messages Between Windows with postMessage](https://blog.teamtreehouse.com/cross-domain-messaging-with-postmessage)
- MDN Page -  [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

View the [sample app](https://johnchaffee.github.io/iframe-postmessage/).
