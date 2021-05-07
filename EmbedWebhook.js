//Importowanie bibliotek
const { WebhookClient, MessageEmbed } = require("discord.js");
const color = require("colors");
//Ładowanie configu
const config = require("./config.json");
//Utworzenie webhooka na podane dane
const hook = new WebhookClient(config.webhook.id, config.webhook.token);
//Wiadomość o prawach autorskich, zakaz usuwania
console.log("[".yellow + "WEBHOOK".green + "]".yellow + " Webhook łączy się z discordem!".yellow);
console.log("WebHookTool v1.0".green + " (c) 2021 NieKot AKA xKot; RatCode Inc.".green)
//Generowanie embeda na podane w configu wartości
const embed = new MessageEmbed()
            embed.setTitle(config.webhook.title)
            embed.setColor(config.webhook.color)
            embed.setTimestamp()
            embed.setDescription(config.webhook.description);
            embed.setFooter(config.webhook.footer);
//Wysłanie embeda
    hook.send({
        embeds : [embed]
    })

