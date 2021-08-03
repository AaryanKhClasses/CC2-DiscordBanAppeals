const Discord = require('discord.js')
const XMLHttpRequest = require('xhr2')
const config = require('./config.json')

const webhookURL = config.webhookURL
const client = new Discord.Client()

const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const guildID = document.getElementById('guildID')

function formSubmit() {
    if(!client.guilds.cache.get(guildID.value)) {
        return alert('Invalid guild ID')
    }

    if(!client.users.cache.find(user => user.username === username.value && user.discriminator === usertag.value)) {
        return alert('Invalid user')
    }

    let request = new XMLHttpRequest()
    request.open('POST', webhookURL)
    request.setRequestHeader('Content-Type', 'application/json')

    const avatarURL = client.users.cache.find(user => user.username === username.value && user.discriminator === usertag.value).avatarURL

    let params = {
        username: username.value,
        avatar_url: avatarURL,
        "embeds": [{
            "title": "New Ban Appeal!",
            "color": "RED",
            "thumbnail": { "url": `${guildID.value}` },
            "fields": [
                {
                    "name": "Username",
                    "value": `${username.value}#${usertag.value}`
                },
                {
                    "name": "Ban Reason",
                    "value": "abcd test"
                }
            ]
        }]
    }

    request.send(JSON.stringify(params))
}