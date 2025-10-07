const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEw5RFdGb1dRWTN1Zm16TTVYTUhtdG91NEM3Rzk1ektWWk00b3B4aDNGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE1MWWxnNkdNYm9UNXd0RW9FVjQ5c3k5UHJqNmgrdU1NNUxpZ3NUdCszWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUHp3cXY5MC9seHllT2pSaEVOYXhzTUZJMk1wd00xT0JWcWtudWlTVmxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4U1pUNU55WXpIaDQ5SXpJc21CcmJOUlZ3ZkhuMXJkY2dyUFVmdG5kUnlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBQk9HdG9CZDVZVlBmZ0Q2OWFKK01tRHJMS3lQd1VrQ0ZiTzZMNEpCVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNwL1lzcSsrYTFMcEYzWmVsNFF4S1ZvQVJIZnhwejRoeUFsMXZYYlVFeHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkw5VFVvSWJ0RmxQRk0wOTBSZ2JtazJKOXU0bnM3aC9zOGlSbU0wWFBGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW9jQkpyckpJUWxhZGU0cHFQbzArc1dyZEthMU16TTd4ck1QUWJ5SENGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZRUS9kUjJBUGRFOUtnS09uOEl2UmU0V2xXV0V3RStDb2tRS0I1dVgyWS9lSTBPMFBsNFBqalJpcUc4YVNMa0RNU0ZmS1dMNElQeGoxaUVBT09WckNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJmcVNJbmxxb2JleDJlT0JTWkxJR1dzMzhZUEFTdzBXeS9HdkVERzNNbEV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE1NzE2Mjg4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzdFNjdFNjY3QzM2QTFCQTNFQkVBOUJGQTEyQzAxQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5ODA4MzU0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNTcxNjI4ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDRTBBNzc2MjczNkQ2RDBEN0IzQkVCOUREQTdGOTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTgwODM1NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUUs4UjI2SzEiLCJtZSI6eyJpZCI6IjkyMzE1NzE2Mjg4OToxOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNTkyNjM2ODI1NjUwOjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnVtbmNZRkVObVdrc2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWms5TnREdGF3d0cyUTEyRWdKVjYwa29tanpiR0hyRUE0OGQwU1dOR0J3az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUGJjM3RJQnpER2pYSk5hbkNjQUJGOHJjM2tPbS9vUEc1dGllOGlHSjZTTGxGQVNObGJYM2ZXMndTMzRVSnpWN0IxOHJFM1ZVM2g4RDdTNFBmaWRDQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImFhcXBRakNwNVNicnB0aGtzRUViNGtYUjhpbG02Z2s1TEJvaTdqZjVxd0IrdVJ4Y2I0NmdaWVBzbTlxbksyZGx4YnIwNEI2cU5EZnJoOUNNdDhQVEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTU3MTYyODg5OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldaUFRiUTdXc01CdGtOZGhJQ1ZldEpLSm84MnhoNnhBT1BIZEVsalJnY0oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTgwODM0OCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHNU4ifQ==",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS HASHIM_X_HACKER-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/8zn50t.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "HASHIM_X_HACKER-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923191776744",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hashim Abbas*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *Hashim-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923191776744",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
