const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

const fetch = require('cross-fetch');
const dotenv = require('dotenv');

dotenv.config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("ready", discord_bot_is_ready);
client.on("messageCreate", someone_mentioned_animal);

function discord_bot_is_ready(){
    console.log("The bot is ready!");
    console.log("Type: cat, dog, fish, bird, snake, rabbit");
    client.user.setActivity("the bongos");
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
    if (msg.content === "fish"){
        let url = "https://g.tenor.com/v1/search?q=fish&key=${process.env.TENOR_KEY}&limit=8";
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
    if (msg.content === "bird"){
        let url = "https://g.tenor.com/v1/search?q=bird&key=${process.env.TENOR_KEY}&limit=8";
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
    if (msg.content === "snake"){
        let url = "https://g.tenor.com/v1/search?q=snake&key=${process.env.TENOR_KEY}&limit=8";
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
    if (msg.content === "rabbit"){
        let url = "https://g.tenor.com/v1/search?q=rabbit&key=${process.env.TENOR_KEY}&limit=8";
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
}


