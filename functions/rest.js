const { REST } = require('@discordjs/rest');
const { DISCORD_TOKEN } = require('../constants/env')

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

module.exports.put = (route, commands) => {
    const body = { body : commands }
    return rest.put(route, body)
}