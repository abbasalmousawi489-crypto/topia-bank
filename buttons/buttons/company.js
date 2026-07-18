const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("🏢 حسابات الشركات")
        .setDescription(
            "إدارة الحسابات التجارية:\n\n" +
            "💼 حساب الشركة\n" +
            "💰 رصيد الشركة\n" +
            "📊 العمليات التجارية"
        )
        .setFooter({
            text: "بنك دينار توبي"
        });

    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
};
