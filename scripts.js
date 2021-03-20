
var encrypt = document.getElementById('encrypt');
var decrypt = document.getElementById('decrypt');
encrypt.addEventListener('click',function(input,k){
    var input = document.getElementById('input').value;
    var k = document.getElementById('number').value;
    k = Number(k);
    var solve = "";
    for(var i =0; i <input.length;i++){
         var acciNumber = input[i].charCodeAt()
         if(acciNumber >=65 && acciNumber < 90){
             solve += String.fromCharCode(acciNumber + k);
             document.getElementById('input').value = solve;
         }  else if (acciNumber === 90){
             solve += String.fromCharCode(acciNumber - 26 + k);
             document.getElementById('input').value = solve;
         }
    }     
});
decrypt.addEventListener('click',function(input,k){
    var input = document.getElementById('input').value;
    var k = document.getElementById('number').value;
    k = Number(k);
    var solve = "";
    for(var i =0; i <input.length;i++){
         var acciNumber = input[i].charCodeAt()
         if(acciNumber > 66 && acciNumber < 90){
             solve += String.fromCharCode(acciNumber - k);
             document.getElementById('input').value = solve;
         }  else if (acciNumber === 66){
             solve += String.fromCharCode(acciNumber + 24);
             document.getElementById('input').value = solve;
         }
    }     
})


