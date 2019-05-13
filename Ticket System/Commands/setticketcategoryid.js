{
  "name": "setticketcategoryid",
  "permissions": "MANAGE_GUILD",
  "restriction": "1",
  "_id": "IoKle",
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
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "ticket-category-id",
      "name": "Store Command Params"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "5",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😪 Sorry about that, but it looks like you didn't specify a Category ID.",
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
      "condition": "0",
      "comparison": "2",
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
      "message": "👿 Hey now! I said a Category ID! Do you think a Category ID has multiple words?",
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
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "5",
      "name": "Check Parameters"
    },
    {
      "storage": "2",
      "varName": "ticket-category-id",
      "name": "Save Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "✅ The category with the ID of `${serverVars(\"ticket-category-id\")}` has been set as the Ticket Category.",
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
    "settcatid"
  ]
}
