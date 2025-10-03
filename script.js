document.getElementById("mark-progress").addEventListener("click"
    ,()=>{
    const dw=document.getElementById("chkWater");
    const de=document.getElementById("chkExercise");
    const rb=document.getElementById("chkReading");
    const sumTxt=document.getElementById("count");
    let n=0;
    if(dw.checked){
    n=n+1
    }
    if(de.checked){
    n=n+1
    }
    if(rb.checked){
    n=n+1
    }
    sumTxt.textContent=n;
    })
    document.getElementById("reset-progress").addEventListener("click"
    ,()=>{
    document.getElementsByTagName("form")[0].reset();
    const sumTxt=document.getElementById("count");
    let n=0;
    sumTxt.textContent=n;
    })