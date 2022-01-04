// membuat variabel untuk latihan 5.1
let myNumber = 16;
let myString = "Hello";
let myBoolean = true;
const phi = 3.14;
// menampilkan informasi ke console
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber);
window.alert('Angka favorit saya adalah : ' + myNumber);
window.alert(`Angka favorit saya adalah : ${myNumber}`);

//Buat variabel untuk latihan 5.2 Operasi sederhana aritmatika
let x = 8;
let y = 4;
console.log(x, y);//menampilkan 12, 2
console.log('x + y =', x + y);//menampilkan x+y=14
console.log('x - y =', x - y);//menampilkan x-y=10
console.log('x * y =', x * y);//menampilkan x*y=24
console.log('x / y =', x / y);//menampilkan x/y=6
console.log('x % y =', x % y);//menampilkan x%y=0
console.log('x++ =', x++);//menampilkan x++=12
console.log('++x =', ++x);//menampilkan ++x=14
console.log('x-- =', x--);//menampilkan x--=14
console.log('--x =', --x);//menampilkan --x=12

//Buat variable untuk latihan 5.3 Operasi sederhana Operator Perbandingan
let a = 8;
let b = 4;
console.log(a, b);//menampilkan 8, 4
console.log('a > b =', a > b);//menampilkan a > b = true
console.log('a < b =', a < b);//menampilkan a < b = false
console.log('a >= b =', a >= b);//menampilkan a >= b = true
console.log('a <= b =', a <= b);//menampilkan a <= b = false
console.log('a == b =', a == b);//menampilkan a == b = false
console.log('a != b =', a != b);//menampilkan a !=b = true
console.log('a === b =', a === b);//menampilkan a === b = false
console.log('a !== b =', a !== b);//menampilkan a !== b = true

//Latihan 5.4. Melakukan operasi sederhana dengan operator logika
console.log('true && true =', true && true);//menampilkan true && true = true
console.log('true && false =', true && false);//menampilkan true && false = false
console.log('false && true =', false && true);//menampilkan false && true = false
console.log('false && false =', false && false);//menampilkan false && false = false
console.log('true || true =', true || true);//menampilkan true || true = true
console.log('true || false =', true || false);//menampilkan true || false = true
console.log('false || true =', false || true);//menampilkan false || true = true
console.log('false || false =', false || false);//menampilkan false || false = false
console.log('!true =', !true);//menampilkan !true = false
console.log('!false =', !false);//menampilkan !false = true

//Membuat fungsi sederhana latihan 5.5
function LuasPersegi(sisi){
    let LuasPersegi = sisi * sisi; //Rumus luas Persegi
    return LuasPersegi;
}console.log('Luas Persegi = ',LuasPersegi(6));// Luas Persegi = 36

function LuasSegitiga(a,t){
    let LuasSegitiga = 0.5 * a * t;//Rumus Luas Segitiga
    return LuasSegitiga;
}console.log('Luas Segitiga = ', LuasSegitiga(5,4)); // Luas Segitiga = 10

function VolumeBalok(p,l,t){
    let VolumeBalok = p * l * t;//Rumus Volume pada Balok
    return VolumeBalok;
}console.log('Volume Balok = ', VolumeBalok(4,5,6)); // Volume Balok = 120 

//Latihan 5.6 Bermain dengan Array
var buah = ["Alpukat", "Jeruk", "Mangga", "Pisang"];
console.log(buah[0]); //menampilkan Alpukat
console.log(buah[1]); //menampilkan Jeruk
console.log(buah[2]); //menampilkan Mangga
console.log(buah[3]); //menampilkan Pisang
buah[1] = "Apel"; //mengganti Jeruk menjadi Apel
console.log(buah); //index 1 telah berganti Apel
buah.push("Pepaya"); //menambah Pepaya di akhir Array
console.log(buah); //mengecek perubahan atau menampilkan isi array
buah.pop(); //melihat dan menghapus item dari Array
console.log(buah); //mengecek perubahan atau menampilkan isi array
console.log('Panjang Array = ', buah.length); //menghitung panjang Array
buah.unshift("Anggur"); //menambah Anggur pada awal Array
console.log(buah); //mengecek perubahan atau menampilkan isi array
buah.shift(); //menampilkan dan menghapus item awal dari array
console.log(buah); //mengecek perubahan atau menampilkan isi array
console.log(buah.sort()); //mengurutkan Array
console.log(buah.reverse()); //membalikkan urutan Array tersebut

//Latihan 5.7 Bermain dengan Objek
let profile = {
    NamaDepan : "Gyoni",
    NamaBelakang : "Darvia",
    Alamat : "Rengat",
    Kontak : "082288971340",
    Pekerjaan : "Mahasiswa",
    NamaLengkap : function(){ // Fungsi yang berisi Nama Depan + Nama Belakang
        return this.NamaDepan + " " + this.NamaBelakang; // mengembalikan nilainya
    }
}
console.log(profile.NamaDepan); // menampilkan nama depan
console.log(profile.NamaBelakang); // menampilkan nama belakang
console.log(profile.Alamat); // menampilkan alamat
console.log(profile.Kontak); // menampilkan kontak
console.log(profile.Pekerjaan); // menampilkan pekerjaan 
console.log(profile.NamaLengkap()); // menampilkan nama lengkap

console.log(profile["NamaDepan"]); // menampilkan nama depan
console.log(profile["NamaBelakang"]); // menampilkan nama belakang
console.log(profile["Alamat"]); // menampilkan alamat
console.log(profile["Kontak"]); // menampilkan kontak
console.log(profile["Pekerjaan"]); // menampilkan pekerjaan
console.log(profile["NamaLengkap"]()); // menampilkan nama lengkap 