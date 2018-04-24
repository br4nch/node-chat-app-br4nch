const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

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

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});

bot.onText(/\/start/, function onEchoText(msg, match) {
    const resp = 'Thank you for choosing Cryptonaut Bot';
    bot.sendMessage(msg.chat.id, resp).catch((error) => {
        errorHandling(error);
    });
});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
    const resp = match[1];
    console.log('Command text:', resp);
    bot.sendMessage(msg.chat.id, resp).catch((error) => {
        errorHandling(error);
    });
});

bot.onText(/\/create-alert (.+)/, function onEchoText(msg, match) {
    const resp = match[1];
    console.log('Command text:', resp);
    bot.sendMessage(msg.chat.id, resp).catch((error) => {
        errorHandling(error);
    });
});

bot.onText(/\/delete-alert (.+)/, function onEchoText(msg, match) {
    const resp = match[1];
    console.log('Command text:', resp);
    bot.sendMessage(msg.chat.id, resp).catch((error) => {
        errorHandling(error);
    });
});

bot.onText(/\/alerts( [a-zA-Z0-9]{3,4})?$/, function onEchoText(msg, match) {
    const resp = match[1];
    if(match[1]){
        resp = 'alert list';
    }
    console.log('Command text:', resp);
    bot.sendMessage(msg.chat.id, resp).catch((error) => {
        errorHandling(error);
    });
});

bot.on('polling_error', (error) => {
    console.log('Polling error: ' + error.code);  // => 'EFATAL'
});

function errorHandling(error) {
    if (error.code === 'EFATAL') {
        console.log('Network error with code:', error.code);
    } else if (error.code === 'EPARSE') {
        console.log('Response body could not be parsed with code:', error.response.body);
    } else {
        console.log('There was an error with code:', error.response.body);
    }
}
module.exports = {bot};

/* bot.on('message', (msg) => {
 const chatId = msg.chat.id;

 bot.sendMessage(chatId, 'Received your message');
 }) */