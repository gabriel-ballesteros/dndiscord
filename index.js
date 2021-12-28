const { Client, Collection, Intents } = require('discord.js')
const DISCORD_TOKEN = process.env.DNDISCORD_TOKEN;

const commands = require('./commands/get-commands').getCommands()
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection();

commands.forEach((command) => {
    client.commands.set(command.data.name, command)
})

client.once('ready', () => {
    console.log("Ready")
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

    try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
client.login(DISCORD_TOKEN)