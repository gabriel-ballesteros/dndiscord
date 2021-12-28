const { Routes } = require('discord-api-types/v9');
const { CLIENT_ID, GUILD_ID } = require('./constants/env');
const commands = require('./commands/get-commands').getCommands()
const commandsToJSON = commands.map(x => x.data.toJSON())

require('./functions/rest').put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), commandsToJSON)
    .then(() => {
        console.log("Success")
    })
    .catch(console.error)