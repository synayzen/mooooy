const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags')
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    ${files.length} komut yüklenecek.
‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN)

/
//------------------------------------------------------------------------------------------------------------\\


client.on("message", message => {
    if(message.content.toLowerCase() == "Bienvenidos") 
    return message.channel.send(`𒋝 BİENVENİDOS :heart: :heart:`)
});

//--------------------------------------------------------------------------------------\\

client.on('messageDelete', message => {
  const data = require("quick.db")
  data.set(`snipe.mesaj.${message.guild.id}`, message.content)
  data.set(`snipe.id.${message.guild.id}`, message.author.id)

})

client.login(process.env.TOKEN)

//-----------------BOTUN_SESLİDE_KALMASI---------------------//

client.on("ready", () => {
client.channels.cache.get("844277647344533545").join()
})

//--------------------------------------------------------------------------------------------------------------//


//-----------------BOTUN_SESLİDE_KALMASI

const Discord1 = require('discord.js');
const client2 = new Discord.Client();
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus synayzen")

client.user.setActivity(`Synayzen lvar 💕 𒋝 BİENVENİDOS`, {
type: "STREAMING",
url: "https://www.twitch.tv/synayzen"})
    .then(presence => console.log(`HAZIR KAPTAN!! ${presence.game ? presence.game.none : '🛠'}`))
    .catch(console.error);
});

//-----------------------KOMUTLAR-----------------------\\

const iltifatlar = [
  " \n **Hey! Merhaba duydum ki Yetkili alım var sunucuda** \n **Sende bizim yetkilimiz olmak istemez misin?**  \n **⤿ Tek yapman gereken <#844277646732689448> sağlamak ve <@&844277645986496526>  olan arkadaşlarımıza Dm atmak**",
  " \n **Hey! Merhaba duydum ki Yetkili alım var sunucuda** \n **Sende bizim yetkilimiz olmak istemez misin?**  \n **⤿ Tek yapman gereken <#844277646732689448> sağlamak ve <@&844277645986496526>  olan arkadaşlarımıza Dm atmak**",
" \n **Hey! Merhaba duydum ki Yetkili alım var sunucuda** \n **Sende bizim yetkilimiz olmak istemez misin?**  \n **⤿ Tek yapman gereken <#844277646732689448> sağlamak ve <@&844277645986496526>  olan arkadaşlarımıza Dm atmak**",
" \n **Hey! Merhaba duydum ki Yetkili alım var sunucuda** \n **Sende bizim yetkilimiz olmak istemez misin?**  \n **⤿ Tek yapman gereken <#844277646732689448> sağlamak ve <@&844277645986496526>  olan arkadaşlarımıza Dm atmak**",
" \n **Hey! Merhaba duydum ki Yetkili alım var sunucuda** \n **Sende bizim yetkilimiz olmak istemez misin?** \n **⤿ Tek yapman gereken <#844277646732689448> sağlamak ve <@&844277645986496526>  olan arkadaşlarımıza Dm atmak**"
];
var iltifatSayi = 0; 
client.on("message", async message => {
  if(message.channel.id !== "844277646732689451" || message.author.bot) return;
  iltifatSayi++
  if(iltifatSayi >= 150) { // 20 yazan yer, 20 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    iltifatSayi = 0;
    const pinkcode = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`**${(iltifatlar)[pinkcode]}**`);
  };
});

//---------------------------------------------------------------//

client.on("message", msg => {
var dm = client.channels.cache.get("845235521810857994")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("#d402db")
.setFooter('𒋝 BİENVENİDOS Developed by Synayzen İvar')
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)
dm.send("<@&844277645995016208>")
dm.send(botdm)

}
if(msg.channel.bot) return;
});

//---------- MESAJ YANIT ------------//
client.on("message", msg => {
  if (msg.content.toLowerCase() === "prefix") {
     msg.channel.send(".");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm selam,  hoş geldin ^^");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "günaydın") {
    msg.reply("Günaydın, hoş geldin");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "iyi geceler") {
    msg.reply("Sana da iyi geceler :) ");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply("Aleyküm selam,  hoş geldin ^^");
  }
});