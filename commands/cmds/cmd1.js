const discord = require("discord.js");
module.exports = {
    name: 'cmd1',
    category: 'cmds',
    description: 'cmd1',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Announcements")
            .setDescription(`    
            /accept @user
            /accaptacademy @user
            /reject @user
            /placed @user
            /giveaway #Channel Duration AmountOfWinners Name
            /say Message`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
