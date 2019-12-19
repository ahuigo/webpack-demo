import conf from './ref.json';

export default function hello() {
	console.log(conf)
	console.log(process.env.APP_ENV)
}
