let result = document.getElementsByClassName('price');
let result2 = document.getElementsByClassName('sauces');
let result3 = document.getElementsByClassName('topings');
let drag = document.querySelector(".table");
let source = document.getElementById("sauceClassic");
let num  = document.querySelector("#cina")
let a 
let r = false;
a = 0
let b 
let ll = /[0-9]/g;
let gg = /[^0-9\@\.]/gi;
let yy = /[^a-z\s]/gi
let imel
b = 0
let ing = document.querySelector('.ingridients')
let i 
let sauceBBQ = document.getElementById("sauceBBQ");
let sauceRikotta = document.getElementById("sauceRikotta");
let moc1 = document.getElementById("moc1");
let moc2 = document.getElementById("moc2");
let moc3 = document.getElementById("moc3");
let telya = document.getElementById("telya");
let vetch1 = document.getElementById("vetch1");
let vetch2 = document.getElementById("sauceBBQ");
let num3 
let inp = document.querySelector("#inputt")
let rr = document.getElementById("banner")
let namem = document.querySelector("#name"),
 tel = document.querySelector("#tel"),iml = document.querySelector("#email")
num.innerText = "";
let pizza = document.getElementById("pizza");





pizza.addEventListener("click", (e) => {
    if (e.target.id == "small"){
        num.innerText = "350 грн";
    }
    if (e.target.id == "mid"){
        num.innerText = "450 грн";
    }
    if (e.target.id == "big"){
        num.innerText = "600 грн";
    }
})
        
       window.onload = function (){
        let num2  = document.querySelector("#sous")
        let num3 =  document.querySelector("#toping")
       ing.addEventListener("mouseover", (e) => {
            i = ""
            console.log(e.target.id)

            i = e.target.id
       }

       )
        

       drag.addEventListener ("dragover",(evt) =>  {
        
            
            if (evt.preventDefault) evt.preventDefault();
            return false;
        }, false);

        
        drag.addEventListener("drop", function (evt)   {

            
            if (evt.preventDefault) evt.preventDefault();
            if (evt.stopPropagation) evt.stopPropagation();

        
            //let id = evt.dataTransfer.getData("Text"); // получаем информации которая передавалась через операцию drag & drop 

            //let elem = document.getElementById(id);
            

         
           if(i == source.id ){ 
            
            let div = document.createElement("img");
            div.src ="Pizza_pictures/sous-klassicheskij_1557758736353.png"
            div.className = "img-element"
            
            this.appendChild(div);
            num2.innerText = `${b = (a + 50)} грн`
            
        
           
            
            
            

            return false;}
            if(i == sauceBBQ.id ){ 
            
                let div = document.createElement("img");
                div.src ="Pizza_pictures/sous-bbq_155679418013.png"
                div.className = "img-element"
                
                this.appendChild(div);
                num2.innerText = `${b = (a + 70)} грн`
                
            
               
                
                
                
    
                return false;}
            if(i == sauceRikotta.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/sous-rikotta_1556623391103.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num2.innerText = `${ b = (a + 100)} грн`
                    
                
                   
                    
                    
                    
        
                return false;}
                //Топінги ----->
            if(i == moc1.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/mocarela_1556623220308.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num3.innerText = `${b = (b + 25)} грн`
                    
                
                   
                    
                    
                    
        
                return false;}
            if(i == moc2.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/mocarela_1556785182818.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num3.innerText = `${b = (b + 120)} грн`
                   
                
                   
                    
                    
                    
        
                return false;}
            if(i == moc3.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/mocarela_1556785198489.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num3.innerText = `${ b = (b + 30)} грн`
                    console.log("ga")
                
                   
                    
                    
                    
        
                return false;}
            if(i == telya.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/telyatina_1556624025747.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num3.innerText = `${b = (b + 150)} грн`
                    console.log("ga")
                
                   
                    
                    
                    
        
                return false;}
            if(i == vetch1.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/vetchina.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num3.innerText = `${ b = (b + 20)} грн`
                    console.log("ga")
                
                   
                    
                    
                    
        
                return false;}
            if(i == vetch2.id ){ 
            
                    let div = document.createElement("img");
                    div.src ="Pizza_pictures/vetchina_1556623556129.png"
                    div.className = "img-element"
                    
                    this.appendChild(div);
                    num3.innerText = `${b = (b +1000)} грн`
                    console.log("ga")
                
                   
                    
                    
                    
        
                return false;}
        }, false);} 

        
       
        rr.addEventListener("click",(e)=> {
        let x = Math.round(1000 *Math.random(1,1800))

        let y = Math.round(100 *Math.random(1,900 )) 
        rr.style.bottom =`${y}px`
        rr.style.right = `${x}px`})
        function f() {
        if (tel.value[0] == "+" & ll.test(tel.value) == true & tel.value.lengh == 13) {
            r = true;
        }else if (r == false){
            alert ("Ведіть правильно номер : номер має бути з 13 символів , тільки цифри і + верший")
        }
        
        
        if(gg.test(iml.value) == true & yy.test(iml.value) == true){
            imel = true
        }else if (imel != true){
            alert ("Ведіть правильно почту")
            imel = false
        };
        console.log(r , imel)

        
    
    
    
    }





            
        
inp.addEventListener("click",(e) => {
f();
while(r === true & imel ===true ){
    namem.value = "";
    tel.value = "";
        iml.value = "";  
        alert("Відправлено");
r = false;
n = false;
imel = false;
}
    
}

    
   
    

)