

      
    var Question=document.getElementById('questions');
    var Result=document.getElementById('results');
    var inpbox=document.getElementById(' inputs');
    var oddeven=document.getElementById('btn-q1');
    var clearBtn=document.getElementById('clear');
    var reverseBtn=document.getElementById('reverse');
    var FindMax=document.getElementById('Fmax');
    var Fact=document.getElementById('Fact');
    var swap=document.getElementById('swap');
    var FindArea=document.getElementById('FindArea');
    var multiply=document.getElementById('mul');
    var divide=document.getElementById('di');
        Result.style='margin-left:600px;'
      

        function clr(){
          Result.innerHTML='';
         }
       

        
   

 function anshelp1(){
  reverseBtn.style='display:none; margin-top:10px;';
  clearBtn.style='display:block; margin-top:10px;';
  oddeven.style='display:block;';
   document.getElementById('res').style='display:block;'; 
   Question.innerHTML = ' <center>  <h2 style="padding-top:150px; color:blue">enter your value please</h2> <br>  <input type="text" id="int"><center>';

 }
 function anshelp2(){
  reverseBtn.style='display:block; margin-top:10px;';
  clearBtn.style='display:block; margin-top:10px;';
  oddeven.style='display:none;';
   document.getElementById('res').style='display:block;'; 
   Question.innerHTML = ' <center>  <h2 style="padding-top:150px; color:blue">enter your value please</h2> <br>  <input type="text" id="int"><center>';
  
 }

 function anshelp3(){
  FindMax.style='display:block; margin-top:10px;';
  oddeven.style='display:none;';
  reverseBtn.style='display:none;';
  clearBtn.style='display:block; margin-top:10px;margin-bottom:8px';
   document.getElementById('res').style='display:block;'; 
      Question.style='display:none';
 }
 function anshelp4(){
  Fact.style='display:block; margin-top:10px';
  FindMax.style='display:none; margin-top:10px';
  oddeven.style='display:none;';
  reverseBtn.style='display:none;';
  clearBtn.style='display:block; margin-top:10px; margin-bottom:8px ';
   document.getElementById('res').style='display:block;'; 
   Question.innerHTML = ' <center>  <h2 style="padding-top:150px; color:blue">enter your value please</h2> <br>  <input type="text" id="int"><center>';
 }

 function anshelp5(){
  swap.style='display:block';
  FindMax.style='display:none';
  Fact.style='display:none';
  oddeven.style='display:none;';
  reverseBtn.style='display:none;';
  clearBtn.style='display:block; margin-top:10px; margin-bottom:8px';
   document.getElementById('res').style='display:block;'; 
   Question.innerHTML = ' <center>  <h2 style="padding-top:150px; color:blue">enter your value please</h2> <br> A: <input type="text" placeholder="enter a" id="int"> <br><br> B:  <input type="text" placeholder="enter value b" id="int2"><center>';
 }

 function anshelp6(){
  FindArea.style.display='block';
  swap.style.display='none';
  FindMax.style='display:none';
  Fact.style='display:none';
  oddeven.style='display:none;';
  reverseBtn.style='display:none;';
  clearBtn.style='display:block; margin-top:10px;margin-bottom:8px';
   document.getElementById('res').style='display:block;'; 
   Question.innerHTML = ' <center>  <h2 style="padding-top:150px; color:blue">enter your value please</h2> <br> B: <input type="text" placeholder="enter base" id="int"> <br><br> H:  <input type="text" placeholder="enter hight" id="int2"><center>';
 }

 function anshelp7(){
  multiply.style='display:block; margin-bottom:8px';
  divide.style.display='block';
  FindArea.style.display='none';
  swap.style.display='none';
  FindMax.style='display:none';
  Fact.style='display:none';
  oddeven.style='display:none;';
  reverseBtn.style='display:none;';
  clearBtn.style='display:block; margin-top:10px;margin-bottom:8px';
   document.getElementById('res').style='display:block;'; 
   Question.innerHTML = ' <center>  <h2 style="padding-top:150px; color:blue">enter your value please</h2> <br> A: <input type="text" placeholder="enter A" id="int"> <br><br> B:  <input type="text" placeholder="enter B" id="int2"><center>';
 }


 

   //  Q1. Write a JavaScript for loop that iterates from 0 to n. For each
//     iteration, it checks if the current number is odd or even, and displays
//      a message on the screen.

function q1() {
  var input= document.getElementById('int').value;
  var flag=0;
  for(var i=0;i<=input;i++){
     if(i%2==0){
       Result.innerHTML+=`<pre id="${flag}">${i} is even</pre>`
       flag++;
     }
     else{
       Result.innerHTML+=`<pre id="${flag}">${i} is odd</pre>`
       flag++;
     }
 }
    setTimeout(function(){
     var input= document.getElementById('int').value='';
    },1000); 
}
 

 function q2(){
   var input= document.getElementById('int').value;
   let l=parseInt(input.length);
   for(let i=l-1;i>=0;i--){
  
    Result.innerHTML+=` <span>${input.at(i)}</span> `;
    
  }
  setTimeout(function(){
     document.getElementById('int').value='';
   },1000);
 }

             
 function q3(){
  const arr=[];
   let length= parseInt(prompt("enter array size"));
  for(let i=0;i<length;i++){
    arr[i]= parseInt(prompt("enter value on array"));
  }
  let max=0;
  for(let i=0;i<arr.length;i++){
    Result.innerHTML+=` <span>${arr[i]},</span> `;
     if(max<arr[i]){
      max=arr[i];
  }
   
 }
 Result.innerHTML+=` <h1>${max}</h1> `;
}

function q4(){
  var input= document.getElementById('int').value;
  let l=parseInt(input);
  let num=parseInt(input);
  for(let i=1;i<l;i++){
   num=num*i
  }
  Result.innerHTML=` <h1>${num}</h1> `;
}

function q5(){
  var input= document.getElementById('int').value;
  var input2 = document.getElementById('int2').value;
  let a=parseInt(input);
  let b=parseInt(input2);
  let c=a;
  a=b;
  b=c;

  document.getElementById('s').innerHTML=` <p>value of A :<b>${a} </b>and value of B: <b> ${b}</b></p> `;
}

// area = 0.5 × b × h

function q6(){
  var input= document.getElementById('int').value;
  var input2 = document.getElementById('int2').value;
  let B=parseInt(input);
  let H=parseInt(input2);
  let area = (0.5 )*( B * H);
  Result.innerHTML=` <h3>${area} </h3> `;
  
}

function q7(){
  var input= document.getElementById('int').value;
  var input2 = document.getElementById('int2').value;
  let a=parseInt(input);
  let b=parseInt(input2);
  let result = a*b;
  // Result.innerHTML=` <h3>${result} </h3> `;
  document.getElementById('s').innerHTML=result;
 
  
}

function q7d(){
  var input= document.getElementById('int').value;
  var input2 = document.getElementById('int2').value;
  let a=parseInt(input);
  let b=parseInt(input2);
  let result = a/b;
  document.getElementById('s').innerHTML=result;
  
}


 
 

 