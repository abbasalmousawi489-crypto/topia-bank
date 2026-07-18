module.exports = async (client) => {

  client.on("interactionCreate", async interaction => {

    if (interaction.isButton()) {

      const button = client.buttons.get(interaction.customId);

      if (!button) return;

      try {
        await button.execute(interaction);
      } catch (error) {
        console.log(error);
      }

    }

  });

};
