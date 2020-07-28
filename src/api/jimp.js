const jimp = require('jimp');

exports.imagemGen = async (nome = ' Fernando') => {
    let font = await jimp.loadFont(jimp.FONT_SANS_32_WHITE);
    let gumballfeliz = await jimp.read('C:/Users/Usuario/Desktop/Estudando/myproject/wikipotatobot/src/imgs/GUMBALLFELIZ.jpg');

    gumballfeliz.print(font, 20, 15, `Seja bem vindo(a), ${nome}!`).write('C:/Users/Usuario/Desktop/Estudando/myproject/wikipotatobot/src/imgs/testando.jpg');
}
