const بنك = require("../buttons/bank");
const حساب = require("../buttons/account");
const تحويل = require("../buttons/transfer");
const إيداع = require("../buttons/deposit");
const سحب = require("../buttons/withdraw");
const وزارة = require("../buttons/ministry");
const شركة = require("../buttons/company");
const بطاقة = require("../buttons/card");
const إعدادات = require("../buttons/settings");

const القائمة_الرئيسية = require("../menus/mainMenu");
const قائمة_الوزارات = require("../menus/ministryMenu");
const قائمة_الشركات = require("../menus/companyMenu");

module.exports = async (interaction) => {

    if (interaction.isButton()) {

        if (interaction.customId === "bank")
            return بنك(interaction);

        if (interaction.customId === "account")
            return حساب(interaction);

        if (interaction.customId === "transfer")
            return تحويل(interaction);

        if (interaction.customId === "deposit")
            return إيداع(interaction);

        if (interaction.customId === "withdraw")
            return سحب(interaction);

        if (interaction.customId === "ministry")
            return وزارة(interaction);

        if (interaction.customId === "company")
            return شركة(interaction);

        if (interaction.customId === "card")
            return بطاقة(interaction);

        if (interaction.customId === "settings")
            return إعدادات(interaction);
    }


    if (interaction.isStringSelectMenu()) {

        if (interaction.customId === "main_menu")
            return القائمة_الرئيسية(interaction);

        if (interaction.customId === "ministry_menu")
            return قائمة_الوزارات(interaction);

        if (interaction.customId === "company_menu")
            return قائمة_الشركات(interaction);
    }

};
