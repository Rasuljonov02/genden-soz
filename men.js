const main = document.querySelector("main");
const sozsoni = document.querySelector(".sozsoni");
const btn1 = document.querySelector(".btn1");
const orta = document.querySelector(".orta");
const surch = document.querySelector(".surch");
const btn2 = document.querySelector(".btn2");
const p = document.querySelector("p");
const sozniqidirish = document.querySelector(".sozniqidirish");
const btn3 = document.querySelector(".malumot");
const bor0 = document.querySelector(".bor0");

const bor = document.querySelector(".bor");
const yoq = document.querySelector(".yoq");
const list = document.querySelector("#malumotlist");
const section = document.querySelector("section");
const hato = document.querySelector(".hato");
const sozqi = document.querySelector(".sozqi");
const btn4 = document.querySelector(".btn4 ");

// Matn
let matn =
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quod, ducimus sed officia accusamus dolorem voluptatum animi saepe maiores obcaecati tenetur mollitia amet voluptas asperiores eius id suscipit quibusdam laborum quam cumque nam, adipisci eveniet ad. Recusandae quidem iste id dolore eum explicabo porro sit obcaecati cupiditate voluptas culpa atque numquam provident molestias ipsa illo, pariatur optio? Expedita nulla eos dolorem sapiente nostrum id reiciendis eveniet corrupti accusamus, facere aspernatur quidem quibusdam, quos ex. Et qui quis reprehenderit voluptate rerum. Magni assumenda vel dolor, ex cumque quae, ad eveniet dolores harum, quidem dolorum tempora et inventore vero aspernatur quibusdam debitis non. Fugiat tenetur aut mollitia accusantium rem quod tempore numquam vitae, dolore, iste saepe nobis ratione. Itaque eveniet iste distinctio! Consectetur rem libero aliquam eos quis nam ducimus maxime corporis, veritatis obcaecati placeat delectus odit voluptates impedit deleniti dolorem totam assumenda! Neque, consequatur pariatur? Quia rerum sunt quidem, sequi amet architecto aliquam corporis soluta quis ratione quae incidunt eos, similique placeat ut aspernatur velit quo temporibus perferendis et quibusdam delectus! Ipsam ex officia itaque modi eveniet fugit possimus numquam, deleniti quibusdam ut vel, non commodi aspernatur! Pariatur modi deserunt rerum dolor, consequatur at, molestias fugit in saepe blanditiis reprehenderit culpa ipsum temporibus maxime! Non voluptatibus est explicabo ea facere ab sapiente aliquam iusto? Optio, ab! Non atque nam alias, voluptatum amet, possimus quibusdam sapiente labore animi quo odit libero recusandae? Itaque explicabo saepe reprehenderit nisi quas provident, fugiat necessitatibus consectetur laboriosam, veritatis iure incidunt fuga repellendus voluptate quaerat nobis reiciendis molestias aut sapiente asperiores neque! Officiis ipsam nostrum quibusdam blanditiis vel quod facere molestias voluptas totam. Quia fuga deserunt minima, nesciunt expedita, nostrum id aut sed voluptatum illum sint nulla doloremque nobis tenetur ducimus hic dolor eligendi! Assumenda natus amet ut accusantium, reprehenderit voluptatum culpa laborum repellendus vel, fugit dolorem?";

// Matndan so'zlarni ajratib olib, ularni massivga o'tkazamiz
let sozlar = matn.split(" ");
btn1.addEventListener("click", function () {
	main.style.display = "none";
	orta.style.display = "flex";
	btn3.style.display = "none";
});

// sozlarni qidiradigan funchsiya
btn2.addEventListener("click", function () {
	surch.style.display = "inline";
	btn3.style.display = "inline";

	sozlarozi();
});

btn3.addEventListener("click", function () {
	let sozqii = sozqi.value;
	list.style.display = "flex";
	surch.style.display = "none";
	section.style.display = "none";
	btn3.style.display = "none";
	btn4.style.display = "flex";
	bor0.innerText = `Siz qidirgan soz: ${sozqii}`;
	bor.innerText = `Tushgan so'z bor: ${a}`;
	yoq.innerText = `Boshqa sozlar: ${b}`;
});

btn4.addEventListener("click", () => {
	location.reload();//  sayitni reflesh qilvoradi
});

let a = 0;
let b = 0;
function sozlarozi() {
	let q = sozsoni.value;

	let element = [];
	const qidir = sozqi.value;
	for (let i = 0; i < q; i++) {
		const soz = sozlar[i];
		if (soz.includes(qidir)) {
			element.push(`<mark>${sozlar[i]}</mark>`);
			a++;
		} else {
			element.push(sozlar[i]);
			b++;
		}
	}
	p.innerHTML = element.join(" "); // element massivini matnga aylantirib chiqaramiz

	// Topilgan va topilmagan so'zlar sonini konsolga chiqaramiz
	console.log(`Topilgan so'zlar soni: ${a}`);
	console.log(`Topilmagan so'zlar soni: ${b}`);
}
