const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'SERVER_IP',
  port: "SERVER_PORT",
  username: 'Bot',
  auth: "offline",
  version: "1.21",
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
