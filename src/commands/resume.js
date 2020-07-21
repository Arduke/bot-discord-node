const execute = (bot,message,args) => {
    let queue = bot.queues.get(message.member.guild.id);

    if(!queue) {
        return message.reply("Não existe nenhuma música sendo reproduzida");
    }
    queue.dispatcher.resume();
}


module.exports = {
    name: "Resume",
    description: "Retorna a reprodução da Lista de musica que foi anteriormente pausada.",
    execute
}