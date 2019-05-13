{
  "name": "reissueverifycode",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "RTvDR",
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
      "storage": "1",
      "varName": "channel",
      "comparison": "1",
      "value": "serverVars(\"verify-channel\")",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😖 Sorry about that, but you have to be in a verification channel to use this command!",
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
      "dataName": "verification_code",
      "comparison": "0",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "5",
      "name": "Check Member Data"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😮 Uh oh! Looks like you haven't received a verification code yet! Please use the verify command and make sure your DMs are enabled!",
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
      "storage": "1",
      "varName": "perm-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "perm-alert",
      "name": "Delete Message"
    },
    {
      "input": "A0",
      "wordLength": "8",
      "storage": "1",
      "varName": "verification-code",
      "name": "Randomize Letters"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "verification_code",
      "changeType": "0",
      "value": "\"${tempVars(\"verification-code\")}\"",
      "name": "Control Member Data"
    },
    {
      "title": "Your Code has been Reissued!",
      "author": "${tempVars(\"author-display\")}",
      "color": "GREEN",
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
      "fieldName": "Verification Code",
      "message": "${tempVars(\"verification-code\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Verification Channel",
      "message": "${serverVars(\"verify-channel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "How to Verify",
      "message": "To verify yourself, you must use `verify YOURCODE` in the verification channel.\nFor ease of access for mobile users, the next message will be the code which you can copy and paste.",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "1",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "`${tempVars(\"verification-code\")}`",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😉 Go check your DMs! If they're not enabled... Go enable them!",
      "storage": "1",
      "varName2": "reminder",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "reminder",
      "name": "Delete Message"
    }
  ],
  "_aliases": [
    "reverifycode",
    "revcode"
  ],
  "comType": "0"
}