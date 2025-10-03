    document.getElementById("getGradeButton").addEventListener("click",()=>{
    const mark=parseInt(document.getElementById("marks").value.trim());
    const result=document.getElementById("gradeResult");
    if(!mark){
    result.textContent="Enter any marks to get the grades.";
    return;
    }
    else if(!(mark>=0 && mark<=100)){
    result.textContent="The marks should be between 0-100.";
    return;
    }
    else{
    if(mark>=90){
    result.textContent=`For marks ${mark}, your grade is: A`;
    }
    else if(mark>=80 && mark<=89){
    result.textContent=`For marks ${mark}, your grade is: B`;
    }
    else if(mark>=70 && mark<=79){
    result.textContent=`For marks ${mark}, your grade is: C`;
    }
    else if(mark>=60 && mark<=69){
    result.textContent=`For marks ${mark}, your grade is: D`;
    }
    else{
    result.textContent=`For marks ${mark}, your grade is: F`;
    }
    }
    })