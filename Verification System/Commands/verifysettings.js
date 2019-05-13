{
  "name": "verifysettings",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "AjDep",
  "actions": [
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
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "Current Verification Settings",
      "author": "${tempVars(\"author-display\")}",
      "color": "BLUE",
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
      "comment": "Verification Channel",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "verify-channel",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Verification Channel",
      "message": "Not Set. \nSet with `setverifychannel <#channel>`.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
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
      "comment": "Verification Log Channel",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "verify-log-channel",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Verification Log Channel",
      "message": "Not Set. \nSet with `setverifylogchannel <#channel>`.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Verification Log Channel",
      "message": "${serverVars(\"verify-log-channel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Verified Role",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "verified-role",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Verified User Role",
      "message": "Not Set. \nSet with `setverifiedrole <Role Name>`.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Verified User Role",
      "message": "${serverVars(\"verified-role\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "vsettings"
  ],
  "_timeRestriction": 10
}