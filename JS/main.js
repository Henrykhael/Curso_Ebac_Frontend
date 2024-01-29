$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');
    
    $('#cep').mask('00000-000');

    $('form').on("keyup", function(){
        let nome = $('#nomeCompleto').val();

        if (nome.split(" ").length < 2){
            $('#nomeCompleto').addClass("incorreto");
        }else{
            $('#nomeCompleto').removeClass("incorreto");
        }
    })
})
