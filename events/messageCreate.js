const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = async (message) => {

    if (message.author.bot) return;


    if (message.content === "رصيدي") {

        const embed = new EmbedBuilder()
            .setTitle("🏦 بنك دينار توبي المركزي")
            .setDescription(
                `👋 أهلاً بك ${message.author}\n\n` +
                `💰 اضغط على الزر بالأسفل لعرض حسابك البنكي\n\n` +
                `🏛️ نظام مصرفي خاص بدولة توبي`
            )
            .setFooter({
                text: "عملة البنك: دينار توبي (TND)"
            });


        const زر = new ActionRowBuilder()
            .addComponents(

                new ButtonBuilder()
                    .setCustomId("account")
                    .setLabel("💳 عرض الحساب")
                    .setStyle(ButtonStyle.Primary)

            );


        await message.reply({
            embeds: [embed],
            components: [زر]
        });

    }

};
