import Cookies from 'js-cookie';

Cookies.set('token', 'токен', { expires: 7, path: '/' });

const token = Cookies.get('token');
console.log(token); 