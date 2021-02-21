module.exports = {
    name: 'hello',
    aliases: ['hello', 'hi'],
    description: 'You cannot stop me talking!',
    long: 'Use this command to talk whenever whatever spam with Beyonce song lyrics',
    args: {},
    examples: [],
    ignoreHelp: false,
    requiresAcc: true,
    requiresActive: true,
    guildModsOnly: false,
    
    async execute(app, message) {
        
        message.reply("🍀")
        message.reply('WHAT ABOUT BEYONCE')

    },
}