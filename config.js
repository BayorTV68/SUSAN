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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0717646309";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
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
 
  author : process.env.PACK_AUTHER|| "Manu-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MANU",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_32_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT05RalR2eGFRd09aQmNvK0R2YUZScHUxL1g1UVprYVNrTHFPeVlLRG1FMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidzBXeTVDem9RZGVzTUJzT0xwQlBZd1wiLFxuICBcInBob25lSWRcIjogXCJkN2EwYWRiMC1iZmE3LTRiY2YtYmZmYy1jNTdkN2NmM2RmOTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgNDQsXG4gICAgICA0NSxcbiAgICAgIDMxLFxuICAgICAgMjQ1LFxuICAgICAgMjU0LFxuICAgICAgNTgsXG4gICAgICA5NyxcbiAgICAgIDIzLFxuICAgICAgMjA1LFxuICAgICAgMTIzLFxuICAgICAgMjA3LFxuICAgICAgMjMwLFxuICAgICAgMTUsXG4gICAgICA2NyxcbiAgICAgIDUxLFxuICAgICAgMTIwLFxuICAgICAgNDAsXG4gICAgICA4MCxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAxMzgsXG4gICAgICAxNDcsXG4gICAgICA1NSxcbiAgICAgIDEwNixcbiAgICAgIDI1MyxcbiAgICAgIDg1LFxuICAgICAgNDIsXG4gICAgICA3MSxcbiAgICAgIDI1MSxcbiAgICAgIDQsXG4gICAgICA2MyxcbiAgICAgIDE5MSxcbiAgICAgIDIsXG4gICAgICAyNDYsXG4gICAgICA2MixcbiAgICAgIDE2NSxcbiAgICAgIDIyNixcbiAgICAgIDg5LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNTV1dTWExaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTc2NDYzMDk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NjA3MjA0Nzg2MTg5MjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdWo4NVlCRU9ydnVMWUdHQmtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFIWHc4djljR3lpUzhEWTVpY0RRQUlOOWdzeDBHc2FqUXJZclVMcWVnRWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRGdpTSs5NDhkQytDZjhidFYxQ1Y3UTY1Z3ZjQkhvNTRpZE9UYlpoVG9hUC9BVVhrUzIzMmxrS1J4Q0hLUGRjQS9sT2NlZHIwT1NxSU5QeDZjN1UxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ0M2N3U1ZDFNd2ZPOUhXUWFXd1Z2UExwRGF3TEFsdmQ2RHFaUUJvZ1VYUUpIQ2JiQytNZ3R3a3BSM2ZIR1FrQy92ajhMT2kvcEtPR3Rqcll5WlBwakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE3NjQ2MzA5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ3OTA3NjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
