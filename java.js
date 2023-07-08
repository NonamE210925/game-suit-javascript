var tanya = true;
while(tanya){
//menangkap pilhan player
var player = prompt ('pilih : gajah, semut, orang');

//menangkap pilihan komputer
//membangkitkat bilangan rendem
var com = Math.random();

if (com < 0.34) {
    com = 'orang'; 
} else if(com >= 0.34 && com < 0.80){
    com = 'gajah';
}else{
    com = 'semut';
}
console.log(com);

var hasil = '';
//membuat rules 
if (player == com ) {
    hasil = 'Seri!!';
} else if(player == 'orang'){
// if (com == 'gajah' ) {
//     hasil = 'Kalah';
// } else {
//     hasil = 'Menang';
// }
hasil = (com == 'gajah') ? 'Kalah' : 'Menang';    
}else if(player == 'gajah'){
    // if (com == 'semut') {
    //     hasil = 'menang';
    // } else {
    //     hasil = 'kalah';
    // }
hasil = (com == 'semut') ? 'Kalah' : 'Menang';
}else if(player == 'semut'){
hasil = (com == 'orang') ? 'Kalah' : 'Menang';
}else{
    hasil = 'Memasukan pilihan yang salah';
}


//tampilkan hasilnya
alert('Kamu memilih : ' + player + ' dan komputer memilih: ' + com + '\nMaka Hasilnya adalah :' + hasil);
tanya = confirm('Mau main lagi?');
}
alert('Terimakasih telah bermain.')


