const playSong = require("./play").playSong;

const execute = (bot, message, args) => {
  const queue = bot.queues.get(message.guild.id);
  if (!queue) {
    return message.reply("não existe nenhuma música sendo reproduzida");
  }
  queue.songs.shift();
  bot.queues.set(message.guild.id, queue);
  playSong(bot, message, queue.songs[0]);
};

module.exports = {
  name: "Skip",
  description: "Pula para a próxima música",
  execute,
};