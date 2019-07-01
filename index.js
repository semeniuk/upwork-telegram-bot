const Telegraf = require('telegraf');

// init bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// on /start command
bot.start((ctx) => ctx.reply('Welcome!'));

// on /help
bot.help((ctx) => ctx.reply('Upwork Telegram Bot'));

// on /test
bot.command('test', (ctx) => ctx.reply('OK'))

// launch the bot
bot.launch()

// log errors
bot.catch((err) => {
    console.log('An error occurred:', err)
})

console.log("Upwork Telegram bot successfully launched")