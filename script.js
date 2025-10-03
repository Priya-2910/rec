document.getElementById("addMaterialBtn").addEventListener("click"
    ,()=>{
    const name=document.getElementById("materialName").value.trim();
    const qty=document.getElementById("quantity").value.trim();
    const sn=document.getElementById("supplierName").value.trim();
    const cpi=document.getElementById("costPerUnit").value.trim();
    const errMsg=document.getElementById("error-message");
    const cat=document.getElementById("category");
    const catVal=cat.options[cat.selectedIndex].text;
    if(!name || !catVal || !sn || !cpi || !qty){
    errMsg.textContent="Please fill out all fields!";
    errMsg.style.opacity=1;
    return;
    }
    else{
    errMsg.style.opacity=0;
    const table=document.getElementById("materialTable");
    const tbody=document.querySelector("#materialTable tbody");
    const trow=document.createElement("tr");
    const tp=document.getElementById("totalProducts");
    const eItem=document.getElementById("mostExpensive");
    let arr=[name,catVal,qty,sn,cpi];
    for(let i=0;i<5;i++){
    let tdata=document.createElement("td");
    if(i==4){
    let c=parseFloat(arr[i]).toFixed(2);
    tdata.textContent=
    `RS ${c}`
    ;
    }
    else{
    tdata.textContent=arr[i];
    }
    trow.appendChild(tdata);
    }
    trow.classList.add("trow");
    tbody.appendChild(trow);
    let n=table.rows.length-1;
    tp.textContent=n;
    const data=getTableData(tbody);
    eItem.textContent=
    `${data.name} (R S ${data.cost})`
    ;
    document.getElementsByTagName("form")[0].reset();
    }
    })
    const getTableData=(tbody)=>{
    let mc=0;
    let ei="";
    for(let row of tbody.rows){
    const name=row.cells[0].textContent.trim();
    const txt=row.cells[4].textContent.trim();
    const cost=parseFloat(txt.replace(/[^\d.]/g,
    "")).toFixed(2);
    if(cost>mc){
    mc=cost;
    ei=name;
    }
    }
    return {name:ei,cost:mc}
    }