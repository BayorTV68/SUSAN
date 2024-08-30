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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106149503";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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

  sessionName:process.env.SESSION_ID || "SUHAIL_17_36_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmeXdzTDREbnN1T2tQb09KdHVxQkNWYTBoMVJ2alppNnZFbjNSZ2FyR0tzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUTTdiQTRvc1NEQ000QmtfWUprdThnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRiZTJlNjkyLTEwN2EtNGNmYS1hOTg0LWQ1OGQzZjI1MDhkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDE4OSxcbiAgICAgIDIzOCxcbiAgICAgIDE1OCxcbiAgICAgIDE1NCxcbiAgICAgIDgsXG4gICAgICAyLFxuICAgICAgMTc3LFxuICAgICAgMjEwLFxuICAgICAgMTk4LFxuICAgICAgODgsXG4gICAgICA1NCxcbiAgICAgIDE4NixcbiAgICAgIDEwNSxcbiAgICAgIDExLFxuICAgICAgMTcxLFxuICAgICAgMzcsXG4gICAgICA5NyxcbiAgICAgIDE4OCxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICA1LFxuICAgICAgMjA2LFxuICAgICAgNTIsXG4gICAgICAyMzEsXG4gICAgICA1NixcbiAgICAgIDY3LFxuICAgICAgNjAsXG4gICAgICAxMzIsXG4gICAgICAxMyxcbiAgICAgIDE2LFxuICAgICAgODIsXG4gICAgICAxNjMsXG4gICAgICAxNzQsXG4gICAgICAxMjksXG4gICAgICAyMDUsXG4gICAgICA1MixcbiAgICAgIDIzOSxcbiAgICAgIDE0NSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMUUpKSzNCWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNjE0OTUwMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiZmluZXNzwqNcIixcbiAgICBcImxpZFwiOiBcIjE2MTM5NjM0ODIxNTQ0Njo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2dnY2a0dFSzZHeUxZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEFZK21RdGtNUkk3UzNPOUE0N3FDQk1pdnRmWFh6aWVuS2tjZk1INXRERT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3ZHJxcGxMYTR6NDlKSDFhb0pWN1hvSTlBNEZjeWFlNTdrVUx3Yjl0TFl2S2FUYkRNUm5ibXlybXRFQ1pSTW5DRXBDUGtZV1J1d3lpaXUrektmMmVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5TkJaekgybHIzVFNlNnpjK2NtN3dnejlhKzlIWkRzd1BjWFJkR1hqWGJWK05tTktjVW15SDNEMTBJNDQyR0pFSVVld2I2RlJKSnYrZG5IaTNsSTBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA2MTQ5NTAzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUwMzk0MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPQ0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9DSS5qc29uIjogIntcImtleURhdGFcIjpcIjhud2RwTkp2YUZqb3E0bDgvMWlpOXRQaVRmcVlvVUdpa3UzVUd1d2dsRE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NzY0MjM3NixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzU0NjM0Nzg5N1wifSIKfQ==",  // PUT SESSION ID HERE 
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
 
