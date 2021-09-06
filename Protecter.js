const express = require('express');
const app = express();
const port = 2500;

app.get('/', (req, res) => res.send('Degital Protection Has Been Started'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const { Client } = require("discord.js");
const chalk = require('chalk');
const client = new Client();
const { PREFIX, TOKEN, DEVS } = require("./Bot_Config/config.json")
const { Discord, MessageEmbed } = require("discord.js");
const fs = require("fs");
const moment = require("moment")
const db = require("quick.db");
const prefix = PREFIX;
client.on('ready', () => {
  console.log(`${client.user.username} Hey there !`)
  client.user.setStatus('idle') 
  client.user.setActivity('.help Protection | Protection 100%') 
  })

client.login(process.env.token).catch(err => {
  console.error("[ DISCORD API ] INVIELD TOKEN")
})

client.on("message", function(message) {
  if (message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**', '**# - Paper**', '**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    let help_msg = new MessageEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .addField("General", "💬", true)
      .addField("Admins", "🛠️", true)
      .addField("Protection", "🔒", true)
      .addField("Developer", "💻", true)
      .setFooter(`My Prefix .`)
      .setTimestamp()
    message.channel.send(help_msg).then(msg => {
      msg.react('💬')
      msg.react('🛠️')
      msg.react('🔒')
      msg.react('💻')
        .then(() => msg.react('💬'))
        .then(() => msg.react('🛠️'))
        .then(() => msg.react('🔒'))
        .then(() => msg.react('💻'))
      let reaction1Filter = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
      let reaction2Filter = (reaction, user) => reaction.emoji.name === '🛠️' && user.id === message.author.id;
      let reaction3Filter = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
      let reaction4Filter = (reaction, user) => reaction.emoji.name === '💻' && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
      let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
      let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
      let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 17000 });
      reaction1.on("collect", r => {
        const embed = new MessageEmbed()
          .setColor("#000000")
          .addField(`**:newspaper: ❯ ${prefix}id**`,
            `Account Info`, true)
          .addField(`**:frame_photo: ❯ ${prefix}avatar <@member**`,
            `Show Avatar`, true)
          .addField(`**:satellite: ❯ ${prefix}ping**`,
            `Bot Ping`, true)
          .addField(`**:paperclip: ❯ ${prefix}link**`,
            `Bot Link`, true)
            .addField(`**:paperclip: ❯ ${prefix}bot**`,
            `Bot Info`, true)
            .setFooter(`My Prefix .`)
            .setTimestamp()
        message.channel.send(embed)
      })
      reaction2.on("collect", r => {
        const embed = new MessageEmbed()
          .setColor("#000000")
          .addField(`**:keyboard: ❯ ${prefix}clear <number>**`, `Delete Messages`, true)
          .addField(`**:keyboard: ❯ ${prefix}hide**`, `Hide Channel`, true)
          .addField(`**:keyboard: ❯ ${prefix}show**`, `Show Channel`, true)
          .addField(`**:keyboard: ❯ ${prefix}lock**`, `Close Channel`, true)
          .addField(`**:keyboard: ❯ ${prefix}unlock**`, `Open Channel`, true)
          .addField(`**:keyboard: ❯ ${prefix}mute/unmute <@user>**`, `Mute/Unmute Member`, true)
          .addField(`**:keyboard: ❯ ${prefix}showbans**`, `Show Bans List`, true)
          .addField(`**:keyboard: ❯ ${prefix}kick <@member>**`, `Kick Member`, true)
          .setFooter(`Request By ${msg.author.tag}`)
          .setTimestamp()
        message.channel.send(embed)
      })
      reaction4.on("collect", r => {
        const embed = new MessageEmbed()
          .setColor("RED")
          .setTitle(`***Developer Bot***`)
          .setDescription(`Bot Protecter By Bilestox#0001`) 
          .setImage('https://cdn.discordapp.com/attachments/884211879197704203/884262352399249438/image3.gif')
          .setFooter(`My Prefix .`)
          .setTimestamp()
        message.channel.send(embed)
      })
      reaction3.on("collect", r => {
        const embed = new MessageEmbed()
          .setColor("#000000")
          .addField(`**:shield: ❯ ${prefix}setfake <time>**`, `Determine the age of dummy accounts`, true)
          .addField(`**:shield: ❯ ${prefix}antitoken <on/off>**`, `Enable / Disable Fake Accounts Protection`, true)
          .addField(`**:shield: ❯ ${prefix}antilink <on/off>**`, `Enable / Disable Spreed Protection`, true)
          .addField(`**:shield: ❯ ${prefix}antiinv <on/off>**`, `Enable / Disable Discord Invites Protection`, true)
          .addField(`**:shield: ❯ ${prefix}antisw <on/off>**`, `Enable / Disable Swearing / Cursing Blocker`, true)
          .addField(`**:shield: ❯ ${prefix}anti-spam**`, `Enable / Disable AntiSpam Protection`, true)
          .addField(`**:shield: ❯ ${prefix}limitbans <num>**`, `Set Bans Limet`, true)
          .addField(`**:shield: ❯ ${prefix}limitkicks <num>**`, ` Set Kicks Limet`, true)
          .addField(`**:shield: ❯ ${prefix}limitroleDelete <num>**`, `Set Role Delet Limet`, true)
          .addField(`**:shield: ❯ ${prefix}limitchannelDelete <num>**`, `Set Channel Delete Limet`, true)
          .addField(`**:shield: ❯ ${prefix}limittime <num>**`, `Set Cooldown to limet orders [with ms!]`, true)
          .setFooter(`My Prefix .`)
          .setTimestamp()
        message.channel.send(embed)
      })
    })
  }
});

'use strict';
var _0x8e61 = ["ready", "Bot started!\r\n  ======================================\r\n  > Users: ", "size", "cache", "users", "\r\n  > Channels: ", "channels", "\r\n  > Servers: ", "guilds", "\r\n  > Name: ", "username", "user", "\r\n  > Id: ", "id", "\r\n  > Developer Name: @\b bilestox\u30ed#0001\r\n  > Support:  EnDev\r\n  ", "green", "log", "on"];
client[_0x8e61[17]](_0x8e61[0], async function() {
 console[_0x8e61[16]](chalk[_0x8e61[15]]("" + _0x8e61[1] + client[_0x8e61[4]][_0x8e61[3]][_0x8e61[2]] + _0x8e61[5] + client[_0x8e61[6]][_0x8e61[3]][_0x8e61[2]] + _0x8e61[7] + client[_0x8e61[8]][_0x8e61[3]][_0x8e61[2]] + _0x8e61[9] + client[_0x8e61[11]][_0x8e61[10]] + _0x8e61[12] + client[_0x8e61[11]][_0x8e61[13]] + _0x8e61[14]));
});
//protection
let antibots = JSON.parse(fs.readFileSync('./data/antibots.json', 'utf8'));
let spread = JSON.parse(fs.readFileSync("./data/spread.json", "utf8"));
let discord = JSON.parse(fs.readFileSync("./data/discord.json", "utf8"));
let swair = JSON.parse(fs.readFileSync("./data/swair.json", "utf8"));
let anti = JSON.parse(fs.readFileSync("./data/antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./data/config.json", "UTF8"));
let token = JSON.parse(fs.readFileSync("./data/token.json", "UTF8"));
client.on('message', msg => {
  if (msg.content.startsWith(prefix + "antibots on")) {
    if (!msg.channel.guild) return msg.reply('**This Command Only For Servers**');
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`');
    antibots[msg.guild.id] = {
      onoff: 'On',
    }
    msg.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
    fs.writeFile("./data/antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }
}).on('message', msg => {
  if (msg.content.startsWith(prefix + "antibots off")) {
    if (!msg.channel.guild) return msg.reply('**This Command Only For Servers**');
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`');
    antibots[msg.guild.id] = {
      onoff: 'Off',
    }
    msg.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)
    fs.writeFile("./data/antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

}).on("guildMemberAdd", member => {
  if (!antibots[member.guild.id]) antibots[member.guild.id] = {
    onoff: 'Off'
  }
  if (antibots[member.guild.id].onoff === 'Off') return;
  if (member.user.bot) return member.kick()
})
fs.writeFile("./data/antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
    .catch(err => {
      console.error(err);
    });
})
client.on('message', msg => {
  if (msg.content.startsWith(prefix + "antitoken on")) {
    if (!msg.channel.guild) return msg.reply('**This Command Only For Servers**');
    if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`');
    token[msg.guild.id] = {
      onoff: 'On',
    }
    msg.channel.send(`**✅ The AntiJoin Is __𝐎𝐍__ !**`)
    fs.writeFile("./data/token.json", JSON.stringify(token), (err) => {
      if (err) return console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

}).on('message', msg => {
  if (msg.content.startsWith(prefix + "antitoken off")) {
    if (!msg.channel.guild) return msg.reply('**This Command Only For Servers**');
    if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`');
    token[msg.guild.id] = {
      onoff: 'Off',
    }
    msg.channel.send(`**⛔ The AntiJoin Is __𝐎𝐅𝐅__ !**`)
    fs.writeFile("./data/token.json", JSON.stringify(token), (err) => {
      if (err) return console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

}).on('message', msg => {
  if (!msg.channel.guild) return;
  if (msg.content.startsWith(prefix + "setfake")) {
    let time = msg.content.split(" ").slice(1).join(" ");
    if (!msg.channel.guild) return msg.reply('**This Command Only For Servers**');
    if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`');
    if (!time) return msg.channel.send('Please Type The Account Created Time [Days]');
    let embed = new MessageEmbed()
      .setTitle('**Done The AntiJoin Code Has Been Setup**')
      .addField('Account Create Time:', `${time}.`)
      .addField('Requested By:', `${msg.author}`)
      .setThumbnail(msg.author.avatarURL())
      .setFooter(`${client.user.username}`)
    msg.channel.send(embed)
    token[msg.guild.id] = {
      created: time,
      onoff: 'On',
    }
    fs.writeFile("./data/token.json", JSON.stringify(token), (err) => {
      if (err) console.error(err)
    })
  }
}).on("guildMemberAdd", async member => {
  if (!token[member.guild.id]) token[member.guild.id] = {
    onoff: 'Off'
  }
  if (token[member.guild.id].onoff === 'Off') return;
  if (!member.user.bot) return;
  let accounttime = `${token[member.guild.id].created}`
  let moment2 = require('moment-duration-format'),
    moment = require("moment"),
    date = moment.duration(new Date() - member.user.createdAt).format("d");

  if (date < accounttime) {
    member.ban(`Member account age is lower than ${token[member.guild.id].created} days.`)
  }
}).on("message", msg => {
  if (msg.content.startsWith(prefix + "antilink off")) {
    if (!msg.channel.guild)
      return msg.reply("**This Command Only For Servers**");
    if (!msg.member.hasPermission("MANAGE_GUILD"))
      return;
    spread[msg.guild.id] = {
      onoff: "Off"
    };
    msg.channel.send(`**⛔ Antilinks __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./data/spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}).on("message", msg => {
  if (msg.content.startsWith(prefix + "antilink on")) {
    if (!msg.channel.guild)
      return msg.reply("**This Command Only For Servers**");
    if (!msg.member.hasPermission("MANAGE_GUILD"))
      return;
    spread[msg.guild.id] = {
      onoff: "On"
    };
    msg.channel.send(`**✅ Antilinks __𝐎𝐍__ !**`);
    fs.writeFile("./data/spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}).on("message", msg => {
  const muterole = msg.guild.roles.cache.find(r => r.name === "Muted");
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("http://") || msg.content.includes("https://") || msg.content.includes("www")) {
    if (!spread[msg.guild.id])
      spread[msg.guild.id] = {
        onoff: "Off"
      };
    if (spread[msg.guild.id].onoff === "Off") return;
    msg.delete();
    msg.channel.send(`**⛔ Links Isn't Enabled In This Server !**`);
    msg.reply(" Got Muted Role!!")
    msg.member.roles.add(muterole)
  }
}).on("message", msg => {
  if (msg.content.startsWith(prefix + "antiinv off")) {
    if (!msg.channel.guild)
      return msg.reply("**This Command Only For Servers**");
    if (!msg.member.hasPermission("MANAGE_GUILD"))
      return;
    discord[msg.guild.id] = {
      onoff: "Off"
    };
    msg.channel.send(`**⛔ AntiDiscordInvites __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./data/discord.json", JSON.stringify(discord), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}).on("message", msg => {
  if (msg.content.startsWith(prefix + "antiinv on")) {
    if (!msg.channel.guild)
      return msg.reply("**This Command Only For Servers**");
    if (!msg.member.hasPermission("MANAGE_GUILD"))
      return;
    discord[msg.guild.id] = {
      onoff: "On"
    };
    msg.channel.send(`**✅ AntiDiscordInvites __𝐎𝐍__ !**`);
    fs.writeFile("./data/discord.json", JSON.stringify(discord), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}).on("message", msg => {
  const muterole = msg.guild.roles.cache.find(r => r.name === "Muted");
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("discord.gg") || msg.content.includes("DISCORD.GG") || msg.content.includes("بدرو")) {
    if (!discord[msg.guild.id])
      discord[msg.guild.id] = {
        onoff: "Off"
      };
    if (discord[msg.guild.id].onoff === "Off") return;
    msg.delete();
    msg.channel.send(`**⛔ Discord Invites Isn't Enabled is This Server !**`);
    msg.reply(" Got Muted Role!!")
    msg.member.roles.add(muterole)
  }
}).on("message", async msg => {

  if (msg.content.startsWith(prefix + "anitsw off")) {
    if (!msg.channel.guild)
      return msg.reply("**This Command Only For Servers**");
    if (!msg.member.hasPermission("MANAGE_GUILD"))
      return msg.channel.send(
        "**ليس لديك صلحيات لأسعمال هذا الامر** `MANAGE_GUILD`"
      );
    swair[msg.guild.id] = {
      onoff: "Off"
    };
    msg.channel.send(`**⛔ تم الغاء التفعيل __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./data/swair.json", JSON.stringify(swair), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}).on("message", async msg => {
  if (msg.content.startsWith(prefix + "antisw on")) {
    if (!msg.channel.guild)
      return msg.reply("**This Command Only For Servers**");
    if (!msg.member.hasPermission("MANAGE_GUILD"))
      return msg.channel.send(
        "**ليس لديك صلحيات لأستعمال هذا الأمر** `MANAGE_GUILD`"
      );
    swair[msg.guild.id] = {
      onoff: "On"
    };
    msg.channel.send(`**✅ تم التفعيل __𝐎𝐍__ !**`);
    fs.writeFile("./data/swair.json", JSON.stringify(swair), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("شرموط")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("منيوك")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("متناك")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("خول")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("عرص")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("كس")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
}).on("message", msg => {
  var args = msg.content.split(/[ ]+/);
  if (msg.content.includes("احا")) {
    if (!swair[msg.guild.id])
      swair[msg.guild.id] = {
        onoff: "Off"
      };
    if (swair[msg.guild.id].onoff === "Off") return;
    msg.delete();
    return msg.reply(
      `**أحترم نفسك عيب **`
    );
  }
})
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3,
	kickThreshold: 7,
	banThreshold: 7,
	muteThreshold: 5, 
	maxInterval: 2000, 
	warnMessage: '{@user}, Please stop spamming.', 
	kickMessage: '**{user_tag}** has been kicked for spamming.',
	banMessage: '**{user_tag}** has been banned for spamming.',
	muteMessage: '**{user_tag}** has been muted for spamming.',
	maxDuplicatesWarning: 7,
	maxDuplicatesKick: 10,
	maxDuplicatesBan: 12,
	maxDuplicatesMute: 9,
	exemptPermissions: [ 'ADMINISTRATOR'],
	ignoreBots: true,
	verbose: true,
	ignoredUsers: [],
});

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.\nYour bot is ready master!`));

client.on('message', (message) => antiSpam.message(message));

const antiSpam11 = new (require("discord-anti-spam"))({
  warnThreshold: 3,
  kickThreshold: 7,
  banThreshold: 7,
  maxInterval: 2000,
  warnMessage: "{@user}, وقف اسبام.",
  kickMessage: "**{user_tag}** تم طرده بسبب الاسبام.",
  banMessage: "**{user_tag}** تم تبنيده بسبب الاسبام.",
  maxDuplicatesWarning: 7,
  maxDuplicatesKick: 10,
  maxDuplicatesBan: 12,
  exemptPermissions: [],
  ignoreBots: false,
  verbose: true,
  ignoredUsers: []
});
client.on("message", async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.toLowerCase() == prefix + "anti-spam") {
    let on_or_off = db.get(message.guild.id);
    message.channel.send(`**Anti Spam is __${on_or_off ? "OFF" : "ON"}__**`);
    db.set(message.guild.id, on_or_off ? false : true);
  }
}).on("message", message => message.guild ? (db.get(message.guild.id) ? antiSpam11.message(message) : null) : null);
client.on("message", message => {
    if(!message.channel.guild) return;
    let user = anti[message.guild.id+message.author.id]
    let num = message.content.split(" ").slice(1).join(" ");
    if(!anti[message.guild.id+message.author.id]) anti[message.guild.id+message.author.id] = {
        actions: 0
    }
    if(!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
if(message.content.startsWith(prefix + "limit")) {
    if(!message.member.hasPermission('MANAGE_GUILD')) return;
    if(message.content.startsWith(prefix + "limitbans")) {
        if(!num) return message.channel.send("**→ | Supply a number !");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].banLimit = num;
        message.channel.send(`**→ | Changed bans limit to : ${config[message.guild.id].banLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limitkicks")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**"); 
        config[message.guild.id].kickLimits = num;
        message.channel.send(`**→ | Changed kicks limit to : ${config[message.guild.id].kickLimits}.**`)
    }
    if(message.content.startsWith(prefix + "limitroleDelete")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].roleDelLimit = num;
        message.channel.send(`**→ | Changed Role Deleting limit to : ${config[message.guild.id].roleDelLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limitroleCreate")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].roleCrLimits = num;
        message.channel.send(`**→ | Changed Role Creation limit to : ${config[message.guild.id].roleCrLimits}.**`)
    }
    if(message.content.startsWith(prefix + "limitchannelDelete")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].chaDelLimit = num;
        message.channel.send(`**→ | Changed Channel Deleting limit to : ${config[message.guild.id].chaDelLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limittime")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].time = num;
        message.channel.send(`**→ | Changed Times limit to : ${config[message.guild.id].time}.**`)
    }
    fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function(e) {
        if(e) throw e;
    });
    fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function(e) {
        if(e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.cache.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Channles__.**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.cache.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Roles__!**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.cache.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , is creating many __Rooms__.**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./data/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./data/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
//admin
client
  .on("message", async msg => {
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear" || command == "مسح") {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      msg.delete({ timeout: 0 })
      if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **You Need `MANAGE_GUILD` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp());
      if (!msg.guild.member(client.user).hasPermission('MANAGE_GUILD')) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **I Can't Clear The Cahct In This Server Becuse I Don't Have `MANAGE_GUILD` Permission!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp());

      let args = msg.content.split(" ").slice(1)
      let messagecount = parseInt(args);
      if (args > 100) return msg.channel.send(`\`\`\`javascript
    i cant delete more than 100 messages 
    \`\`\``).then(messages => messages.delete(5000))
      if (!messagecount) messagecount = '100';
      msg.channel.messages.fetch({ limit: 100 }).then(messages => msg.channel.bulkDelete(messagecount)).then(msgs => {
        msg.channel.send(`\`\`\`js
    ${msgs.size} messages cleared
    \`\`\``).then(messages =>
          messages.delete({ timeout: 5000 }));
      })
    }
  })

  client.on("message", (msg) => {
    if (msg.content === prefix + "show") {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply(new MessageEmbed().setDescription("❌" + '** You dont have `MANAGE_CHANNELS` permission **').setFooter(`Request By ${msg.author.tag}`).setTimestamp());
      let everyone = msg.guild.roles.cache.find(hyper => hyper.name === '@everyone');
      msg.channel.createOverwrite(everyone, {
        VIEW_CHANNEL: true
      }).then(() => {
        const embed = new MessageEmbed()
          .setDescription("✅" + ` **Done Hide This Room ${msg.channel}**`)
          .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
        msg.channel.send(embed)
      })
    }
  })
  client.on('message', msg => {
    if (msg.content === prefix + "lock") {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **You Need `MANAGE_MESSAGES` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      msg.channel.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {

        msg.reply(new MessageEmbed().setDescription(":shield: **has been locked.**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
        cooldown_command.add(msg.author.id);

      });
    }
    if (msg.content === prefix + "unlock") {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **You Need `MANAGE_MESSAGES` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      msg.channel.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: true
      }).then(() => {

        msg.reply(new MessageEmbed().setDescription("🔓 **has been unlocked.**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
        cooldown_command.add(msg.author.id);

      });
    }
  })
  client.on('message', msg => {
    const millis = require('ms')
    let args = msg.content.split(" ");
    let embed = new MessageEmbed()

      .setDescription("❌" + " **I Can't Kick Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    let embed2 = new MessageEmbed()

      .setDescription("❌" + " **Please Mention Same One!**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    let embed3 = new MessageEmbed()

      .setDescription("🤔" + " **WTF Are You Doing ??**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    let embed4 = new MessageEmbed()

      .setDescription("🤔" + " **WTF Are You Doing ??**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    let embed5 = new MessageEmbed()

      .setDescription("❌" + " **Soory I Can't Mute Same One High Than Me >_<**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    let embed6 = new MessageEmbed()
      .setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    let embed7 = new MessageEmbed()
      .setDescription("❌" + " **I Can't Find `Muted` Role Type -Create To Create This Role**")
      .setFooter(`Request By ${msg.author.tag}`).setTimestamp()
    if (args[0] === prefix + 'mute') {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.send(embed6)
      if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.channel.send(embed)
      let user = msg.mentions.members.first()
      if (!user) return msg.channel.send(embed2)
      if (user.id === msg.author.id) return msg.reply(embed3)
      if (user.id === client.user.id) return msg.channel.send(embed4)
      if (!msg.guild.member(user).bannable) return msg.reply(embed5)
      let muteRole = msg.guild.roles.cache.find(n => n.name === 'Muted')
      if (!muteRole) return msg.channel.send(embed7)
      user.roles.add(muteRole).catch((err) => {
        let embed8 = new MessageEmbed()
          .setDescription(`**Error**`)
          .setDescription(`Error: ${err.message}`)
          .setTimestamp()
        return msg.channel.send(embed8)
      })
      var time = args[2]
      if (!time) time = '24h'
      msg.channel.send("🤔" + " **Processing The Mute Function**").then((m) => {
        m.edit("✅" + " **Processing is complete**")
      })
      msg.channel.send(new MessageEmbed().setDescription("✅" + ` **${user} Has Ben Muted By <@!${msg.author.id}>**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      setTimeout(() => {
        user.roles.remove(muteRole);
      }, millis(time));
      return;

    }
  }).on('message', msg => {
    if (msg.content === "-Create") {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      msg.guild.roles.create({ data: { name: Muted, color: "RANDOM" } })
      msg.channel.send("🤔" + " **Processing The CreateRole Function**").then((m) => {
        m.edit("✅" + " **Processing is complete**")
      })
      msg.channel.send(new MessageEmbed().setDescription("Done").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    }
  })
  .on('message', msg => {
    let args = msg.content.split(" ");
    if (args[0] === prefix + 'unmute') {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **I Can't Kick Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      let user = msg.mentions.members.first()
      if (!user) return msg.channel.send(new MessageEmbed().setDescription("❌" + " **Please Mention Same One!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (user.id === msg.author.id) return msg.reply(new MessageEmbed().setDescription("🤔" + " **WTF Are You Doing ??**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      if (!msg.guild.member(user).bannable) return msg.reply(new MessageEmbed().setDescription("❌" + " **I Can't Unmute one high than me >_<**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      var muteRole = msg.guild.roles.cache.find(n => n.name === 'Muted')
      if (!muteRole) return msg.channel.send(new MessageEmbed().setDescription("🤔" + ` **WTF Is That ?? [ Super Error ]**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
      user.roles.remove(muteRole)
      msg.channel.send("🤔" + " **Processing The Unmute Function**").then((m) => {
        m.edit("✅" + " **Processing is complete**")
      })
      msg.channel.send(new MessageEmbed().setDescription("✅" + ` **${user} Has Ben Unmuted By <@!${msg.author.id}>**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    }
  })
  
  .on('message', msg => {
    if (msg.content.startsWith(prefix + "showbans")) {
      if (!msg.channel.guild) return;
      msg.channel
      msg.guild.fetchBans()
        .then(bans => msg.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
        .catch(console.error);
    }
  });
//public
client
  .on("message", async msg => {
    if (msg.content.startsWith(prefix + "link")) {
      if (msg.author.bot) return;
      if (!msg.guild) return msg.channel.send(new MessageEmbed().setDescription("❌" + ` **You Can't Use Commands In Dm's!**`));
      msg.channel.send(new MessageEmbed().setColor("RANDOM").setImage('https://cdn.discordapp.com/attachments/884211879197704203/884270250684731433/403d7d8351271285c6e62d5548e36a39.png').setDescription(`**
            Bot Link: [Here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)
            **`))
    }
  })
  .on('message', msg => {
    if (msg.content.startsWith(prefix + "id")) {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`request BY ${msg.author.tag}`).setTimestamp())

      var args = msg.content.split(" ").slice(1);
      let user = msg.mentions.users.first();
      var men = msg.mentions.users.first();
      var heg;
      if (men) {
        heg = men
      } else {
        heg = msg.author
      }
      var mentionned = msg.mentions.members.first();
      var h;
      if (mentionned) {
        h = mentionned
      } else {
        h = msg.member
      }
      moment.locale('ar-TN');
      let id = new MessageEmbed().setColor("RANDOM")
        .setDescription(`**❯ Name : 
                ${msg.author.username}

                ❯ ID :
                ${msg.author.id}

                ❯ Created At :
                ${moment(heg.createdTimestamp).format('YYYY/M/D')} 
                **`)
        .setThumbnail(heg.avatarURL({
          dynamic: true,
          format: 'png',
          size: 1024,
        }));
      msg.channel.send(id)
    }
  })
  .on("message", async msg => {
    let command = msg.content.toLowerCase().split(" ")[0]
    command = command.slice(prefix.length)
    if (command == "avatar") {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("❌" + ` **You Can't Use This Command In DM's!**`).setFooter(`request BY ${msg.author.tag}`).setTimestamp())

      let args = msg.content.split(" ")
      let user = msg.mentions.users.first() || msg.author || msg.guild.member.cache.get(args[1])
      msg.channel.send(new MessageEmbed()
        .setAuthor(user.tag)
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({
          dynamic: true,
          format: 'png',
          size: 1024
        }))
      );
    }
  })
  .on("message", async msg => {
    if (msg.content.startsWith(prefix + "bot")) {
      if (msg.author.bot) return;
      if (!msg.guild) return msg.channel.send(new MessageEmbed().setDescription("❌" + ` **You Can't Use Commands In Dm's!**`));
      msg.channel.send(new MessageEmbed()
              .setThumbnail(client.user.avatarURL())
              .setColor('#bc1d02')
              .setTitle(`${client.user.tag} info`)
              .addField('  **My Ping**' , [`${Math.round(client.ws.ping)} MS`], true)
              .addField('\  **RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
              .addField('  **Servers**',[client.guilds.cache.size], true)
              .addField('  **Channels**' , `[ ${client.channels.cache.size} ]` , true)
              .addField('  **Users**' ,`[ ${client.users.cache.size} ]` , true)
              .addField('  **My Name**' , `[ ${client.user.tag} ]` , true)
              .addField('  **My Prefix**' , `[ ! ]` , true)
              .addField('  **My Language**' , `[ JavaScript ]` , true)
              .setDescription(`**
              Bot Link: [Here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)
              **`))
      }
    })
  
  var _0xf1cf=["\x6D\x65\x73\x73\x61\x67\x65","\x64\x65\x76","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x67\x75\x69\x6C\x64","\u274C","\x20\x2A\x2A\x50\x72\x6F\x74\x65\x63\x74\x65\x72\x20\x42\x6F\x74\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x52\x20\x42\x6F\x74\x20\x42\x79\x20\x42\x69\x6C\x65\x73\x74\x6F\x78\x23\x30\x30\x30\x31\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","","\x73\x65\x74\x49\x6D\x61\x67\x65","\x52\x41\x4E\x44\x4F\x4D","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x6F\x6E"];client[_0xf1cf[16]](_0xf1cf[0],async (_0x61f6x1)=>{if(_0x61f6x1[_0xf1cf[3]][_0xf1cf[2]](prefix+ _0xf1cf[1])){if(_0x61f6x1[_0xf1cf[5]][_0xf1cf[4]]){return};if(!_0x61f6x1[_0xf1cf[6]]){return _0x61f6x1[_0xf1cf[11]][_0xf1cf[10]]( new MessageEmbed()[_0xf1cf[9]](_0xf1cf[7]+ `${_0xf1cf[8]}`))};_0x61f6x1[_0xf1cf[11]][_0xf1cf[10]]( new MessageEmbed()[_0xf1cf[15]](_0xf1cf[14])[_0xf1cf[13]](_0xf1cf[12]))}})
