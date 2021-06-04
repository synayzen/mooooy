const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let favorişarkı = args.slice(0).join(" ");
  if (!favorişarkı) return message.channel.send("<a:ykleniyor:845224722584567810> | **Lütfen Şarkını yaz.**");
  message.channel.send("<a:mavitick:849562038320889896> | **Favori Şarkın ``" + favorişarkı + "`` olarak ayarlandı!**");
  db.set(`pfavorişarkı_${message.author.id}`, favorişarkı);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorişarkı",
  description: "",
  usage: "",
  kategori: "Profil"
};