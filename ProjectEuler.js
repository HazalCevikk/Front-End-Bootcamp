    /*
    problemFive fonksiyonuna hangi sayıyı parametre olarak gönderirsek, 1 ile parametre sayı arasındaki
    tüm sayılara bölünebilen en küçük sayıyı bulur.
    */
function problemFive(n){
let times = 0;
let num=1;
  while(times < n){
    for(let i=1; i<=n; i++){ 
        if(num%i==0){ //num değişkeni tüm i değerlerine bölünecek sayı olana kadar times 0'a eşitlenir
            times++ 
        }else{     
            times=0;
            break;
        }
    }
    if(times==n){ //doğru sayıyı bulana kadar times n den küçük olacağı için num değişkeni her seferinde bir artar.
        console.log(num)
        break;
    }else{
        num++;
    }
  } 
}

problemFive(20);



