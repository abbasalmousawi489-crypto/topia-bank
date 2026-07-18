const fs = require("fs");
const path = require("path");

const ملف_الحسابات = path.join(__dirname, "accounts.json");


function قراءة_الحسابات() {
    if (!fs.existsSync(ملف_الحسابات)) {
        fs.writeFileSync(ملف_الحسابات, "{}");
    }

    return JSON.parse(fs.readFileSync(ملف_الحسابات));
}


function حفظ_الحسابات(بيانات) {
    fs.writeFileSync(
        ملف_الحسابات,
        JSON.stringify(بيانات, null, 4)
    );
}


function إنشاء_حساب(id) {

    let الحسابات = قراءة_الحسابات();

    if (!الحسابات[id]) {

        الحسابات[id] = {
            الرصيد: 1000,
            العملة: "دينار توبي",
            تاريخ_الإنشاء: new Date()
        };

        حفظ_الحسابات(الحسابات);
    }

    return الحسابات[id];
}


function جلب_الحساب(id) {

    let الحسابات = قراءة_الحسابات();

    return الحسابات[id] || إنشاء_حساب(id);
}


function تحديث_الرصيد(id, المبلغ) {

    let الحسابات = قراءة_الحسابات();

    if (!الحسابات[id]) {
        إنشاء_حساب(id);
        الحسابات = قراءة_الحسابات();
    }

    الحسابات[id].الرصيد += المبلغ;

    حفظ_الحسابات(الحسابات);

    return الحسابات[id];
}


module.exports = {
    قراءة_الحسابات,
    حفظ_الحسابات,
    إنشاء_حساب,
    جلب_الحساب,
    تحديث_الرصيد
};
