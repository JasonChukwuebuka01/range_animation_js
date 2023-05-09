window.onload=()=>{


 let containerWidth=document.getElementById("containerW");

 let containerOut=document.getElementById("containerOut");

 let container=document.getElementById("container");

 let box=document.getElementById("box");

 let boxTwo=document.getElementById("box2");

 //(1);

 let speedXrange=document.getElementById("speedXrange");

 let speedYrange=document.getElementById("speedYrange");

 let outputX=document.getElementById("outputX");

 let outputY=document.getElementById("outputY");

 //(2);

 let speedXrange2=document.getElementById("speedXrange2");

 let speedYrange2=document.getElementById("speedYrange2");

 let outputX2=document.getElementById("outputX2");

 let outputY2=document.getElementById("outputY2");

 

 //(3);

 let select=document.getElementById("sector");

 let body= document.getElementsByTagName("body")[0];

 let button= document.getElementById("button");

 let h1=document.getElementById("h1");

 

 let x=0, y=0; //position

 let vx=1;

 let vy=1; // directions

 let speedX=1;

 let speedY =1;

 let contain =200;

 const boxS= 50;

 

 let speedX2 = 1;

 let speedY2 =1;

 let vx2 =-1;

 let vy2=1;

 let x2=150;

 let y2=0;

 

 

 

 //1.0

 speedXrange.addEventListener("input",()=>{

    outputX.value= parseInt(speedXrange.value);  

     speedX =outputX.value;

 });//End of speedXrange event function;

 

 

 //2.0 

   speedYrange.addEventListener("input",()=>{

     outputY.value= parseInt(speedYrange.value);  

     speedY =outputY.value;

 });//End of speedYrange event function

   

 //3.0

 speedXrange2.addEventListener("input",()=>{

     outputX2.value=parseInt(speedXrange2.value);

     speedX2 =outputX2.value;

     });// End of speedXrange2 event function;

 

 //4.0

 speedYrange2.addEventListener("input",()=>{

     outputY2.value= parseInt(speedYrange2.value);  

     speedY2 =outputY2.value;

 });//End of speedYrange2 event function;

   

 //5.0

 containerWidth.addEventListener("input",()=>{

   containerOut.value=parseInt(containerWidth.value);

     contain= containerOut.value;    

     container.style.width= contain+"px";

 });//End of containerWidth event function;

 

//CASE 1: (Animating box 1);

 let move=()=>{

     x+=(speedX * vx);

     y+=(speedY *vy);

     

     if(x >= contain -boxS){

         vx*=-1;

         

     }else if(x<=0){

         vx*=-1;

     };

     

     if(y >=150){

         vy*=-1;

     }else if(y <=0){

         vy*=-1;

     };

     

box.style.left=x+"px";

box.style.top=y+"px";

box.innerHTML=`X1:${x}px

               Y1: ${y}px`;

         

     }//End.

    setInterval(move,30);// move function call;

     

     

     

//CASE 2:(Animating box 2);

 let moveTwo=()=>{

      x2+=(speedX2 * vx2)

     y2+=(speedY2 * vy2)

         

      if(x2 <= 0){

          vx2*=-1;

          boxTwo.style.backgroundColor=numGenerator();

          navigator.vibrate(100);

     }else if(x2 >=contain - boxS ){

         vx2*=-1;

         boxTwo.style.backgroundColor=numGenerator();

           navigator.vibrate(100);

      };

         

      if(y2 >= 150){

          vy2*=-1;

          boxTwo.style.backgroundColor=numGenerator();

          navigator.vibrate(100);

       }else if(y2 <=0){

           vy2*=-1;

           boxTwo.style.backgroundColor=numGenerator();

           navigator.vibrate(100);

         };

         

         boxTwo.style.left=x2+"px";

boxTwo.style.top=y2+"px";

boxTwo.innerHTML=`X2:${x2}px

              Y2: ${y2}px`;

          };//End case 2.

  setInterval (moveTwo,30);//moveTwo function call.

  

  

         

  

 // CASE 3:(function generating max. of 5 numbers for backgroundColors;)

     function numGenerator(){

           let arr=[];

           

        for(let i=0; i<4; i++){

         arr[i]= Math.floor(1+ Math.random()*9);

        }

        

     let joined= arr.join("");

     return numgen=`#ff${joined}`;   

     };//End case 3.

     

     

     

// CASE 4: (adding day/night Feature)

     let num=0;

     

     button.addEventListener("click",()=>{

          num+=1;

         

         if(num ===1){

             

           body.style.backgroundColor="black";  

           body.style.color="white";

           button.style.backgroundColor=numGenerator();

           button.innerHTML="🌜";

           container.style.backgroundColor="white";

           h1.style.visibility="visible";

           

         }else if( num === 2){

             body.style.backgroundColor="white";  

             body.style.color="black";

             button.innerHTML="🌝"

             button.style.backgroundColor ="white";

             container.style.backgroundColor="pink";

             num=0;

         };    

     });// End case 4.

     

                     

 };