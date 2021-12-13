const fs = require("fs")
const { COMMANDS_PATH } = require('../constants/file-paths')

const getCommandsPath = () => {
    return fs.readdirSync(COMMANDS_PATH).filter(file => file.endsWith('.js') && file != "get-commands.js");
}

module.exports.getCommands = () => {
    return getCommandsPath().map(commandPath => {
        return require(`.${COMMANDS_PATH}/${commandPath}`)
    })
}