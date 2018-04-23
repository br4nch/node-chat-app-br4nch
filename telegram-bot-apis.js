const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN || '497091898:AAH_Hj_pwl40XT2w9URUY8SodOaT1INWSaI';

const options = {
    polling: true
};

const bot = new TelegramBot(token, options);

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

/* bot.on('message', (msg) => {
 const chatId = msg.chat.id;

 bot.sendMessage(chatId, 'Received your message');
 }) */