let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=Fiktod&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['pubglogo'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']

handler.command = /^(pubglogo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
