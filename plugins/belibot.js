let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Sewa Bot 〙 ═
╠➥ *1 Minggu* : *Rp 5.000*
╠➥ *1 Bulan* :  *Rp 10.000*
╠➥ *Permanen* : *Rp 25.000*
╠➥ *Premium 1 Bulan* : *Rp 10.000*
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Dana/Gopay
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 FikriiSky 〙 ═`.trim(), '❖ Miku', 'Gopay', '#viadigi', 'Dana', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
