{
  "name": "forcecloseticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "LMhIk",
  "actions": [
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
      "message": "👿 Are you trying to close this ticket without the correct permissions!? If you're a member of either the support or management roles, please use `forceclose`.",
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
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "close-reason",
      "name": "Store Command Params"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Channel"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "title": "A Ticket has been forcefully closed!",
      "author": "${tempVars(\"author-display\")}",
      "color": "RED",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "log-embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Closed By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Ticket ID",
      "message": "ID: `${tempVars(\"ticket-id\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "0",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Close Reason",
      "message": "No reason was specified.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Close Reason",
      "message": "${tempVars(\"close-reason\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "message": "Channel ID: ${tempVars(\"channel-id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "channel": "6",
      "varName2": "ticket-log-channel",
      "name": "Send Embed Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    }
  ],
  "_aliases": [
    "fcloseticket",
    "fclose"
  ]
}
