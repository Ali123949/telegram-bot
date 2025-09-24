const TelegramBot = require("node-telegram-bot-api");

// 🔑 التوكن مال البوت
const token = "8397497562:AAFrs9vbf2DnJtFfhwvpAGTcyOvz6lQ0_JA";

// إنشاء البوت
const bot = new TelegramBot(token, { polling: true });

// دالة لإرسال تنبيه (ممكن تناديها بوقت الصفقات)
function sendAlert(chatId, message) {
  bot.sendMessage(chatId, `🚀 تنبيه: ${message}`);
}

// أوامر
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 أهلاً بيك!\nالبوت شغال.\nرح يصلك تنبيه أول ما تتفعل الصفقة أو يجي وقت الخروج."
  );
});

bot.onText(/\/صفقة/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "📈 صفقة جديدة: EUR/USD شراء من 1.0650 والهدف 1.0750 والستوب 1.0600"
  );
});

bot.onText(/\/خروج/, (msg) => {
  bot.sendMessage(msg.chat.id, "📉 وقت الخروج من الصفقة ✅");
});

// يكرر أي رسالة عادية يرسلها المستخدم
bot.on("message", (msg) => {
  if (!msg.text.startsWith("/")) {
    bot.sendMessage(msg.chat.id, `انت كتبت: ${msg.text}`);
  }
});
