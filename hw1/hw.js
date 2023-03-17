
var imgbutton = document.querySelector(".buttom");
var imgleaf = document.querySelector('.leaf');
var imgapple= document.querySelector('.apple');
var imgmegaphone = document.querySelector('.megaphone');
var imgcash = document.querySelector('.cash');
var imgfried = document.querySelector('.fried');
var imgcoffee = document.querySelector('.coffee');
var imgtool = document.querySelector('.tool');
var mark = document.getElementById('back');
// var handmoneysrc = imghand.getAttribute('src');
var imghand = document.getElementById('handmoney');

 function clickbuttom (event) {
    // alert("buttonsrc");
    let buttonsrc = imgbutton.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', buttonsrc);
        imgpig.setAttribute('src',"picture/水桶大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/水桶半個背景.png");
        imgbg2.setAttribute('src', "picture/水桶半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}



function clickleaf (event) {
    // alert("buttonsrc");
    let leafsrc = imgleaf.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', leafsrc);
        imghand.setAttribute('heigh','150');
        imgpig.setAttribute('src',"picture/盆栽大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/盆栽半個背景.png");
        imgbg2.setAttribute('src', "picture/盆栽半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}

function clickapple (event) {
    // alert("buttonsrc");
    let applesrc = imgapple.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', applesrc);
        imgpig.setAttribute('src',"picture/蘋果大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/蘋果半個背景.png");
        imgbg2.setAttribute('src', "picture/蘋果半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}

function clickmegaphone (event) {
    // alert("buttonsrc");
    let megaphonesrc = imgmegaphone.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', megaphonesrc);
        imgpig.setAttribute('src',"picture/大聲公大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/大聲公半個背景.png");
        imgbg2.setAttribute('src', "picture/大聲公半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}

function clickcash (event) {
    // alert("buttonsrc");
    // let cashsrc = imghand2.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', "picture/紙鈔_直.png");
        imgpig.setAttribute('src',"picture/鈔票大豬.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/錢幣背景.png");
        imgbg2.setAttribute('src', "picture/錢幣背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}
 
function clickfried (event) {
    // alert("buttonsrc");
    let friedsrc = imgfried.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', friedsrc);
        imgpig.setAttribute('src',"picture/薯條大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/薯條半個背景.png");
        imgbg2.setAttribute('src', "picture/薯條半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}

function clickcoffee (event) {
    // alert("buttonsrc");
    let coffeesrc = imgcoffee.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
  
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', coffeesrc);
        imgpig.setAttribute('src',"picture/咖啡豆大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/咖啡豆半個背景.png");
        imgbg2.setAttribute('src', "picture/咖啡豆半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}

function clicktool (event) {
    // alert("buttonsrc");
    let toolsrc = imgtool.getAttribute('src');
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money');
    var imgbg2 = document.getElementById('money2');
    var flag = true;
    if(flag==true){
        // alert(buttonsrc);
        imghand.setAttribute('src', toolsrc);
        imgpig.setAttribute('src',"picture/望遠鏡大豬_工作區域 1.png");
        imgpig.setAttribute('width',"500");
        imgpig.setAttribute('heigh','450');
        imgbg.setAttribute('src', "picture/望遠鏡半個背景.png");
        imgbg2.setAttribute('src', "picture/望遠鏡半個背景.png");
        flag = false;
    }
    else{
        flag = true;
    }
    flag = true;
}

function moveout(){
    var imgpig = document.getElementById('pig');
    var imgbg = document.getElementById('money'); 
    imghand.setAttribute('src','picture/紙鈔_直.png');
    imgpig.setAttribute('src',"picture/初始小豬.png");
    imgpig.setAttribute('width','450');
    imgpig.setAttribute('heigh','200');
    imgbg.setAttribute('src','picture/錢幣背景.png');

}

function clickpic(event){
    
    var hand = document.getElementById('hand');
    var hand2 = document.getElementById('hand2');
    var item = document.getElementById('handmoney');
    
    hand.classList.remove('get');
    hand2.classList.remove('get');
    item.classList.remove('get');

//    在hand hand2 和item中增加putin class，讓動畫可以觸發
    hand.classList.add('putin');
    hand2.classList.add('putin');
    item.classList.add('putin');
    setTimeout(moveagain,5000);
    Turninto();    
    }
function moveagain(){
    var hand = document.getElementById('hand');
    var hand2 = document.getElementById('hand2');
    var item = document.getElementById('handmoney');
    
    hand.classList.add('get');
    hand2.classList.add('get');
    item.classList.add('get');


    hand.classList.remove('putin');
    hand2.classList.remove('putin');
    item.classList.remove('putin');

}
function Turninto(){
    var div2 = document.getElementById('pic2');
    var div3 = document.getElementById('pic3');
    var div1 = document.getElementById('pic1');
    
    div2.setAttribute('style','display:none');  
    div3.setAttribute('style','display:none');
    div1.style.height = "700px"
    document.getElementById('money2').setAttribute('style',"none");
    // div1.setAttribute('height','900px');
    setTimeout(change,4000);

}
function change(){
    document.getElementById('hand').setAttribute('style','visibility:hidden');
    document.getElementById('hand2').setAttribute('style','visibility:hidden');
    document.getElementById('handmoney').setAttribute('style','visibility:hidden');
    var pig = document.getElementById('pig');
    pig.setAttribute('src','picture/變身動畫.gif');
    pig.setAttribute('width','350');
    pig.setAttribute("heigh",'150');
    setTimeout(end,3000);

}

function end(){
    var endpig = document.getElementById('pig');
    var homemark = document.getElementById('back');
    var bg = document.getElementById('money');
    var bg2 = document.getElementById('money2');
    var word = document.getElementById('backword');
    word.setAttribute('style','none');
    pig.setAttribute('src','picture/變身後圖片.png');
    pig.setAttribute('width','400');
    pig.setAttribute('heigh','500');
    homemark.setAttribute('style','none');
    bg.setAttribute('style','visibility:hidden');
    bg2.setAttribute('style','visibility:hidden');

}

function homepage(){
    alert('it works');
    var div1 = document.getElementById('pic1');
    var div2 = document.getElementById('pic2');
    var div3 = document.getElementById('pic3');
    var bg = document.getElementById('money');
    var homemark = document.getElementById('back');
    var pig = document.getElementById('pig');
    var hand = document.getElementById('hand');
    var hand2 = document.getElementById('hand2');
    var handmoney = document.getElementById('handmoney');
    var word = document.getElementById('backword');

    div1.style.height = '400px';
    pig.setAttribute('src','picture/初始小豬.png');
    pig.setAttribute('width','450px');
    pig.setAttribute('heigh','250px');
    hand.setAttribute('style','none');
    hand2.setAttribute('style','none');
    handmoney.setAttribute('style','none');
    handmoney.setAttribute('src','picture/紙鈔_直.png');
    div2.setAttribute('style','none');
    div3.setAttribute('style','none');
    bg.setAttribute('style','none');
    bg.setAttribute('src','picture/錢幣背景.png');
    word.setAttribute('style','visibility:hidden');
    homemark.setAttribute('style','visibility:hidden');


}



imgbutton.addEventListener('mouseenter',clickbuttom);
imgleaf.addEventListener('mouseenter',clickleaf);
imgapple.addEventListener('mouseenter',clickapple);
imgmegaphone.addEventListener('mouseenter',clickmegaphone);
imgcash.addEventListener('mouseenter',clickcash);
imgfried.addEventListener('mouseenter',clickfried);
imgcoffee.addEventListener('mouseenter',clickcoffee);
imgtool.addEventListener('mouseenter',clicktool);


// imgbutton.addEventListener('mouseleave',moveout);
// imgleaf.addEventListener('mouseleave',moveout);
// imgapple.addEventListener('mouseleave',moveout);
// imgmegaphone.addEventListener('mouseleave',moveout);
// imgcash.addEventListener('mouseleave',moveout);
// imgfried.addEventListener('mouseleave',moveout);
// imgcoffee.addEventListener('mouseleave',moveout);
// imgtool.addEventListener('mouseleave',moveout);

imgbutton.addEventListener('click',clickpic);
imgleaf.addEventListener('click',clickpic);
imgapple.addEventListener('click',clickpic);
imgmegaphone.addEventListener('click',clickpic);
imgcash.addEventListener('click',clickpic);
imgfried.addEventListener('click',clickpic);
imgcoffee.addEventListener('click',clickpic);
imgtool.addEventListener('click',clickpic);
mark.addEventListener('click',homepage);