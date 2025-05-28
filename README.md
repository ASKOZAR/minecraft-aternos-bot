# Minecraft AFK Bot

A simple bot for Minecraft servers that keeps the server alive.

## Setup

1. Install Node.js if you don't have it already
2. Clone this repository
3. Run `npm install` to install dependencies
4. Configure the bot by editing `bot.js` with your server details
5. Start the bot with `node bot.js`

## Configuration

Edit the following values in `bot.js`:

```javascript
host: 'SERVER_IP',      // Your Minecraft server IP
port: "SERVER_PORT",    // Your Minecraft server port (default: 25565)
username: 'Bot',        // The username for the bot
version: "1.21",        // Minecraft version
```

## Features

- Auto-jumping every 60 seconds to prevent AFK timeout
- Automatic reconnection attempts
- Simple console logging

## Requirements

- Node.js
- mineflayer library
