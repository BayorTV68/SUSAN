const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
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
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  //SUHAIL_12_29_08_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA2NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktyams4MUdkMC9rYTlmYzZwVHpkQUpwa0xUeWQydzU1cE45b0xDWWFFM2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxtNmllS2FOU0hLd3RCUVU3aUQ5Q2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjU3MDg4NDEtMzQ4Mi00ODI2LWJmNDQtNDdhYWE1Y2MyYzAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDc3LFxuICAgICAgMjI2LFxuICAgICAgMjE2LFxuICAgICAgMTE2LFxuICAgICAgMTEsXG4gICAgICA3OCxcbiAgICAgIDIxMSxcbiAgICAgIDEwMyxcbiAgICAgIDMxLFxuICAgICAgMjQyLFxuICAgICAgMTcyLFxuICAgICAgMTA3LFxuICAgICAgMTI5LFxuICAgICAgMTM5LFxuICAgICAgMjMsXG4gICAgICAyMTEsXG4gICAgICAxNzAsXG4gICAgICAzOCxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE3OSxcbiAgICAgIDE4NCxcbiAgICAgIDEyMCxcbiAgICAgIDc2LFxuICAgICAgODEsXG4gICAgICAyOSxcbiAgICAgIDIxNCxcbiAgICAgIDgyLFxuICAgICAgNDAsXG4gICAgICAyMDgsXG4gICAgICAxNyxcbiAgICAgIDIyNyxcbiAgICAgIDkxLFxuICAgICAgMjE3LFxuICAgICAgMTgxLFxuICAgICAgMTMwLFxuICAgICAgMTgwLFxuICAgICAgMTYwLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDFXM0tHVkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MjA1MzI4NjYxODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ0NzczOTk1Mjc0ODY6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ21qMUFRdDYrQ3RnWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNYbStkdGxPN3VhNkkwaEEyci9Fbmw2eGlITmx2QnVwcEVKZUFSbE92ZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGNLdWZHcGJlY1RURWJlem1sRHA2TnIybzdzOGJDU2p1SnJ4TUdJMWMzemFkTlpmbUJPNE5EOFU2MXhPUURUNGtvNjQrejQ2Tmg3S2ZtVmFYOENLQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2tIUDlIUk1wZEthVkVKRVY3OG5wNi9hQ296STc3NEhqaForSkh5RStJQUlOdGlscjF6bHFkUGhhSGJzeHRLbzU3aG4zTWxHVEpYSnM0SHpsWktKZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDUzMjg2NjE4OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzg5Nzc4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlkWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWRYLmpzb24iOiAie1wia2V5RGF0YVwiOlwieDBuZVl5WFFTQW5JL2FFaUNwdk9oRlp6Znl6NUJOUHg0SjJmRzd6c1hPdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjgwMjI4MDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzg5NzYyNTkwNFwifSIKfQ== PUT SESSION ID HERE 
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
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
