let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Proses...*')
  let res = `https://api.lolhuman.xyz/api/textprome/thunder?text=${response}&apikey=Fiktod`
  conn.sendFile(m.chat, res, 'nama.jpg', `DUAARRRR!`, m, false)
}
handler.help = ['thundertext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(thundertext)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
