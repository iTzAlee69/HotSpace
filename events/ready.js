const { Client, ClientUser } = require('discord.js')
/**
 * 
 * @param {Client} client 
 */
module.exports = async(client) => {


    console.log(`${client.user.tag} Has logged in`)
   async function ll() {
        let totalMembers = 0;

        for (const guild of client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size;
        }

        var status = 'h!help'

        const types = ['COMPETING', 'WATCHING', "STREAMING"]     
        let randomType = types[Math.floor(Math.random() * types.length)]
        if (randomType === 'COMPETING') status = `@${client.user.username} help` 

        if (randomType === 'STREAMING') {
            status = `${totalMembers} members`
        }

    client.user.setPresence({activity: {type: randomType, url: "https://discord.gg/Jk48jQyh8x", name: status}, status:  'online'});

    //     client.user.setPresence({activity: {type: types[Math.floor(Math.random() * types.length)], url: "https://discord.gg/Jk48jQyh8x", name: `${status[Math.floor(Math.random() * status.length)]}`}, status:  ss[Math.floor(Math.random() * ss.length)]});


}
setInterval(() => {
    ll()
}, 5000)
}