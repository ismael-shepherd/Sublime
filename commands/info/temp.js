//Here the command starts
module.exports = {
    //definition
    name: "reboot1", //the name of the command 
    category: "info", //the category this will be listed at, for the help cmd
    aliases: ["latency"], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "reboot1", //this is for the help command for EACH cmd
    description: "Bote tempete", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
        run: async (client, message, args) => message.channel.send("|| <@&764803693538443305>  || __** TEMPETE IMMINENTE **__ "),
    }