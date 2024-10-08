function calcularResultado(){
   var n1, n2, n3, n4, mf = 0;

   n1 = parseFloat(document.getElementById('nota1').value);
   n2 = parseFloat(document.getElementById('nota2').value);
   n3 = parseFloat(document.getElementById('nota3').value);
   n4 = parseFloat(document.getElementById('nota4').value);

   mf =(n1+n2+n3+n4)/4;

   if(mf > 70){
    document.getElementById('Resultado').innerHTML ='Aprovado';
    XPathResult.style.background.color ='red'
   }
   else if (mf < 50){
    document.getElementById('Resultado').innerHTML = 'Reprovado';
     XPathResult.style.background.color ='green'
   }
   else{
    document.getElementById('Resultado').innerHTML = 'Recuperação';
     XPathResult.style.background.color ='yellow'
   }
}

function Limpar(){
    document.getElementById('nota1').value  = '';
    document.getElementById('nota2').value  = '';
    document.getElementById('nota3').value  = '';
    document.getElementById('nota4').value  = '';
    document.getElementById('Resultado').innerHTML= '';    
}