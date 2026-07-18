module.exports = (client) => {
  console.log(`✅ تم تشغيل البنك: ${client.user.tag}`);

  client.user.setActivity("🏦 بنك دينار توبي", {
    type: 0
  });
};
