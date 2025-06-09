const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'stonecraft538-ckQm.aternos.me',
  port: "57343",
  username: 'x0Bot',
  auth: "offline",
  version: "1.21.80",
});

bot.once('spawn', () => {
  console.log('Bot spawned and ready.');

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 60 * 1000);
});

bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot disconnected'));
