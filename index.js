require("dotenv").config();

const { 
    Client, 
    GatewayIntentBits, 
    Collection 
} = require("discord.js");

const fs = require("fs");

const client = new Client({

    intents: [

        GatewayIntentBits.Guilds,

        GatewayIntentBits.GuildMessages,

        GatewayIntentBits.MessageContent

    ]

});


// تخزين الأوامر
client.commands = new Collection();


// تحميل الأوامر
const commandFiles = fs.readdirSync("./commands")
.filter(file => file.endsWith(".js"));


for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(
        command.name,
        command
    );

}


// الأحداث
const readyEvent = require("./events/ready");
const interactionEvent = require("./events/interactionCreate");
const messageEvent = require("./events/messageCreate");



// تشغيل البوت
client.once("ready", () => {

    readyEvent(client);

});


// الأزرار + القوائم + الأوامر
client.on("interactionCreate", async (interaction) => {


    await interactionEvent(interaction);


    if (!interaction.isChatInputCommand()) return;


    const command = client.commands.get(
        interaction.commandName
    );


    if (!command) return;


    await command.execute(interaction);


});


// رسالة رصيدي
client.on(
    "messageCreate",
    messageEvent
);



client.login(process.env.TOKEN);


client.login(process.env.TOKEN);
