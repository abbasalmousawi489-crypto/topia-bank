module.exports = (client) => {
    console.log(`✅ تم تشغيل بنك دينار توبي بنجاح`);
    console.log(`🏦 البوت: ${client.user.tag}`);

    client.user.setPresence({
        activities: [
            {
                name: "🏦 بنك دينار توبي | الخدمات المصرفية",
                type: 0
            }
        ],
        status: "online"
    });
};
