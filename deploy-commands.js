require("dotenv").config();

const { REST, Routes } = require("discord.js");
const fs = require("fs");

const commands = [];

const commandFiles = fs.readdirSync("./commands")
.filter(file => file.endsWith(".js"));


for (const file of commandFiles) {

  const command = require(`./commands/${file}`);

  commands.push({
    name: command.name,
    description: command.description || "Bot Command"
  });

}


const rest = new REST({
  version: "10"
}).setToken(process.env.TOKEN);


(async () => {

  try {

    console.log("Registering commands...");


    await rest.put(
      Routes.applicationCommands("1528130203371704490"),
      {
        body: commands
      }
    );


    console.log("Commands registered!");

  } catch (error) {

    console.error(error);

  }

})();
