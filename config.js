const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Whatsxeg@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201064034056";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "201064034056,20xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,20xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "201064034056,20xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©elshabah²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ELSHABAH-MD",
  packname: process.env.PACK_NAME || "👻",
  botname : process.env.BOT_NAME  || "ELSHABAH-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x ELSHABAH",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_49_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFEyVTM1QXBHNFhiTHYxQzJhKzF3dFk1MEFlTjZ2VkJPRnIxMDRoYXBzRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0F0em1kak9TVWF2S05kekFEdWdXQVwiLFxuICBcInBob25lSWRcIjogXCIyMjQwMzMzYS1mYzcyLTQzNmYtOGM1Mi02MjFjZjg4ZjJlM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICA0LFxuICAgICAgMTU0LFxuICAgICAgMTAzLFxuICAgICAgMjE1LFxuICAgICAgMzQsXG4gICAgICAyOCxcbiAgICAgIDExMyxcbiAgICAgIDEzMSxcbiAgICAgIDYwLFxuICAgICAgMTM3LFxuICAgICAgMjQsXG4gICAgICA2MyxcbiAgICAgIDIzOCxcbiAgICAgIDIyNixcbiAgICAgIDI1MyxcbiAgICAgIDIzNSxcbiAgICAgIDE4NSxcbiAgICAgIDIxMCxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAyMTYsXG4gICAgICAyMzYsXG4gICAgICAxNDgsXG4gICAgICAzNixcbiAgICAgIDgyLFxuICAgICAgMzQsXG4gICAgICAzMSxcbiAgICAgIDE5NyxcbiAgICAgIDEwNSxcbiAgICAgIDE1NCxcbiAgICAgIDIxMyxcbiAgICAgIDE3MCxcbiAgICAgIDExOCxcbiAgICAgIDYwLFxuICAgICAgMjA0LFxuICAgICAgMTIwLFxuICAgICAgNTAsXG4gICAgICAxMjAsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNTg4QUY3VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzU4NDU3Mzk4MzgwMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2KfZhNi02KjYrSDYqNin2YrZhtif2J9cIixcbiAgICBcImxpZFwiOiBcIjI3NTY1MTUyMTIxMjU4NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYRmlZa0ZFTmFZeWJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidW9tWjdBZkhZZ1Rrall0ZFJ2TjRJTGo5VUlsaEVzMCtKTWJoZjdJWEx3MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmWjltQjJLakJCaTMvT0dRU29OcHMxNWNvZkNrREUzQkJ2NWhGcTNnKytad2NOMnZlTmMrWVk1V3BmYzIrU0NQM0lTd0lDR1NidEVpc2JQRk9ydDdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCWFhXSWZraHdOdEQzV0hLQTljUFhzL0VhcHo4NXJ1alVoeXk3cGJSTUZJbUxad3AvcDlRaTJKaFpGd1BuaTlPY1MxV0tGSEowOHE4UmJvUG1IeWNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzNTg0NTczOTgzODAxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTA1ODEzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFpTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWlMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaEJlRWF6eDlwNkhqNDBDYnp6R25GZXlXajhSd2ZZdm15Z3FmY3dhdEpwMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzYxMjA3OTU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjUwNTgxNDQxMjhcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
