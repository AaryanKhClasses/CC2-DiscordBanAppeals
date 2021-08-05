const webhookURL = "" // Your Webhook URL Here
const avatarURL = ""

const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')

function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", webhookURL);
    request.setRequestHeader('Content-type', 'application/json');

    var embed = {
        author: { name: `${username.value}#${usertag.value}` },
        title: "New Ban Appeal!",
        timestamp: new Date(),
        color: 0xFF0000,
        footer: { text: `Ban Appeals Webhook | User ID: ${(userID.value).toString()}` },
        fields: [
            { name: "User", value: `${username.value}#${(usertag.value).toString()}`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "Reason for Ban", value: `${reason.value}` },
            { name: "Appeal", value: `${appeal.value}` }
        ]
    }

    var params = {
        username: `Ban Appeals Webhook`,
        avatar_url: avatarURL,
        embeds: [ embed ]
    }

    request.send(JSON.stringify(params))
    alert('Ban Appeal Sent!')
    console.log('Ban Appeal Sent!')
}