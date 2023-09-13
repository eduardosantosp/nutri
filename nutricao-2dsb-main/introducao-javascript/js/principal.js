    //-------------------------------------------------------------------------------------
    //Daqui pra baixo começa o js do site

    //Busca no site pelo titulo e armazena ele dentro da variável 
    let titulo = document.querySelector(".titulo");
    //Mostra no devtools e conteudo de texto da variável titulo para fins de teste
    console.log(titulo.textContent);
    //Altera o conteudo da variável titulo para o texto desejado
    titulo.textContent = "Fica Grande Nutrição"

    //Mudanças na tabela
    //Armazena na variável paciente os dados do primeiro paciente
    let paciente = document.querySelector("#primeiro-paciente");
    //Mostra no console o valor da varável paciente
    console.log(paciente);

    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    console.log(imc);

    let tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;

    //Validação de dados
    let pesoEhValido = true;
    let alturaEhValida = true;


    if(peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso Inválido"
        pesoEhValido = false;
    }
    if(altura <= 0 || altura >= 3){
        tdImc.textContent = "Altura Inválida"
        alturaEhValida = false;
    }

if(pesoEhValido && alturaEhValida){

let imc = peso / (altura*altura);
}
    