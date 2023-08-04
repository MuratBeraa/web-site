const dic = {
    "a" : "5c",
    "b" : "45",
    "c" : "76",
    "ç" : "u6",
    "d" : "ş2",
    "e" : "i1",
    "f" : "3ğ",
    "g" : "99",
    "ğ" : "y7",
    "h" : "ı0",
    "ı" : "03",
    "i" : "jj",
    "j" : "11",
    "k" : "bg",
    "l" : "m3",
    "m" : "V-",
    "n" : "pr",
    "o" : "fd",
    "ö" : "ğa",
    "p" : "x5",
    "r" : "öl",
    "s" : "65",
    "ş" : "pi",
    "t" : "!T",
    "u" : "?a",
    "ü" : "ua",
    "v" : "61",
    "y" : "q9",
    "z" : "!.",
    " " : "||",
    "." : ")("
}

const dic_2 = {
    "5c": "a",
    "45": "b",
    "76": "c",
    "u6": "ç",
    "ş2" : "d",
    "i1" : "e",
    "3ğ" : "f",
    "99" : "g",
    "y7" : "ğ",
    "ı0" : "h",
    "03" : "ı",
    "jj" : "i",
    "11" : "j",
    "bg" : "k",
    "m3" : "l",
    "V-" : "m",
    "pr" : "n",
    "fd" : "o",
    "ğa" : "ö",
    "x5" : "p",
    "öl" : "r",
    "65" : "s",
    "pi" : "ş",
    "!T" : "t",
    "?a" : "u",
    "ua" : "ü",
    "61" : "v",
    "q9" : "y",
    "!." : "z",
    "||" : " ",
    ")(" : "."
}

const metin_inp = document.getElementById("metin");
const yolla_btn = document.getElementById("yolla-btn");
const soru_veri = document.getElementById("sifrele_cözümle_soru");
const paragraf  = document.getElementById("metin_bos_ise");


let metin = "";
let cevap = "";

function metini_al(events) {
    metin = events.target.value;
    console.log(metin);
}

function cevap_al(params) {
    cevap = params.target.value;
    console.log(cevap);
}

class Coder {
    constructor(dic) {
        this.dic = dic;
    }

    sifrele(metin) {
        const harfler = metin.split("");
        const uzunluk = metin.length;

        const liste = [];
        let sifre = "";

        for (let sayi = 0; sayi < uzunluk; sayi++) {
            const atilacak = harfler[sayi];
            liste.push(atilacak);
        }

        for (let sayi_2 = 0; sayi_2 < uzunluk; sayi_2++) {
            const atilacak_2 = liste[sayi_2];
            const cevap = this.dic[atilacak_2];
            sifre += cevap;
        }

        paragraf.innerHTML = `Mesaj Sifrelendi : ${sifre}`;
        console.log(sifre);
    }

    decoder(metin) {
        const liste_2 = [];
        let code = "";

        const long = metin.length;
        let num = 0;
        while (num != long) {
            const yollanacak = metin.slice(num, num + 2);
            liste_2.push(yollanacak);
            num = num + 2;
        }

        let num_2 = 0;
        while (num_2 != long / 2) {
            const elemanlar = liste_2[num_2];
            const basılacak = dic_2[elemanlar];
            code = code + basılacak;
            num_2 = num_2 + 1;
        }

        paragraf.innerHTML = `Mesaj Sifrelendi : ${code}`;
        console.log(code);
    }
}

const x = new Coder(dic);
const y = new Coder(dic_2);



function inp_sor(params) {
    params.preventDefault();
    let result = "";
    if (metin.length === 0 && cevap.length === 0) {
        result += `<p>Lütfen Bir Değer Girin!</p>`

        paragraf.innerHTML = result;
    }
    else if (metin.length !== 0) {
        paragraf.innerHTML = ""; 
        if (cevap === "1") {
            x.sifrele(metin)
        }
        else if (cevap === "2") {
            y.decoder(metin)
        }
    }
    else {
        paragraf.innerHTML = "Lütfen Geçerli Bir Değer Girin"
    }
}


metin_inp.addEventListener("change",metini_al);                   // Tıklandığında bir input oluşturup paragraf içersinide metin şifrelmek mi yoksa çözümlemke mi istiyorsun diye sor. Ardından input ile veriyi çek ve ibir if e sok. bu if tede (inp === "metin sifrele" || "1") {class.sifrele()}

soru_veri.addEventListener("change",cevap_al);

yolla_btn.addEventListener("click",inp_sor); 

