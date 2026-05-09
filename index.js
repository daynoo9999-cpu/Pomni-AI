import { Client } from 'whatsappy';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '212674751039', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false,
  owners: [
  // Owner 1
    { name: "Owner", jid: "212674751039@s.whatsapp.net", lid: "72190313631866@lid" }, ],
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "૮₍｡ᵔ ꈊ ᵔ｡`₎ა🍒܀رٕيا", 
  nameChannel: "𝆺𝅥 𝆭 ִ ֗ 🍒 𝐑𝐢𝐚 ┆`ريا`✨", 
  idChannel: "120363257045136835@newsletter",
  urls: {
    repo: "https://github.com/deveni0/Pomni-AI",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v"
  },
  copyright: { 
    pack: 'ڤـ ـ VA ـ ـا', 
    author: 'VA'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();
