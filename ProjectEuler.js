/* 
    i değişkeni, if yapısının içerisindeki koşulu sağlayıncaya kadar, 
    while dögüsünün içerisinde sürekli artarak devam edecek,
    if içerisindeki şartı sağlayan i değeri konsola yazdırılacak ve 
    break yapısı ile ilk değer bulunduktan sonra döngüden çıkılacaktır. 
*/

let i=1;
while(i>=1){
    if(i%5==0 && i%7==0 && i%16==0 && i%9==0 && i%11==0 && i%13==0 && i%17==0 && i%19==0){
        console.log(i);
        break;
    }
    i++;       
}

//cevap: 232792560