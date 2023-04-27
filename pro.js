
    let ranNum1 = Math.floor(Math.random()*6)+1;
    let ranNum2 = Math.floor(Math.random()*6)+1;
    
    //image generation
    let img1 = "dice"+ranNum1+".png";
    let img2 = "dice"+ranNum2+".png";

    //source generation
    let img1Src = "images/"+img1;
    let img2Src = "images/"+img2;

    //changing the source of html img's to img1Src and img2Src
    document.querySelectorAll("img")[0].setAttribute("src",img1Src);
    document.querySelectorAll("img")[1].setAttribute("src",img2Src);

    if(ranNum1>ranNum2){
        document.querySelector("h1").innerHTML="Player 1 wins";
        
    }else if(ranNum2>ranNum1){
        document.querySelector("h1").innerHTML="Player 2 wins";
        
    }else{
        document.querySelector("h1").innerHTML="Tie";
    }


