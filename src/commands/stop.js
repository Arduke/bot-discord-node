const execute = (bot, message, args) => {
    let queue = bot.queues.get(message.guild.id);
    if (!queue) {
        return message.reply("Não existe nenhuma lista de reprodução");
    }
    queue.songs = [];
    bot.queues.set(message.guild.id, queue);
    queue.dispatcher.end();
}


module.exports = {
    name: "Stop",
    description: "Parar toda a lista de reprodução",
    execute,
}