const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "accounts.json");


function read() {

    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "{}");
    }

    return JSON.parse(fs.readFileSync(file));

}



function save(data) {

    fs.writeFileSync(
        file,
        JSON.stringify(data, null, 4)
    );

}



function createAccount(id) {

    let accounts = read();


    if (!accounts[id]) {

        accounts[id] = {

            الرصيد: 1000,

            العملة: "دينار توبي",

            البطاقة: {

                الرقم: Math.floor(100000000000 + Math.random() * 900000000000),

                الحالة: "فعالة"

            },

            العمليات: []

        };


        save(accounts);

    }


    return accounts[id];

}



function getAccount(id) {

    let accounts = read();

    return accounts[id] || createAccount(id);

}



function updateBalance(id, amount, نوع = "تعديل") {


    let accounts = read();


    if (!accounts[id]) {

        createAccount(id);

        accounts = read();

    }


    accounts[id].الرصيد += amount;


    accounts[id].العمليات.push({

        النوع: نوع,

        المبلغ: amount,

        التاريخ: new Date().toLocaleString("ar")

    });


    save(accounts);


    return accounts[id];

}



module.exports = {

    createAccount,

    getAccount,

    updateBalance

};
