{
  "name": "ticketsettings",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "kCRol",
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
      "title": "Current Ticket System Settings",
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
      "comment": "Ticket Log Channel",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "ticket-log-channel",
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
      "fieldName": "Ticket Log Channel",
      "message": "Not Set. \nSet with `setticketlog <#channel>`.",
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
      "fieldName": "Ticket Log Channel",
      "message": "${serverVars(\"ticket-log-channel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Ticket File Log Channel",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "ticket-file-log-channel",
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
      "fieldName": "Ticket File Log Channel",
      "message": "Not Set. \nSet with `setticketfilelog <#channel>`.",
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
      "fieldName": "Ticket File Log Channel",
      "message": "${serverVars(\"ticket-file-log-channel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Ticket Category ID",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "ticket-category-id",
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
      "fieldName": "Ticket Category ID",
      "message": "Not Set. \nSet with `setticketcategoryid <Channel ID>`.",
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
      "fieldName": "Ticket Category ID",
      "message": "`${serverVars(\"ticket-category-id\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Ticket Support Role",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "ticket-support-role",
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
      "fieldName": "Support Role",
      "message": "Not Set. \nSet with `setticketsupport <Role Name>`.",
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
      "fieldName": "Support Role",
      "message": "${serverVars(\"ticket-support-role\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Ticket Manager Role",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "ticket-manager-role",
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
      "fieldName": "Manager Role",
      "message": "Not Set. \nSet with `setticketmanager <Role Name>`.",
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
      "fieldName": "Manager Role",
      "message": "${serverVars(\"ticket-manager-role\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Last Ticket",
      "color": "#00ff80",
      "name": "Comment"
    },
    {
      "storage": "2",
      "varName": "ticket-count",
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
      "fieldName": "Last Ticket",
      "message": "This server hasn't created a ticket yet.",
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
      "fieldName": "Last Ticket",
      "message": "ID: `${serverVars(\"ticket-count\")}`",
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
    "tsettings"
  ],
  "_timeRestriction": 10
}