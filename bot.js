
(async () => {    
  const Discord = require("discord.js");
  const Database = require("easy-json-database");
  const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const s4d = {
      Discord,
      database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
      joiningMember: null,
      reply: null,
      tokenInvalid: false,
      tokenError: null,
      checkMessageExists() {
          if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
          if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
      }
  };
  s4d.client = new s4d.Discord.Client({
      intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
      partials: ["REACTION"]
  });

  await s4d.client.login('OTc5NTE3MDIyNzM4MTk4NjE4.GR8VEy.XrVZxQyv1D0gYWaFwz7Z_VsxrjTpJItga4bdQo').catch((e) => {
      s4d.tokenInvalid = true;
      s4d.tokenError = e;
  });

  s4d.client.on('messageCreate', async (s4dmessage) => {
      if ((s4dmessage.channel) == s4d.client.channels.cache.find((channel) => channel.name === 'database')) {
          if (s4d.database.has(String(((((s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.cache.get((s4dmessage.content)) || await (s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.fetch((s4dmessage.content)))).user.username)))) {
              s4d.database.delete(String(((((s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.cache.get((s4dmessage.content)) || await (s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.fetch((s4dmessage.content)))).user.username)));
              s4d.database.add(String(((s4dmessage.member).user.username)), parseInt(1));
              (s4dmessage.member).roles.add((Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === 'Master Emerald')));
              (((s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.cache.get((s4dmessage.content)) || await (s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.fetch((s4dmessage.content)))).roles.remove((Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === 'Master Emerald')));
              s4dmessage.channel.send(String('You successfuly stole the Master Emerald!'));
          }
      }

  });

  s4d.client.on('messageCreate', async (s4dmessage) => {
      if ((s4dmessage.content) == 'lol') {
          if (((s4d.client.guilds.cache.find((guild) => guild.name === 'Sonic Robo Blast 2')).members.cache.find((m) => m.user.username === 'Bobcat')) == (s4dmessage.member)) {
              s4d.database.add(String(((s4dmessage.member).user.username)), parseInt(1));
              (s4dmessage.member).roles.add((Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === 'Master Emerald')));
          }
      }

  });


  return s4d;
})();
            