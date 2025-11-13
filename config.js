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

const fs = require('fs')

//settings bot
global.owner = "6282137392620"
global.namaowner = "Erlangga Developer"
global.reply = "https://img1.pixhost.to/images/5080/588494266_erlangga.jpg"
global.reply2 = "https://img1.pixhost.to/images/5080/588494692_erlangga.jpg"
global.status = true
global.prefa = ["", "!", ".", ",", "🐤", "🗿"]; // Not Change!!

// Settings Event
global.welcome = true
global.antispam = true
global.autoread = false
global.owneroff = true

// Payment
global.dana = "082313677395"
global.gopay = "088905301692"
global.ovo = "-"
global.qris = fs.readFileSync("./assest/allmedia/qris.jpg")
global.namadana = "DIANA SAPTAWATI"
global.namagopay = "erlangga"
global.namaovo = "-" 


// Message
global.mess = {
    owner: "\`[ # Access Denied ]\` Fitur Khusus Developer Erlangga",
    group: "\`[ # Access Denied ]\` Fitur Khusus Di Dalam Group",
    private: "\`[ # Access Denied ]\` Fitur Khusus Private Chat",
    murbug: "\`[ # Access Denied ]\` Fitur Khusus Pengguna Murbug",
    admin: "\`[ # Access Denied ]\` Fitur Khusus Admin",
    botadmin: "\`[ # Access Denied ]\` Bot Bukan Admin Kocakk",
}

// Nama Sticker 
global.packname = 'Sasuke Crash Gen 7'
global.author = '\nErlangga Developer'

// End Settings

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
