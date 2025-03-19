const url = require('url');
const adress = 'https://meusite.com.br/catalog?produtos=cadeira';
const parsedUrl = new_url.URL(adress);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams.get('produtos'));
#console.log(parsedUrl.searchParams.get('produtos'));