const checkButtons = document.getElementsByClassName("check")
const entryFields = document.getElementsByClassName("entry")
const messageOnEntry = document.getElementsByClassName("message")
const entryQandA = {
    entryCard_1:
        {
        Question:"おはよう",
        userAnswer:entryFields[0],
        messageBox:messageOnEntry[0]
        }
    ,
    entryCard_2:
    {
        Question:"にほん",
        userAnswer:entryFields[1],
        messageBox:messageOnEntry[1]
    },
    entryCard_3:
    {
        Question:"日本",
        userAnswer:entryFields[2],
        messageBox:messageOnEntry[2]
    }
    
};

function onCheckClick(){
    const parentID = $(this).parent().attr('id');
    const domParent = document.getElementById(parentID)
    let userinput = entryQandA[parentID].userAnswer.value;
    if(userinput.trim()===entryQandA[parentID].Question){
        entryQandA[parentID].messageBox.innerHTML = 'إجابة صحيحة!'
        entryQandA[parentID].userAnswer.classList.remove('wrong')
        entryQandA[parentID].userAnswer.classList.add('correct')
        entryQandA[parentID].userAnswer.setAttribute( "disabled", "true" );
        
    }else{
        entryQandA[parentID].messageBox.innerHTML = '..حاول مرة أخرى'
        entryQandA[parentID].userAnswer.classList.add('wrong')
    }
    
}
for(let i = 0; i < checkButtons.length; i++){
    checkButtons[i]
    .addEventListener("click",onCheckClick);
}