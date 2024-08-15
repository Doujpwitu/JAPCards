const checkButtons = document.getElementsByClassName("check")
const entryFields = document.getElementsByClassName("entry")
const messageOnEntry = document.getElementsByClassName("message")
console.log(entryFields)
const entryQandA = {
    entryCard_1:
        {
        Question:"おはよう",
        id:0,
        userAnswer:entryFields[0],
        messageBox:messageOnEntry[0]
        }
    ,
    entryCard_2:
    {
        Question:"にほん",
        id:1,
        userAnswer:entryFields[1],
        messageBox:messageOnEntry[1]
    }
    
};

console.log(entryQandA)
function onCheckClick(){
    const parentID = $(this).parent().attr('id');
    const domParent = document.getElementById(parentID)
    console.log(parentID)
    let userinput = entryQandA[parentID].userAnswer.value;
    console.log(userinput)
    console.log(entryQandA[parentID].Question)
    if(userinput.trim()===entryQandA[parentID].Question){
        console.log('Correct answer!')
        entryQandA[parentID].messageBox.innerHTML = 'إجابة صحيحة!'
        entryQandA[parentID].userAnswer.classList.remove('wrong')
        entryQandA[parentID].userAnswer.classList.add('correct')
        entryQandA[parentID].userAnswer.setAttribute( "disabled", "true" );
        
    }else{
        console.log('Try again')
        entryQandA[parentID].messageBox.innerHTML = '..حاول مرة أخرى'
        entryQandA[parentID].userAnswer.classList.add('wrong')
    }
    
}

for(let i = 0; i < checkButtons.length; i++){
    checkButtons[i]
    .addEventListener("click",onCheckClick);
}