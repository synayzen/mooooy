const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      "<a:ykleniyor:845224722584567810> | **Lütfen yaşını yaz.**"
    );
  message.channel.send(
    "<a:mavitick:849562038320889896> | **Yaşın ``" + yas + "`` olarak ayarlandı!**"
  );
  db.set(`pyas_${message.author.id}`, yas);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaş",
  description: "",
  usage: "",
  kategori: "Profil"
};