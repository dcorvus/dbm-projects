{
  "name": "addticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "lIPNf",
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
      "dataName": "${tempVars(\"channel-name\")}_full",
      "comparison": "1",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
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
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "add-user",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "add-user",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😁 Hey now! You have to mention a SINLE user to continue.",
      "storage": "1",
      "varName2": "count-alert",
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
      "varName": "count-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "user-type",
      "name": "Store Command Params"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "12",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "member": "2",
      "varName2": "add-user",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "${tempVars(\"channel-name\")}_full",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "${tempVars(\"channel-name\")}_normal",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "title": "A user has been added to a ticket!",
      "author": "${tempVars(\"author-display\")}",
      "color": "PURPLE",
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
      "fieldName": "User Added",
      "message": "${tempVars(\"add-user\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Added By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "User Type",
      "message": "Full User",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Ticket Added To",
      "message": "ID: `${tempVars(\"ticket-id\")}`",
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
      "storage": "1",
      "varName": "log-embed",
      "channel": "0",
      "varName2": "ticket-log-channel",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "user-type",
      "comparison": "1",
      "value": "normal",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "10",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "member": "2",
      "varName2": "add-user",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "${tempVars(\"channel-name\")}_normal",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "title": "A user has been added to a ticket!",
      "author": "${tempVars(\"author-display\")}",
      "color": "PURPLE",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "log-embed-2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "fieldName": "User Added",
      "message": "${tempVars(\"add-user\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "fieldName": "Added By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "fieldName": "User Type",
      "message": "Normal User",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "fieldName": "Ticket Added To",
      "message": "ID: `${tempVars(\"ticket-id\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "message": "Channel ID: ${tempVars(\"channel-id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "channel": "6",
      "varName2": "ticket-log-channel",
      "name": "Send Embed Message"
    },
    {
      "storage": "1",
      "varName": "log-embed-2",
      "channel": "0",
      "varName2": "ticket-log-channel",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "user-type",
      "comparison": "1",
      "value": "full",
      "iftrue": "2",
      "iftrueVal": "29",
      "iffalse": "0",
      "iffalseVal": "10",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😰 Sorry about that, but you didn't specify a valid user type! The only options are `full` and `normal`, although if you don't specify anything the user will automatically become a full user!",
      "storage": "1",
      "varName2": "null-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "null-alert",
      "name": "Delete Message"
    }
  ],
  "_aliases": [
    "add",
    "adduser"
  ]
}
