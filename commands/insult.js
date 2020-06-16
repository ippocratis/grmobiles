module.exports = (bot) => {

    //thats a funny command that gives back a random insult as a reply . code snipset kangded from @TwitFace
    
    const chars = {
        '&quot;': `"`,
        '&gt;': `>`,
        '&lt;': `<`,
        '&amp;': `&`,
    };
    
    const charsRegex = new RegExp(`(${Object.keys(chars).join(`|`)})`, `g`);
    const request = require(`request-promise`);
    const decode = text => text.replace(charsRegex, (_, char) => chars[char]);
    const getInsult = async () => decode(await request(`https://evilinsult.com/generate_insult.php?lang=en`));
    
    bot.command(`insult`, async ctx => {
        const insult = await getInsult();
        await ctx.reply(insult);
    });

}

