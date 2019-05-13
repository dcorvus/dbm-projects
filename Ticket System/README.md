## General Information    
This is a reworked version of my previous [Advanced Ticket Sytem](https://github.com/zachdoug24/dbm-projects/tree/adv_ticket_sys) that features much more variability for bots that feature a large variety of servers. This has all the features the previous included, plus much more. 

## Important Information / Notes    

1. Before attempting to get support, please make sure that you have the following in BOTH your Bot Files as well as your DBM Files.
    - [x] [Beta Version of Discord Bot Maker](https://dbotmaker.io/forums/threads/how-to-join-the-beta-version-for-newbies-and-more.63/).
    - [x] [The Latest Beta Mods](https://github.com/Discord-Bot-Maker-Mods/DBM-Mods/tree/beta).
2. When the bot joins a new server, please make sure to alert people to use the command `ticketsettings` to see a list of commands users with the **MANAGE_GUILD** permission must use before the system will work appropriately, as well as their values if they are already currently set.    
3. Be sure you are not downloading the files and putting them in the DBM Directory, but instead [Copying the data of each file into a new Command / Event](https://i.imgur.com/gDWVVXl.png).

## Command Syntaxes and Descriptions    
<details>
  <summary>Click to view/hide Commands</summary>
  <p>
<!--  -->
    
- **Creating a New Ticket** [`newticket.js`](/Ticket%20System/Commands/newticket.js)    
  _These commands will allow you to create a new ticket, either with no reason specified or with whatever you specify._    
  `newticket`, `new`, `createticket`, `newticket <reason>`, `new <reason>`, `createticket <reason>`    
  ####    
- **Closing a Ticket** [`closeticket.js`](/Ticket%20System/Commands/closeticket.js)    
(For users with full ticket permissions)    
_These commands must be run by users who have full permissions in the specific ticket channel this command is run in and will close the ticket after 15 minutes of no activity._    
`closeticket`, `close`, `closeticket <reason>`, `close <reason>`    
####    
- **Forceclosing a Ticket** [`forcecloseticket.js`](/Ticket%20System/Commands/forcecloseticket.js)    
(For the roles specified as support and managers)    
_These commands will instantly close the ticket channel it is used in._    
`forcecloseticket`, `forceclose`, `fclose`, `forcecloseticket <reason>`, `forceclose <reason>`, `fclose <reason>`    
####    
- **Adding a User to a Ticket** [`addticket.js`](/Ticket%20System/Commands/addticket.js)    
(Can only done by users with full ticket permissions)    
_This command will add a user to the ticket, either with full permissions which will enable them to do what the original creator could do, or with normal permissions which will only enable viewing and speaking in the channel. By default it adds them with normal permissions._    
`adduser <@user>`, `adduser <@user> normal`, `adduser <@user> full`
####    
- **Elevating the Ticket to Management Only** [`elevateticket.js`](/Ticket%20System/Commands/elevateticket.js)    
(For the roles specified as support and managers)    
_This command will cause users in the designated support team role to be unable to view the ticket anymore, thus making it for management only._    
`elevateticket`, `eticket`    
####    
- **Claiming a Ticket** [`claimticket.js`](/Ticket%20System/Commands/claimticket.js)    
(For the roles specified as support and managers)    
_This command will 'claim' a ticket, meaning that it is notifying the user that the member who ran the command will be the one primarily helping you with your issue. This still allows users with the support and manager roles to see and assist, however._    
`claimticket`, `cticket`    
####    
- **Setting the Tickets Category** [`setticketcategoryid.js`](/Ticket%20System/Commands/setticketcategoryid.js)    
(Only for users with "MANAGE_GUILD" permissions)    
_This will setup the category that tickets are sent to once created. This MUST be a category ID and it must be valid, else everything will break._    
`setticketcategoryid <Category ID>`, `settcatid <Category ID>`    
####    
- **Setting the Ticket Log** [`setticketlog.js`](/Ticket%20System/Commands/setticketlog.js)     
(Only for users with "MANAGE_GUILD" permissions)    
_This will set the channel that ticket creations, deletions and updates will be logged to._    
`setticketlog <#channel-name>`, `settlog <#channel-name>`        
####    
- **Setting the Post-Ticket Log File Log** [`setticketfilelog.js`](/Ticket%20System/Commands/setticketfilelog.js)    
(Only for users with "MANAGE_GUILD" permissions)    
_This sets which channel that closed ticket logs are sent to. This channel should be private, as it could contain personal information of the user._    
`setticketfilelog <#channel-name>`, `settfilelog <#channel-name>`    
####    
- **Setting the Ticket Manager Role** [`setticketmanager.js`](/Ticket%20System/Commands/setticketmanager.js)    
(Only for users with "MANAGE_GUILD" permissions)    
_This command sets the role that will act as a manager and oversee the support role._    
`setticketmanager <Role Name>`, `settmanager <Role Name>`
####    
- **Setting the Ticket Support Role** [`setticketsupport.js`](/Ticket%20System/Commands/setticketsupport.js)    
(Only for users with "MANAGE_GUILD" permissions)    
_This command sets the role that will act as the support team and assist users within the tickets._    
`setticketsupport <Role Name>`, `settsupport <Role Name>`    
####    
- **Viewing Current Ticket Settings** [`ticketsettings.js`](/Ticket%20System/Commands/ticketsettings.js)     
_It will show you the varying settings in the current server as well as their values._    
`ticketsettings`, `tsettings`    
####    
</p></details>
</p></details>

## Ticket System Images    
<details>
  <summary>Click to view/hide images</summary>
  <p>
  <!--  -->
    <details>
      <summary>Click to view/hide Image 1</summary>
      <p>
      <!-- -->    

![Example 1](/Ticket%20System/Screenshots/example-1.gif "Example 1")     
      </p></details>
    <br>
    <details>
      <summary>Click to view/hide Image 2</summary>
      <p>
      <!-- -->    

![Example 2](/Ticketication%20System/Screenshots/example-2.gif "Example 2")     
    </p></details>
    <br>
    <details>
      <summary>Click to view/hide Image 3</summary>
      <p>
      <!-- -->    

![Example 3](/Ticket%20System/Screenshots/example-3.gif "Example 3")     
    </p></details>
    <br>
    <details>
      <summary>Click to view/hide Image 4</summary>
      <p>
      <!-- -->    

![Example 4](/Ticket%20System/Screenshots/example-4.gif "Example 4")     
    </p></details>
  </p></details>
</p></details>

## Credits and Disclaimers
##### Many credits and thanks to [@DogV2](https://github.com/DogV2/) for the Ticket Logging Events that are used in this system, as well as releasing his variant of the Ticket System which encouraged me to rework my previous one.    
All code listed in this repository unless explicitly stated are all created by me, if I use code from another I will credit them appropriately. If you have issues with any of the codes stated, please make sure you have followed everything in the **[Important Information / Notes](/Ticket%20System/README.md#important-information--notes)** section prior to doing anything else. If you still have issues after that, then please, **`do not ping me or DM me`**, but instead ask in the of the [Raw Data Server's Support Channel](https://discord.gg/cW9zmCu) and you will be assisted when someone is able to.
