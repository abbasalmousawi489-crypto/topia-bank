const accounts = require("./accounts");


module.exports = {


    جلب_بيانات_المستخدم(id){

        return accounts.جلب_الحساب(id);

    },


    إضافة_رصيد(id, مبلغ){

        return accounts.تحديث_الرصيد(id, مبلغ);

    },


    خصم_رصيد(id, مبلغ){

        return accounts.تحديث_الرصيد(id, -مبلغ);

    }


};
