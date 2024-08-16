const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="joabsteve143@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254114906989";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "joab",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  // PUT SESSION ID HERE SUHAIL_10_38_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgwLFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgODQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFpRQTlOK0FZNExscHQvZFF0amlHbFhHSDVBd1cycnI0V1V6aG1GN3dXWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZm9kSzdTY3JSYU8wSlBPUkFHSmgxQVwiLFxuICBcInBob25lSWRcIjogXCI5MDBkYTIyZS1kNzUyLTRiNjYtYjcyZi1jMTdhMTgzOWIzNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMTg5LFxuICAgICAgMTg1LFxuICAgICAgNjMsXG4gICAgICAxOTQsXG4gICAgICAyNDksXG4gICAgICAzOSxcbiAgICAgIDIwMyxcbiAgICAgIDk5LFxuICAgICAgMjUyLFxuICAgICAgMTA5LFxuICAgICAgMTgzLFxuICAgICAgMTQyLFxuICAgICAgNTksXG4gICAgICA4MSxcbiAgICAgIDE2LFxuICAgICAgMjMwLFxuICAgICAgMTYzLFxuICAgICAgODgsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTcyLFxuICAgICAgMjQ1LFxuICAgICAgMzYsXG4gICAgICAxODcsXG4gICAgICAxMzMsXG4gICAgICA3MCxcbiAgICAgIDk1LFxuICAgICAgNTksXG4gICAgICAxMzYsXG4gICAgICAyMzAsXG4gICAgICAyNTUsXG4gICAgICAxMzIsXG4gICAgICAyNDEsXG4gICAgICAxMTIsXG4gICAgICA3NSxcbiAgICAgIDcyLFxuICAgICAgNDIsXG4gICAgICA2MSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlE0RFdXWURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNDkwNjk4OToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk5OTgxMzM3MjcyODU6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXJQMjZZSEVKTFkvTFVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4bHJKUXEvTnZKOWwrcGRBWUdVWFVXblV5blp4WjBpUE5wQjI4QThoUkd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjg1UTRWbFRrRkZBeHRmN1p0NENMVHMyYUYyeDZiVTVWdHpERGwwN2lMTEhZY25zSTB0YitQSVVSQ3F6YXcxS0tiOFdDMEhWdmJETHhwVWRzamVBR0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlnYlJxTlczVHEwVk5LdVVjblJJaVgyVXlsc0hCQm1YUElacFdBM3RHcnd4MmhGU3BFTGxGZGdVb1lVS0lBTTc2YmE3NXd2aUNLM284WDcrZjhqaGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNDkwNjk4OToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM4MDQ2OTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFYmVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViZS5qc29uIjogIntcImtleURhdGFcIjpcIisyQzlhNWhsS3hsMVIxUEdESU03cS9ueTF6QjdUaWRLeitGYVF0bTRablU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk2MDI0MTAzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzNjM1MjY1OTI4XCJ9Igp9
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
