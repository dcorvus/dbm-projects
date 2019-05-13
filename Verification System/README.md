## General Information    
This is a reworked version of my previous [Verification System](https://github.com/zachdoug24/dbm-projects/tree/verify) that features much more variability for bots that feature a large variety of servers. This has all the features the previous included, plus much more. 

## Important Information / Notes    

1. Before attempting to get support, please make sure that you have the following in BOTH your Bot Files as well as your DBM Files.
    - [x] [Beta Version of Discord Bot Maker](https://dbotmaker.io/forums/threads/how-to-join-the-beta-version-for-newbies-and-more.63/).
    - [x] [The Latest Beta Mods](https://github.com/Discord-Bot-Maker-Mods/DBM-Mods/tree/beta).
2. When the bot joins a new server, please make sure to alert people to use the command `verifysettings` to see a list of commands users with the **MANAGE_GUILD** permission must use before the system will work appropriately, as well as their values if they are already currently set.    
3. Be sure you are not downloading the files and putting them in the DBM Directory, but instead [Copying the data of each file into a new Command / Event](https://i.imgur.com/gDWVVXl.png).    
4. If users are still able to see all channels without verifying, check if `@everyone` has "READ_MESSAGES" turned off in channels you don't want them to see.    
5. To make sure that no messages can be sent to the verification channel, make sure that you include the events. If you have something you want pinned to the channel for users to see then you must either:
    - Make sure the bot is off.    
    - Send a message via the bot to the verification channel.     

## Command Syntaxes and Descriptions    
<details>
  <summary>Click to view/hide Commands</summary>
  <p>
<!--  -->
    
- **Verifying Yourself** [`verify.js`](/Verification%20System/Commands/verify.js)    
  _These are the main commands for users trying to gain access to your server._    
  `verify`, `verify <code>`    
  ####    

- **Reissuing Your Code** [`reissueverifycode.js`](/Verification%20System/Commands/reissueverifycode.js)    
  _This is the command that will reissue a verification code for yourself._    
  `reissueverifycode`, `reverifycode`, `revcode`    
  ####    

- **Setting the Verification Role** [`setverifiedrole.js`](/Verification%20System/Commands/setverifiedrole.js)    
  (For users with the "MANAGE_GUILD" permission)    
  _This will set the role that the user will get added to when successfully verified._    
  `setverifiedrole <Role Name>`, `setvrole <Role Name>`    
  ####    
  
- **Setting the Verification Channel** [`setverifychannel.js`](/Verification%20System/Commands/setverifychannel.js)    
  (For users with the "MANAGE_GUILD" permission)    
  _This will set the channel that the user must issue the verification command in._    
  `setverifychannel <#channel>`, `setvchannel <#channel>`    
  ####    
  
- **Setting the Verification Log Channel** [`setverifylogchannel.js`](/Verification%20System/Commands/setverifylogchannel.js)    
  (For users with the "MANAGE_GUILD" permission)    
  _This sets the channel that logs when a user successfully verifies themselves._    
  `setverifylogchannel <#channel>`, `setvlogchannel <#channel>`    
  ####    
  
- **View the list of Verification Settings** [`verifysettings.js`](/Verification%20System/Commands/verifysettings.js)    
  _Shows a the current server settings regarding the verification system._    
  `verifysettings`, `vsettings`    
  ####    

</p></details>
</p></details>

## Verification System Images    
<details>
  <summary>Click to view/hide images</summary>
  <p>
  <!--  -->
    <details>
      <summary>Click to view/hide Image 1</summary>
      <p>
      <!-- -->    

![Example 1](/Verification%20System/Screenshots/example-1.gif "Example 1")     
      </p></details>
    <br>
    <details>
      <summary>Click to view/hide Image 2</summary>
      <p>
      <!-- -->    

![Example 2](/Verification%20System/Screenshots/example-2.gif "Example 2")     
    </p></details>
    <br>
    <details>
      <summary>Click to view/hide Image 3</summary>
      <p>
      <!-- -->    

![Example 3](/Verification%20System/Screenshots/example-3.gif "Example 3")     
    </p></details>
    <br>
    <details>
      <summary>Click to view/hide Image 4</summary>
      <p>
      <!-- -->    

![Example 4](/Verification%20System/Screenshots/example-4.gif "Example 4")     
    </p></details>
  </p></details>
</p></details>

## Credits and Disclaimers   
All code listed in this repository unless explicitly stated are all created by me, if I use code from another I will credit them appropriately. If you have issues with any of the codes stated, please make sure you have followed everything in the **[Important Information / Notes](/Verification%20System/README.md#important-information--notes)** section prior to doing anything else. If you still have issues after that, then please, **`do not ping me or DM me`**, but instead ask in the of the [Raw Data Server's Support Channel](https://discord.gg/cW9zmCu) and you will be assisted when someone is able to.
