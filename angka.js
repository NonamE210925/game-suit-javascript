
var no = 5;
while ( no >= 0) {
    

var p = prompt('Cari Angka 1-10  \nKamu memiliki ' + no + ' Kesempatan');

let min = 1;
    max = 10;
    com = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(com);
    var hasil = '' ;
if (p == com) {
    hasil = 'Jawaban anda benar';
} else if(p > com){
    hasil = 'Lebih rendah';
} else if(p < com){
    hasil = 'lebih tinggi';
}
if (p == com) {
    alert ('Selamat ' + hasil+ ' sisa kesempatan ' + no);
    break;
} else if(no == 0 && p > com || p < com ){
    alert ('Ayo sedik lagi!! \ncoba  :' + hasil);
}else if (no == 0) {
    confirm('kamu gagal\n mau coba lagi? \n Kesempatan akan pulih' +no)
}

no--;
}

