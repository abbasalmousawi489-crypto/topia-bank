const { 
    EmbedBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle 
} = require("discord.js");


module.exports = async (interaction) => {


    const embed = new EmbedBuilder()

        .setTitle("🏦 بنك دينار توبي المركزي")

        .setDescription(
            `👋 أهلاً بك ${interaction.user}\n\n` +

            "اختر الخدمة التي تريدها من القائمة:\n\n" +

            "💳 الحساب البنكي\n" +
            "💸 تحويل الأموال\n" +
            "📥 إيداع\n" +
            "📤 سحب\n" +
            "💳 البطاقة البنكية\n" +
            "📜 سجل العمليات\n" +
            "⚙️ الإعدادات"
        )

        .setFooter({
            text: "عملة البنك: دينار توبي (TND)"
        });



    const الصف_الأول = new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setCustomId("account")

                .setLabel("💳 حسابي")

                .setStyle(ButtonStyle.Primary),



            new ButtonBuilder()

                .setCustomId("deposit")

                .setLabel("📥 إيداع")

                .setStyle(ButtonStyle.Success),



            new ButtonBuilder()

                .setCustomId("withdraw")

                .setLabel("📤 سحب")

                .setStyle(ButtonStyle.Danger),



            new ButtonBuilder()

                .setCustomId("transfer")

                .setLabel("💸 تحويل")

                .setStyle(ButtonStyle.Secondary),



            new ButtonBuilder()

                .setCustomId("card")

                .setLabel("💳 البطاقة")

                .setStyle(ButtonStyle.Primary)

        );



    const الصف_الثاني = new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setCustomId("history")

                .setLabel("📜 السجل")

                .setStyle(ButtonStyle.Secondary),



            new ButtonBuilder()

                .setCustomId("settings")

                .setLabel("⚙️ الإعدادات")

                .setStyle(ButtonStyle.Secondary),



            new ButtonBuilder()

                .setCustomId("ministry")

                .setLabel("🏛️ الوزارات")

                .setStyle(ButtonStyle.Success),



            new ButtonBuilder()

                .setCustomId("company")

                .setLabel("🏢 الشركات")

                .setStyle(ButtonStyle.Success)

        );




    await interaction.reply({

        embeds: [embed],

        components: [
            الصف_الأول,
            الصف_الثاني
        ],

        ephemeral: true

    });


};
