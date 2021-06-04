const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let Şehir = args.slice(0).join(" ");
  if (!Şehir)
    return message.channel.send(
      "<a:ykleniyor:845224722584567810> | **Lütfen yaşadığınız şehri yaz.**"
    );
  message.channel.send(
    "<a:mavitick:849562038320889896> | **Şehirin  ``" + Şehir + "`` olarak ayarlandı!**"
  );
  db.set(`pŞehir_${message.author.id}`, Şehir);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "şehir",
  description: "",
  usage: "",
  kategori: "Profil"
};