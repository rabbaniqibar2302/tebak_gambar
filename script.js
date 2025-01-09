let gambar = document.getElementsByTagName("img");
let input = document.getElementById("tebak");

function cek(num){
    gambar[num].style.opacity = "1";
}

function guess(){
    if(input.value == "qibar"){
        window.alert("YOU WINN!!");
        i = 0;
        while(i < 9){
            gambar[i].style.opacity = "1";
            i++;
        }
    }else{
        window.alert("YOU LOOSSEE");
        i = 0;
        while(i < 9){
            gambar[i].style.opacity = "0";
            i++;
        }
    }
}