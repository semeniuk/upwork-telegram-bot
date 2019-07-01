const Telegraf = require('telegraf');
const UpworkClient = require('./upwork-client')

// init bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// init Upwork client
const upwork = new UpworkClient();

// on /start command
bot.start((ctx) => ctx.reply('Welcome!'));

// on /help
bot.help((ctx) => ctx.reply('Upwork Telegram Bot'));

// on /test
bot.command('test', (ctx) => ctx.reply('OK'));

// launch the bot
bot.launch();

// log errors
bot.catch((err) => {
    console.log('An error occurred:', err);
})

console.log("Upwork Telegram bot successfully launched");

module.exports = bot;