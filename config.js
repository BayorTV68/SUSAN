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

  sessionName:process.env.SESSION_ID || "SUHAIL_20_13_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYzLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBwVllJR0Z5Zm51WkdaaWl4VFY2MlVhVXNZVU0rOTVDQzUzOGFlbldJdHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhfWFhiYndIUUdxRmhham8yUlJhUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGM1YTg3ZGMtMDNmZC00NjY2LTg2YTItYzQzMmIwZmFmZThhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTA0LFxuICAgICAgNjQsXG4gICAgICA2NCxcbiAgICAgIDEzOSxcbiAgICAgIDIzMyxcbiAgICAgIDEyOCxcbiAgICAgIDE2MixcbiAgICAgIDE3MCxcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgMTI2LFxuICAgICAgMzEsXG4gICAgICA0OSxcbiAgICAgIDIwMSxcbiAgICAgIDM1LFxuICAgICAgNDAsXG4gICAgICAxNTksXG4gICAgICA2LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDgxLFxuICAgICAgMTcwLFxuICAgICAgMTAsXG4gICAgICAxNDIsXG4gICAgICAyNSxcbiAgICAgIDIwNyxcbiAgICAgIDUsXG4gICAgICA3NCxcbiAgICAgIDYwLFxuICAgICAgMjE1LFxuICAgICAgMTQxLFxuICAgICAgMTI0LFxuICAgICAgNTcsXG4gICAgICA1MCxcbiAgICAgIDEzMCxcbiAgICAgIDE5NyxcbiAgICAgIDcsXG4gICAgICAxNDIsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIUFhCWUhBUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNjE0OTUwMzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZpbmVzc8KjXCIsXG4gICAgXCJsaWRcIjogXCIxNjEzOTYzNDgyMTU0NDY6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTN2djZrR0VPZlB5TFlHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QVkrbVF0a01SSTdTM085QTQ3cUNCTWl2dGZYWHppZW5La2NmTUg1dERFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRBc1d0eGtGR3dFdVVwa3Zsak8yTVk3b0o2OEo5MDNCR3RLZWUyTjFQdHp3NGF1TkVZYmNtZ2k3aDdXaFpQZkM5TVBmWElWRkp4R1g5cTd0Slh3VENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd4WENZbXpZQjFPRC81cW5MOGRoamE4cHBsYU5vT3l1ZnRnbUdQS0xaYWJ3UGt5RS94SzQ3Nld4NGJsZ2o4aEl2aTdzUlRMaTNGY29DWE5PeEhvamdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDYxNDk1MDM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUwNDg4MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJQTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlBNC5qc29uIjogIntcImtleURhdGFcIjpcIndRNzF6WGNGdDA3RkcwNExPcHhkbGJOaHFJRXptMkJwTlBzZlJ0VVc1a3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NzY0MjM4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1MDQ4NTAwNjI3XCJ9Igp9",  // PUT SESSION ID HERE 
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
 
