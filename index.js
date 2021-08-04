const webhookURL = "" // Your Webhook URL Here
const avatarURL = ""

const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')

function sendMessage() {
    if(username.value === "" || usertag.value === "" || userID.value === "" || reason.value === "" || appeal.value === "") { return alert("Please fill all the Details!") }
    if(usertag.value.length !== 4) { return alert("Invalid User Tag!") } 
    if(userID.value.length !== 17 || userID.value.length !== 18) { return alert("Invalid User ID!") }
    var request = new XMLHttpRequest();
    request.open("POST", webhookURL);
    request.setRequestHeader('Content-type', 'application/json');

    var embed = {
        author: { name: `${username.value}#${usertag.value}` },
        title: "New Ban Appeal!",
        timestamp: new Date(),
        color: 0xFF0000,
        footer: { text: `Ban Appeals Webhook | User ID: ${userID.value}` },
        fields: [
            { name: "User", value: `${username.value}#${usertag.value}`, inline: true },
            { name: "UserID", value: `${userID.value}` },
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