const { MessageEmbed } = require("discord.js");
message.delete().catch(err => console.log(err));
let questions = [
    {
        title: "2+2=?",
        options: ["2", "4", "14", "326"],
        correct: 4,
    },
    {
        title: "Best league champ",
        options: ["Ahri", "Elise", "Ezreal", "Twitch"],
        correct: 1,
    },
];
module.exports = {
    name: "trivia",
    description: "Test your knowledge!",
    category: "fun",
    run: async (bot, message, args) => {
        let q = questions[Math.floor(Math.random() * questions.length)];
        let i = 0;
        const Embed = new MessageEmbed()
            .setTitle(q.title)
            .setDescription(
                q.options.map((opt) => {
                    i++;
                    return `${i} - ${opt}\n`;
                })
            )
            .setColor(`GREEN`)
            .setFooter(
                `Reply to this message with the correct question number! You have 15 seconds.`
            );
        message.channel.send(Embed);
        try {
            let msgs = await message.channel.awaitMessages(
                (u2) => u2.author.id === message.author.id,
                { time: 15000, max: 1, errors: ["time"] }
            );
            if (parseInt(msgs.first().content) == q.correct) {
                return message.channel.send(`You got it correct!`);
            } else {
                return message.channel.send(`You got it incorrect.`);
            }
        } catch (e) {
            return message.channel.send(`You did not answer!`);
        }
    },
};