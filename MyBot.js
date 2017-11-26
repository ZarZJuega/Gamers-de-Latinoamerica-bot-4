const Discord = require("discord.js");
const  client = new Discord.Client;
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on('guildMemberAdd', member => {
    
        console.log('User ' + member.user.username + ' has joined the server!')
        console.log(member)
    
        var role = member.guild.roles.find('name', '👾JUGADORES');
        member.addRole(role)
});
client.login('Mzg0MTAwMjM0Nzc2ODA1Mzg5.DPuiZA.0amBoGlRIJ_oKcefZwkU7dmwpac');