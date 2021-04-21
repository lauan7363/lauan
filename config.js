const ownerNumber = ["557998295668@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557998295668' 
// mude para seu numero

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo. Escreva ${prefix}menu para lista de comandos do bot`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `SAIU E NEM MAMOU OS ADMS AFF ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Seja bem-vindo ao menu do bot aproveite`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyporn = 'api key do imgbb, crie sua conta e pegue a key'
// sua key do imgbb para ativar o antiporn

const cr = '†-🌹𝐿𝐴𝑈𝐴𝑁-𝐷𝑂𝑀𝐼𝑁𝐴🌹-†\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Seu número esta bloqueado, ou seja não ouvindo você 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra membro comum, o ban estar próximo*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu é adm ent n vou te banir por mandar um tipo de mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho com antiporn ativado, ja sabe né...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu é adm ent n vou te banir por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra Membro comum, O ban está próximo...'
// mensagem de ban no antilink

const adminmsglink = 'Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso esta na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

const notregister = `*Comando não registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const gostoso = 'Lauan e muito 😎😎'
const gays = 'Lauan e Luciano casal de gay mais bem unidos do mundo'
const aninha = 'A a mais braba'
const Aninha = 'O trabequinho do grupo'
const lili = 'sla'
const Lili = 'sla'
const williane = 'sla'
const Williane = 'sla'
const lauan = 'O mais gostoso do grupo'
const Lauan = 'O mais gostoso do grupo'
const lulu = 'O gayzinho de lauan'
const luciano = 'O gayzinho de lauan'
const Luciano = 'O gayzinho de lauan'
const yasmin = 'A mais carente do grupo'
const Yasmim = 'A mais carente do grupo'
const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://bityli.com/23MGj'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado 😡'
const cadebot = 'Me chamou onii-chan 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Vai te foder, jogador de ff, comprador de pack do pézinho'
const botputa = 'Senhora sua mãe 😡'
const botgay = 'Falou o manja rola 😡'
const botviado = 'Falou o manja rola 😡'
const numbotfeio = 'senhora sua mãe 😡'
const botviado = 'Falou o manja rola 😡'
// KEYS

const apiTobz = 'key'
// pra pegar a key do Tobz va até o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo número proprietário! ❌',
        admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557998295668:+55 79 9829-5668\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyporn = apikeyporn
exports.linkbotlindo = linkbotlindo 
exports.gostoso = gostoso
exports.gays = gays
exports.aninha = aninha
exports.Aninha = Aninha
exports.lili = lili
exports.Lili = Lili
exports.williane = williane
exports.Williane = Williane
exports.lauan = lauan
exports.Lauan = Lauan
exports.lulu = lulu
exports.luciano = luciano
exports.yasmim = yasmin
exports.Yasmin = Yasmin
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
