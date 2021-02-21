// npm init

const sleep = require('sleep');
const Discord = require('discord.js');
const client = new Discord.Client();

// TO-DO: Implement using environment variables in a .env file 
// require('dotenv').config();

// const TOKEN = process.env.TOKEN;
const TOKEN = 'example.client.token.here';

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase().includes('hi')) {
        msg.reply('ALL the Single Ladies!');
        msg.channel.send('(Put a Ring on It)')
        sleep.sleep(1);
        msg.channel.send('Now put your hands up, Up in the club, we just broke up, Im doing my own little thing, Decided to dip and now you wanna trip, Cause another brother noticed me');
    } else if (msg.content.toLowerCase().includes('hello')) {
        msg.reply('If I were a boy.........');
        msg.channel.send('If I were a boy');
        sleep.sleep(1);
        msg.channel.send('I think I could understand');
        sleep.sleep(1);
        msg.channel.send('How it feels to love a girl');
        sleep.sleep(1);
        msg.channel.send('I swear Id be a better man');
    } else {
        msg.reply('HALO HALO HALO');
        msg.reply('You had me at hello (Hello)');
        sleep.sleep(1);
        msg.reply('Hello (Hello)');
        sleep.sleep(1);
        msg.reply('Hello (Hello)');
    }
});

client.login(TOKEN);
