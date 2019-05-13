## General Information    
This is the system that the Raw Data Server uses for their Raw data system.

## Important Information / Notes    

1. Before attempting to get support, please make sure that you have the following in BOTH your Bot Files as well as your DBM Files.
    - [x] [Beta Version of Discord Bot Maker](https://dbotmaker.io/forums/threads/how-to-join-the-beta-version-for-newbies-and-more.63/).
    - [x] [The Latest Beta Mods](https://github.com/Discord-Bot-Maker-Mods/DBM-Mods/tree/beta).
2. Be sure you are not downloading the files and putting them in the DBM Directory, but instead [Copying the data of each file into a new Command / Event](https://i.imgur.com/gDWVVXl.png).    
3. Change the following lines in the following actions:
    - `[Check] Raw Data Server` - Action #2 - Server ID
    - `[Check] Whitelist or Mod` - Action #2 - Role Name
    - `[Store] SQL Connection` - Action #1 - Connection Options
    - `[Check] Last Post Deleted` - Action #1 - Role Name
    - `approve` - Action #3 - Role Name
    - `deny` - Line #3 - Role Name
    - `forceapprove` - Line #4 - Role Name
    - `forcedeny` - Line #4 - Role Name

4. There may still be some issues/bugs that are being ironed out, if you see major issues with something. That is the ONLY time you are allowed to ping me.
5. You need a channel called `rd-deletion-logs`.
6. In the Command Syntaxes, `<rawdata id>` is NOT the Message ID. It is the ID that looks like `#1234` in the bottom left corner of the post embed.

## Command Syntaxes and Descriptions    
<details>
  <summary>Click to view/hide Commands</summary>
  <p>
<!--  -->
    
- **Making a new Post** [`post.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/post.json)    
  _Allows you to create a new post in the Raw Data Server._    
  `post <category> <post body>`    
####    
- **Approving a Post** [`approve.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/approve.json)    
  _This allows a user that has the specified role to vote to approve a new post. Requires 5 approvals to pass._    
  `approve <rawdata id>`, `accept <rawdata id>`    
####    
- **Denying a Post** [`deny.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/deny.json)    
  _This allows a user that has the specified role to vote to deny a new post. Requires 5 denials to pass._    
  `deny <rawdata id> <reason>`, `decline <rawdata id> <reason>`    
####    
- **Deleting YOUR Own Post** [`deletepost.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/deletepost.json)    
  _This let's you delete one of your own posts that you may have made either by mistake or if you need to update it. This will completely remove it from the channel if it was passed, as well as the database itself to prevent it from being loaded in the future.._    
  `deletepost <rawdata id> <reason>`    
####    
- **Loading a Post** [`load.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/load.json)    
  _Lets you see the embed with any post id, as well as if it passed, failed or is still pending._    
  `load <rawdata id>`    
####    
- **Viewing a Person's Raw Datas** [`viewraws.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/viewraws.json)    
  _You can see a user's currently pending posts as well as their approved posts, their denied posts will not show._    
  `viewraws <user id>`, `viewraws <mention>`    
####    
- **Forcefully Approving a Raw Data** [`forceapprove.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/forceapprove.json)    
  _This allows a person who has been whitelist or a Moderator to forcefully pass a Raw Data._    
  `forceapprove <rawdata id>`, `forceaccept <rawdata id>`    
####    
- **Forcefully Denying a Raw Data** [`forcedeny.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/forcedeny.json)    
  _This allows a person who has been whitelist or a Moderator to forcefully deny a Raw Data._    
  `forcedeny <rawdata id> <denial reason>`, `forcedecline <rawdata id> <denial reason>`    
####    
- **Forcefully Deleting a Raw Data** [`forcedeletepost.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/forcedeletepost.json)    
  _This allows a person who has been whitelist or a Moderator to forcefully delete a Raw Data._    
  `forcedeletepost <rawdata id> <reason>`, `fdeletepost <rawdata id> <reason>`    
####    
- **Adding or Removing Someone to the Force Whitelist** [`forcewhitelist.json`](/Raw%20Data%20Server%20-%20Raw%20Data%20System/Commands/forcewhitelist.json)    
  _Allows a person with the MANAGE_GUILD permission to add someone to the whitelist for using force commands or remove them. This is a toggle command, so doing it once will add them, twice will remove them._    
  `forcewhitelist <user id>`, `forcewhitelist <mention>`    
####    
</p></details>
</p></details>


## Credits and Disclaimers   
#### Huge shoutout to Totally Not Two for all of the help with the Run Script Portions.
All code listed in this repository unless explicitly stated are all created by me, if I use code from another I will credit them appropriately. If you have issues with any of the codes stated, please make sure you have followed everything in the section prior to doing anything else. If you still have issues after that, then please, **`do not ping me or DM me`**, but instead ask in the of the [Raw Data Server's Support Channel](https://discord.gg/cW9zmCu) and you will be assisted when someone is able to.