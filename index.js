const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === '!getpfp') {
        if (args[0] == 'emoji') {
            if (args[1] == null) {
                message.channel.send('You have to give me a user!')
                console.log(`${message.author.username} attempted to use emoji fuction wrong`)
            } else if (args[2] == null) {
                message.channel.send('You have to give the emoji a name!')
                console.log(`${message.author.username} attempted to use emoji fuction wrong`)
            } else {
                var usermentionid = bot.users.get(args[0].replace(/<@|>/g, ''))
                if (usermentionid != null) {


                    message.channel.send('This feature is currently unavailable.')
                    console.log(`${message.author.username} didn't realize emoji function was unavailable`)


                } else {
                    message.channel.send(`That's not a user mention, that's "${args[0]}"!`)
                    console.log(`${message.author.username} tried to use "${args[0]} instead of a user mention.`)
                }
            }

        } else if (args[0] == 'help') {
            message.channel.send('All commands start with !getpfp.')
            message.channel.send('!getpfp help will give you commands and their usage')
            message.channel.send("!getpfp emoji [user mention] [emoji name] creates an emoji out of the user's profile picture")
            message.channel.send("!getpfp [user mention] will give you said user's profile picture")
            message.channel.send('!getpfp alone will give you your profile picture')
            console.log(`Sent ${message.author.username} help commands`)

        } else if (args[0] == null) {
            message.channel.send(`Your Profile Picture: ${message.author.avatarURL}`)
            console.log(`Sent ${message.author.username} their profile pic`)

        } else {
            var usermentionid = bot.users.get(args[0].replace(/<@|>/g, ''))
            if (usermentionid != null) {
                message.channel.send(`${args[0]}'s Profile Picture: ${usermentionid.avatarURL}`)
                console.log(`Sent ${message.author.username} ${usermentionid.username}'s profile pic`)
            } else {
                message.channel.send(`That's not a user mention, that's "${args[0]}"!`)
                console.log(`${message.author.username} tried to use "${args[0]} instead of a user mention.`)
            }
        }
    }

    if (command === '!emojitest') {
        message.channel.send(`Emote Attempt #${Math.floor(Math.random() * Math.floor(9999))}: <:tpose:462450016758530058>`)
    }

});

bot.login('EEEEEEEEEEEEEEEEEEEEEEEE.EEEEEE.EEEEEEEEEEEEEEEEEEEEEEEEEEE')