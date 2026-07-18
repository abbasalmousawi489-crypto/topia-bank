require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");


const client = new Client({

    intents: [

        GatewayIntentBits.Guilds,

        GatewayIntentBits.GuildMessages,

        GatewayIntentBits.MessageContent

    ]

});


// الأوامر
client.commands = new Collection();


if (fs.existsSync("./commands")) {

    const commandFiles = fs.readdirSync("./commands")
        .filter(file => file.endsWith(".js"));


    for (const file of commandFiles) {

        const command = require(`./commands/${file}`);

        client.commands.set(
            command.name,
            command
        );

    }

}


// الأحداث
const interactionEvent = require("./events/interactionCreate");
const messageEvent = require("./events/messageCreate");


client.once("ready", () => {

    console.log(`✅ ${client.user.tag} Online`);

});


// الأزرار والقوائم
client.on("interactionCreate", async (interaction) => {

    try {

        await interactionEvent(interaction);

    } catch (error) {

        console.log(error);

    }

});


// الرسائل (رصيدي)
client.on("messageCreate", async (message) => {

    try {

        await messageEvent(message);

    } catch (error) {

        console.log(error);

    }

});


// تشغيل البوت
client.login(process.env.TOKEN);
