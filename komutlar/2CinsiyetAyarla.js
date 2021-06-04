const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let cinsiyet = args.slice(0).join(" ");
  if (!cinsiyet)
    return message.channel.send(
      "<a:ykleniyor:845224722584567810> | Lütfen Cinsiyetini yaz. Unutma Sadece erkek,kız veya yok yazabilirsin (**Baş Harflerini BÜYÜK YAZMA**)"
    );
  message.channel.send("<a:mavitick:849562038320889896> | **Cinsiyetin Başarıyla ``" + cinsiyet + "`` olarak ayarlandı!** **Fakat cinsiyetini küçük yazdığına dikkat et <a:nlem:822085975269834822>**");
  db.set(`pcinsiyet_${message.author.id}`, cinsiyet);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori:"Profil"
};
 
exports.help = {
  name: "cinsiyet",
  description: "",
  usage: "",
  kategori: "Profil"
};