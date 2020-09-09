const Discord = require("discord.js");
module.exports = {
    name: 'reject',
    category: 'announcements',
    description: 'reject',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("APPLICATION - REJECTED")
                .setDescription(`Unfortunately ${dUser} your application has been rejected. There are many reasons for rejections, though in many cases it is because we found your drive lacking on this occasion. If you have any questions or want to know exact reasons why your application has been rejected, please contact the staff team. The easiest way to do this is by creating a ticket or by joining the voice support waiting room. You can always make a new application once you have received your feedback, and it often works out well!`)
                .setColor("#f56767")
                .setThumbnail("https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/48/Close-2-icon.png")

            dUser.send(`Hey ${dUser} a application status update ${dMessage}
        > Unfortunately,
        
        > your application has been rejected.
        > There are many reasons for rejections,
        > Though in many cases it is because we found your drive lacking on this occasion.

        > If you have any questions or want to know exact reasons why your application has been rejected,
        > then please contact the staff team. The easiest way to do this is by creating a ticket or by joining the voice support waiting room.
        > You can always make a new application once you have received your feedback, and it often works out well!`)

            message.author.send(`${message.author} You have rejected ${dUser} application`)

            return message.channel.send(botEmbed);
        }
}