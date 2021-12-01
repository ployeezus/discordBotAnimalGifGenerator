const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

//const fetch = require('node-fetch');
const fetch = require('cross-fetch');
const dotenv = require('dotenv');

dotenv.config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("ready", discord_bot_is_ready);
client.on("messageCreate", someone_messaged);
client.on("messageCreate", someone_mentioned_animal);

function discord_bot_is_ready(){
    console.log("The bot is ready!");
    client.user.setActivity("the bongos");
}

function someone_messaged(theMessageInQuestion){
    console.log("Somebody said: " + theMessageInQuestion.content);
    if (theMessageInQuestion.content === "hi"){
        theMessageInQuestion.reply("Hello there!");
    }
    if (theMessageInQuestion.content === "lol"){
        theMessageInQuestion.reply("You're so funny!");
    }
}

async function someone_mentioned_animal(msg){
    console.log("Somebody said: " + msg.content);
    if (msg.content === "cat"){
        let url = "https://g.tenor.com/v1/search?q=cat&key=${process.env.TENOR_KEY}&limit=8";
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
    if (msg.content === "dog"){
        let url = "https://g.tenor.com/v1/search?q=dog&key=${process.env.TENOR_KEY}&limit=8";
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
}


