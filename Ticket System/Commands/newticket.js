let jsonres = tempVars("json.results")
let {RichEmbed} = require('discord.js')
let fetch = require('node-fetch')
let connection = globalVars("db.connection")
let schan = serverVars("go.live.channel")
for(var i in jsonres) {
  fetch(`https://api.twitch.tv/helix/users?login=${jsonres[0].streamer_id}`, {headers: {"Client-ID": `${globalVars("twitch.client.id")}`}}).then(res => res.json()).then(oof => {
    data = JSON.stringify(oof)
    fetch(`https://api.twitch.tv/helix/streams?user_id=${oof.data[0].id}`, {headers: {"Client-ID": `${globalVars("twitch.client.id")}`}}).then(res2 => res2.json()).then(ttv => {
      if(jsonres[i].last_status == '0' && ttv.data[0].type == 'live') {
        let alert = new RichEmbed()
        .setThumbnail(oof.data[0].profile_image_url)
        .setColor('PURPLE')
        .setTitle(`${ttv.data[0].title}`)
        .setURL(`https://twitch.tv/${oof.data[0].login}`)
        .setDescription(`**${oof.data[0].display_name}** has gone live on Twitch!`)
        .addField(`Streamer`, `${oof.data[0].display_name}`, true)
        fetch(`https://api.twitch.tv/helix/games?game_id=${ttv.data[0].game_id}`, {headers: {"Client-ID": `${globalVars("twitch.client.id")}`}}).then(res3 => res3.json()).then(game => {
          alert.addField(`Now Playing`, `${game.data[0].name}`, true)
        })
        alert.addField(`Viewers`, `${ttv.data[0].viewer_count}`, true)
        alert.addField(`Started At`, `${require('moment')(`${ttv.data[0].started_at}`).format('LLL')}`, true)
        schan.send(alert)
        connection.query(
          `UPDATE 'streamer_info' SET 'last_status' = '1' WHERE 'streamer_id' = '${jsonres[i].streamer_id}'`,
          function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
          }
        )
      } else if(jsonres[i].last_status == '1' && ttv.data[0].type == '') {
        let alert = new RichEmbed()
        .setThumbnail(oof.data[0].profile_image_url)
        .setColor('GREY')
        .setTitle(`${ttv.data[0].title}`)
        .setURL(`https://twitch.tv/${oof.data[0].login}`)
        .setDescription(`**${oof.data[0].display_name}** has gone offline on Twitch!`)
        .addField(`Streamer`, `${oof.data[0].display_name}`, true)
        .send(alert)
        connection.query(
          `UPDATE 'streamer_info' SET 'last_status' = '0' WHERE 'streamer_id' = '${jsonres[i].streamer_id}'`,
          function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
          }
        ) 
      }
    })
  })
}