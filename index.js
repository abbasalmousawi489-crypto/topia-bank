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


// ربط الأحداث
const readyEvent = require("./events/ready");
const interactionEvent = require("./events/interactionCreate");


client.once("ready", () => {
    readyEvent(client);
});


client.on("interactionCreate", async (interaction) => {

    // الأزرار والقوائم
    await interactionEvent(interaction);


    // الأوامر
    if (!interaction.isChatInputCommand()) return;


    const command = client.commands.get(
        interaction.commandName
    );


    if (!command) return;


    await command.execute(interaction);

});


client.login(process.env.TOKEN);
