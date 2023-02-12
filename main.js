const pecas = document.querySelectorAll('.numero');
const soma = document.querySelectorAll('.botao_soma');
const subtracao = document.querySelectorAll('.botao_subtracao');
const total = document.querySelector('#preco');

let soma1 = soma[0],soma2 = soma[1];
let sub1 = subtracao[0],sub2 = subtracao[1];
let valor1=1,valor2=1;


soma1.addEventListener('click',function(){
    valor1++;
    pecas[0].innerHTML = valor1;
    
    let preco = (valor1 * 54.99) + (valor2 * 74.99) + 19.00;
    total.innerHTML=`$ ${preco}`;
});
soma2.addEventListener('click',function(){
    valor2++;
    pecas[1].innerHTML=valor2;

    let preco = (valor1 * 54.99) + (valor2 * 74.99) + 19.00;
    total.innerHTML=`$ ${preco}`;
});

sub1.addEventListener('click',function(){
    valor1--;

    if(valor1 < 1){
        valor1 = 1;
    }

    pecas[0].innerHTML = valor1;

    let preco = (valor1 * 54.99) + (valor2 * 74.99) + 19.00;
    total.innerHTML=`$ ${preco}`;
});
sub2.addEventListener('click',function(){
    valor2--;

    if(valor2 < 1){
        valor2 = 1;
    }

    pecas[1].innerHTML=valor2;

    let preco = (valor1 * 54.99) + (valor2 * 74.99) + 19.00;
    total.innerHTML=`$ ${preco}`;
});



