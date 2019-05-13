let creason = tempVars("close-reason")
let oof
if (!creason || creason == `${this.getDBM().Files.data.settings.tag}close` || creason == `${this.getDBM().Files.data.settings.tag}closeticket`) {
  oof = `<${require('moment')(new Date().getTime()).format('LLL')}> [CLOSURE] The ticket was closed by ${msg.author.tag}`
} else {
  oof = `<${require('moment')(new Date().getTime()).format('LLL')}> [CLOSURE] The ticket was closed by ${msg.author.tag}\n++ Closure Reason: ${creason}`
}

this.storeValue(oof, 1, "closure", cache)