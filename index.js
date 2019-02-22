var bot = new RiveScript();

bot.loadFile("brain/brain.rive").then(loading_done).catch(loading_error);


// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done() {
console.log("Bot has finished loading!");

// Now the replies must be sorted!
bot.sortReplies();

// And now we're free to get a reply from the brain!
// NOTE: the API has changed in v2.0.0 and returns a Promise now.
bot.reply("local-user", "hello").then(function(reply) {
console.log("The bot says: " + reply);
});
}

document.getElementById("QuesBox").onkeyup = function(event)
{
if (event.key === "Enter") {
event.preventDefault();
bot.reply("local-user", document.getElementById("QuesBox").value).then(function(reply) {
document.getElementById("AnswerLbl").innerHTML = reply;
});
}

}
// It's good to catch errors too!
function loading_error(error, filename, lineno) {
console.log("Error when loading files: " + error);
}