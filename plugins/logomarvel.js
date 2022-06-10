let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/textprome2/marvelstudio?text1=${response[0]}&text2=${response[1]}&apikey=Fiktod`
  conn.sendFile(m.chat, res, 'marvellogo.jpg', `Nih kak`, m, false)
}
handler.help = ['marvellogo'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(marvellogo)$/i

module.exports = handler

