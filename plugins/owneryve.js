let handler = function (m) {
	this.sendContact(m.chat, '6281233738677', 'Owner Bot Miku :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
