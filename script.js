let userinput;

document.getElementById("check").onclick = function(){
    userinput = document.getElementById("matching").value;
    if(userinput==='おはよう'){
        console.log('Correct answer!')
        document.getElementById('message').innerHTML = 'إجابة صحيحة!'
        document.getElementById('matching').classList.remove('wrong')
        document.getElementById('matching').classList.add('correct')
        document.getElementById('matching').setAttribute( "disabled", "true" );
        
    }else{
        console.log('Try again')
        document.getElementById('message').innerHTML = '..حاول مرة أخرى'
        document.getElementById('matching').classList.add('wrong')
    }
    
}

