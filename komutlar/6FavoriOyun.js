const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let favorioyun = args.slice(0).join(" ");
  if (!favorioyun) return message.channel.send("<a:ykleniyor:845224722584567810> | **Lütfen Oyununu yaz.**");
  message.channel.send("<a:mavitick:849562038320889896> | **Favori Oyunun ``" + favorioyun + "`` olarak ayarlandı!**");
  db.set(`pfavorioyun_${message.author.id}`, favorioyun);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorioyun",
  description: "",
  usage: "",
  kategori: "Profil"
};