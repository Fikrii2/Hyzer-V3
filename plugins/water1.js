let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=Fiktod&text=${response}`
  conn.sendFile(m.chat, res, 'water.jpg', `Nih kak`, m, true)
}
handler.help = ['water'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(water)$/i

module.exports = handler

