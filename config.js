const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVW4+qSBj8L/2qcxRQAZNJVhxUBFEEFd1sNg3dQMvV5iI48b9v0DmZedhzdvaNNHR1dVV9xTtIUpJjFTdg/A4ySipY4PaxaDIMxkAqPQ9T0AUIFhCMwXSS346uUK1sSeGbqGP0mPX2XHv7upTUJBldbs1S8jmnTtxXcO+CrHQi4v4GkJnXeqyZyBUC+6RnHaazjGa8ajbzrcrjSDzZkmyFs7RnKK/g3iJCQkniy1mAY0xhpOJmAwn9Hn2o4wlWi55fV3ohU6FmtSrpWNdw5XpRdfMW8mFmxQhPdvL36M9Omumc1FlHUFyxida83UG5OWEm1k5czDBZvGV2ojuKH7lP+jnxE4wUhJOCFM23dZ+/bXaLpeWTwT70d6yLieBr1bTczBc1E228+JCr/GbuEO74PeJnI3HEiWpHsSYOskPBLvFRnk+FyOJk2dnVw2xhru3JTbSvX4lv6M+shP9H97mqHcPFjc7mG1ntib4VuOsyRst1hhTf8YRsCfemMLP1/jfp75boRNbMzBjVWO4vERsMz5aHtoO8OWu+LGnhqb/WTWj0V5/0YVHS37F0DSxs6E6nx8PuwC25Q0JEwiSKV0DpoKW5b2lsgA0rt6ERKJ0svTrbjMQbaVSykcv51fV2ZTyNj1TmYlV4xzdHRIzXx41C3CgIjJl7F1Dsk7ygsCBp8lgbDLsAosrELsXFQ15QBZHfWZ03hxUzGB0CI2Iy43DR0dTP5qKTlTth0WvmbLw2j6+gCzKaujjPMVqQvEhps8J5Dn2cg/Gff3VBguviaVx7HMd0gUdoXuySMotSiH66+vMldN20TAqzSdxp+4ApGPc/l3FRkMTPWx3LBFI3IBWeBrDIwdiDUY7vXYBwRVzc4gH9xhtWMF1t4YvS8Je5nRt/R9eWcpAmz0/wiOVHzNB58YTR4GXgMPhFGLnoheFFThAH/NBDLOgC8jEz7Z5fWhjsjnTko23Saxg+XZXiaLA9BxxzQteHDU/tMcUIjAta4i5woBuWmZWGOPkNbk+IHLJx9P1G1P3r+iSNete1cK3e3PAL7tNTMH7/7Klpilo8biFw+9V+BrogfkSQtDcXB/xoyIocw/JjZvhH/uPa6giz7EeCixb2Q/N2A8IFJFHedrBmo0sZSvJG8y70Op9PXH8y9Sfg06OfYX+GKSs5xrR6WiWnKhydSaeqhQuOT0LNRU0T2jd/9tbXNE5nr6//AtK2tDKd7EW7OlNjCyV8WkzZpUxttHFmGmb2zNyYziRFju21haTc1GeLWmrCEdNzzsHi5jnxUFc3HJ6alSabdOefkSNMJq/tac+sfD3MrHqc5PQZxVyHWmxAPY+pNuffhlGtHC/HpUVphjv1HilLvxNfV9C4XqTwFDtD7VAxk9LQ6vNp5+2VoOAu1ZYJzpl39p9j+KiB6KN+yWNA3j+S5RH8aLMEtg79hzdfM96/d79AfNTjL3IkQacQd2Gv4Wt1GpfpoKKCpyZZ7K3Q0M2zmTCQDHHaiDeUg/v9ry7IIlh4KY3bv1eCaEoQ6III5sXkc0wtEuO8gHEGxgzP8cyAZXn2/g9s4VIW3AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "POORNA NIKESALA",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "POORNA NIKESALA",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

