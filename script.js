document.getElementById("generateBtn").addEventListener("click",()=>{
    const maindiv=document.getElementsByClassName("mulClass")[0];
    const num=document.getElementById("number").value.trim();
    const start=document.getElementById("start").value.trim();
    const end=document.getElementById("end").value.trim();
    const errtxt=document.getElementById("errormessage");
    if(!num || !start || !end){
    errtxt.style.opacity=1;
    return;
    }
    else{
    errtxt.style.opacity=0;
    let i=parseInt(start);
    let j=parseInt(end);
    let n=parseInt(num);
    const tdiv=document.getElementById("table");
    tdiv.innerHTML="";
    const ptxt=document.createElement("p");
    ptxt.textContent=`Multiplication Table of ${n}`
    ptxt.style.fontWeight="bold";
    tdiv.appendChild(ptxt);
    for(let k=i;k<=j;k++){
    let mele=document.createElement("p");
    let res=n*k;
    mele.textContent=
    `${n} x ${k} = ${res}`
    ;
    tdiv.appendChild(mele);
    ;
    }
    }
    })