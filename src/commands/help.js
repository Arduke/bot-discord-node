const execute = (bot,message,args) => {
    let string  = "**============ AJUDA ==============**\n\n"
    
    bot.commands.forEach(command => {
        if(command.description){
            string += `**${process.env.PREFIX}${command.name}**: ${command.description}\n`
        }
    })
    return message.channel.send(string);
}

module.exports = {
    name: "Help",
    execute,
}