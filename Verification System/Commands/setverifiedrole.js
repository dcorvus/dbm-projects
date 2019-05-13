{
  "name": "setverifiedrole",
  "permissions": "MANAGE_GUILD",
  "restriction": "1",
  "_id": "svMyf",
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
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "role-name",
      "name": "Store Command Params"
    },
    {
      "condition": "0",
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
      "message": "😅 Well this is awkward... You don't have valid role specified.",
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
      "info": "1",
      "find": "${tempVars(\"role-name\")}",
      "storage": "2",
      "varName": "verified-role",
      "name": "Find Role"
    },
    {
      "storage": "2",
      "varName": "verified-role",
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
      "message": "😅 Sorry about that man... that's not a valid role!",
      "storage": "1",
      "varName2": "invalid-alert",
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
      "varName": "invalid-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "2",
      "varName": "verified-role",
      "name": "Save Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "✅ ${serverVars(\"verified-role\")} has been set as the Verified Role.",
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
    }
  ],
  "_aliases": [
    "setvrole",
    "setverifyrole"
  ]
}