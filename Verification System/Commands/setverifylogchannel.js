{
  "name": "setverifylogchannel",
  "permissions": "MANAGE_GUILD",
  "restriction": "1",
  "_id": "AuDso",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "permission": "MANAGE_GUILD",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Permissions"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😥 Sorry about that... You don't have **Manage Guild** permissions...",
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
      "varName": "no-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "4",
      "infoIndex": "1",
      "storage": "2",
      "varName": "verify-log-channel",
      "name": "Store Command Params"
    },
    {
      "condition": "2",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "5",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😅 Well this is awkward... You don't have a text-channel specified.",
      "storage": "1",
      "varName2": "0-alert",
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
      "varName": "0-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "condition": "2",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "6",
      "name": "Check Parameters"
    },
    {
      "storage": "2",
      "varName": "verify-log-channel",
      "name": "Save Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "✅ ${mentionedChannel} has been set as the Verification Log Channel",
      "storage": "1",
      "varName2": "1-alert",
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
      "varName": "1-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "👿 Hey now! You know you can only set one channel.",
      "storage": "1",
      "varName2": "2-alert",
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
      "varName": "2-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "_aliases": [
    "setvlogchannel"
  ]
}