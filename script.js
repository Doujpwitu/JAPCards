let userinput;

document.getElementById("check").onclick = function(){
    userinput = document.getElementById("matching").value;
    if(userinput==='おはよう'){
        console.log('Correct answer!')
    }else{
        console.log('Try again')
    }
}

