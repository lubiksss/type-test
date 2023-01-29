import moment from 'moment';
import clipboardy from 'clipboardy';
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
clipboardy.writeSync('hello world');
