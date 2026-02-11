let a="0",b="",o="",d=x=>document.getElementById(x);

function appendNumber(n){
  let t=o?b:a;
  t=(t=="0"&&n!=".")?n:t+n;
  o?b=t:a=t;
  d("valueBox").value=t;
}

function setOperator(x){
  if(!a) return;
  o=x;b="";
  d("operatorBox").value=o;
  d("valueBox").value="0";
}

function calculate(){
  if(!o||!b) return;
  let r=eval(a+o+b);
  d("valueBox").value=r;
  a=r+"";b="";o="";
  d("operatorBox").value="";
}

function clearAll(){
  a="0";b="";o="";
  d("valueBox").value="0";
  d("operatorBox").value="";
}

function backspace(){
  let t=(o?b:a).slice(0,-1)||"0";
  o?b=t=="0"?"":t:a=t;
  d("valueBox").value=t;
}
let a="0",b="",o="",d=x=>document.getElementById(x);

function appendNumber(n){
  let t=o?b:a;
  t=(t=="0"&&n!=".")?n:t+n;
  o?b=t:a=t;
  d("valueBox").value=t;
}

function setOperator(x){
  if(!a) return;
  o=x;b="";
  d("operatorBox").value=o;
  d("valueBox").value="0";
}

function calculate(){
  if(!o||!b) return;
  let r=eval(a+o+b);
  d("valueBox").value=r;
  a=r+"";b="";o="";
  d("operatorBox").value="";
}

function clearAll(){
  a="0";b="";o="";
  d("valueBox").value="0";
  d("operatorBox").value="";
}

function backspace(){
  let t=(o?b:a).slice(0,-1)||"0";
  o?b=t=="0"?"":t:a=t;
  d("valueBox").value=t;
}
