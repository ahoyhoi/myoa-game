<script type="text/javascript" src="cards.json"></script>
    <script type="text/javascript" src="javascrip.js"></script>

// bg
const scroll = require("./bg/scroll.jpeg");
const take = require("./bgm/take.mp3");

const b = "Block";
// // sprites
// const bn = require("./sprites/block-neutral.png");
// const bh = require("./sprites/block-happy.png");
// const bp = require("./sprites/block-pout.png");

let story = [
    {
        bg: scroll,
        bgm: take,
        speaker: b,
        text: "You wake up, your name, you can't remember it. You're a small goblin, they found on the side of the road. "
    },
    {
        text: "Everyone in town is nice and they all start calling you Doblin."
    },
    {
        text: "You start to wonder where you came from and what lies beyond this small village. You long for adventure and answers."
    },
    {
        text:
            "Time has gone by, and you are a curious youngster coming into age."

    },
    {
        text:
            " You lay in the grass, outside of your home. Gazing in to the sky looking at the white fluffy clouds above you. It’s a so peaceful here you think, I could just stay here and be content. Do I want that though? The thought of leaving the village excite you. You think about the adventures you’ve read as a child and how you used to play by fighting invisible dragons, finding the hidden gems and saving the princess in the castle. Should I leave the village I’ve known all my life for a life unknown?
    },



    { text: "I should sleep on it, I don't want to make any rash descions. " },

    {

        text: "Should I go on an adventure?"
    },
    { choicesExist: true, text: "Go?" },
    {
        routeBegins: "yesAdventure",
        speaker: "",
        text: "You decide that night that you’re going to venture out. you prepare yourself packing some essentials and go to sleep thinking about the next morning. Your brain buzzes with excitement and dreams of adventure."
    },
    {
        
        speaker: "",
        text: "You prepare yourself packing some essentials and go to sleep thinking about the next morning. Your brain buzzes with excitement and dreams of adventure.",
        jumpTo: "adventurePath"
    },
    {
        routeBegins: "noAdventure",
        speaker: "Doblin",
        text: "Nah."
    },
    {
        speaker: "Doblin",
        text: "The block trips and falls.",
        jumpTo: "blockHelp"
    },
    {
        receiveJump: "blockHelp",
        text: "(Back to common route) Some weeks pass."
    },
    { text: "Block asked me to hang out at his place." },
    { text: "Did I accept?", choicesExist: true },
    {
        routeBegins: "hangOutWithBlock",
        text: "It was fun. We ate some pizza and watched a movie.",
        jumpTo: "blockHangOut"
    },
    
];

// The code below is to set undefined properties to the last defined property.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
    let cache = "";
    for (let obj of story) {
        if (obj[key] || obj[key] === "") {
            cache = obj[key];
        } else {
            obj[key] = cache;
        }
    }
}
export default story;
