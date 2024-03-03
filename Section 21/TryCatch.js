prompt = require("prompt-sync")();

function speak(msg)
{
    try{
        console.log("Message Sent = ",msg.toUpperCase());
    }
    catch(e)
    {
        console.log("Next time , send correct message");
    }
}

//const msg = prompt("write : ");
speak(6);