const bank = require("../buttons/bank");
const account = require("../buttons/account");
const transfer = require("../buttons/transfer");
const deposit = require("../buttons/deposit");
const withdraw = require("../buttons/withdraw");
const ministry = require("../buttons/ministry");
const company = require("../buttons/company");
const card = require("../buttons/card");
const settings = require("../buttons/settings");
const history = require("../buttons/history");


const mainMenu = require("../menus/mainMenu");
const ministryMenu = require("../menus/ministryMenu");
const companyMenu = require("../menus/companyMenu");


module.exports = async (interaction) => {


    if (interaction.isButton()) {


        switch (interaction.customId) {


            case "bank":
                return bank(interaction);


            case "account":
                return account(interaction);


            case "transfer":
                return transfer(interaction);


            case "deposit":
                return deposit(interaction);


            case "withdraw":
                return withdraw(interaction);


            case "card":
                return card(interaction);


            case "history":
                return history(interaction);


            case "settings":
                return settings(interaction);


            case "ministry":
                return ministry(interaction);


            case "company":
                return company(interaction);


        }

    }



    if (interaction.isStringSelectMenu()) {


        switch (interaction.customId) {


            case "main_menu":
                return mainMenu(interaction);


            case "ministry_menu":
                return ministryMenu(interaction);


            case "company_menu":
                return companyMenu(interaction);


        }

    }


};
