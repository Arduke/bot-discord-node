const execute = (bot,message,args) => {
    let queue = bot.queues.get(message.member.guild.id);
    
    if(!queue) {
        return message.reply("Não existe nenhuma música sendo reproduzida");
    }
    queue.dispatcher.pause();
}

module.exports = {
    name: "Pause",
    description: "Pausa a musica atual",
    execute,
}