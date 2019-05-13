{
  "name": "claimticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "nmInm",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "server-id",
      "name": "Store Server Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channel-name",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "channel-id",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Channel Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "author-display",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "author-avatar",
      "name": "Store Member Info"
    },
    {
      "slice": "${tempVars(\"channel-name\")}",
      "startingNumber": "7",
      "sliceLength": "10000",
      "storage": "1",
      "varName": "ticket-id",
      "name": "Slice"
    },
    {
      "storage": "1",
      "varName": "channel-name",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😖 Sorry about that, but you have to be in a ticket channel!",
      "storage": "1",
      "varName2": "no-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "no-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "role": "4",
      "varName2": "ticket-manager-role",
      "iftrue": "3",
      "iftrueVal": "6",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "4",
      "varName2": "ticket-support-role",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "👿 Are you trying to claim this ticket without the right permissions?",
      "storage": "1",
      "varName2": "perm-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "perm-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "This Ticket is Now Claimed!",
      "author": "${tempVars(\"author-display\")}",
      "color": "ORANGE",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "This ticket has been claimed by a member of the ${serverVars(\"ticket-support-role\")} or a member of the ${serverVars(\"ticket-manager-role\")}! Please note that this doesn't mean they're the only ones that will be assisting you, this just means that you're going to be primarily assisted by them.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Claimed By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "nowhere",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "claim"
  ]
}
