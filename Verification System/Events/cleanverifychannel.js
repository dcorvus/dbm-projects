{
  "name": "[Verify] Clean Channel",
  "temp": "message",
  "event-type": "2",
  "_id": "mOHJg",
  "actions": [
    {
      "message": "1",
      "varName": "message",
      "info": "4",
      "storage": "1",
      "varName2": "message-channel",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "message-channel",
      "comparison": "1",
      "value": "serverVars(\"verify-channel\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "storage": "1",
      "varName2": "bot-member",
      "name": "Get Bot as Member"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "3",
      "storage": "1",
      "varName2": "message-author",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "message-author",
      "comparison": "1",
      "value": "tempVars(\"bot\")",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "time": "6",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "message",
      "name": "Delete Message"
    }
  ]
}