var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    });
 
pastebin
    .createPasteFromFile(`./resources/tickets/${msg.channel.name}.txt`, `${msg.channel.name} Transcript`, null, 1, "N")
    .then(function (data) {
      let jsonres = tempVars("json-results")
      let {RichEmbed} = require('discord.js')
      if (jsonres[0].ticket_status == '1' || jsonres[0].ticket_status == '2') {
          serverVars("ticket-log-channel").fetchMessage(jsonres[0].logging_id).then(c => {
            let d = new RichEmbed()
            .setAuthor(`${member.displayName}`, `${msg.author.displayAvatarURL}`)
            .setTitle(`A ticket has been closed.`)
            .addField(`Ticket Author`, `<@${jsonres[0].owner_id}>`, true)
            .addField(`Ticket ID`, `\`${jsonres[0].ticket_id}\``, true)
            .addField(`Transcript`, `${data}`, true)
            .setTimestamp()
            .setFooter(`Channel ID: ${msg.channel.id}`)
            c.edit(d)
          })
        this.callNextAction(cache)
      } else if (jsonres[0].ticket_status == '0') {
        let e = new RichEmbed()
        .setColor('RED')
        .setDescription(`This ticket has already been closed ${member}!`)
        msg.channel.send(e).then(a => a.delete(5000))
      }
    })
    .fail(function (err) {
        console.log(err);
    });

    