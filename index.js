const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})

client.login("MTAwMzYzNDQ2MDM4Nzk3OTI2NQ.GsvUpM.hK2GD9QEzchz2DT3ToA3VtLqbk6aYPzrh6GoLo");