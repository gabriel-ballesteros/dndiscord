const { SlashCommandBuilder } = require('@discordjs/builders')
const { getRandomNumber } = require('../functions/get-random-number')
const { MINUMUM_DICE, MAXIMUM_DICE_TWENTY } = require('../constants/dice')

const reply = () => { return "You rolled a " + getRandomNumber(MINUMUM_DICE, MAXIMUM_DICE_TWENTY) }

const createData = () => {
    return new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Roll a dice")
}

const roll = {
    data: createData(),
    execute: async (interaction) => {
        await interaction.reply(reply())
    }
}

module.exports = roll