import {token} from './user.js' 
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
token = prompt('Enter Bot Token : ') ; 
client.login(token);
module.exports = client ;
