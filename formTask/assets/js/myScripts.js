// Variáveis dos Inpout
// Campos obrigatórios
let zipCode = $('#zipCode')
let adress = $('#adress')
let number = $('#number')
let district = $('#district')
let addressComplement = $('#addressComplement')
let city = $('#city')

// Campos não obrigatórios

let quantity = $('#quantity')
let value = $('#value')
let total = $('#total')

// Variável para limpar campos
let verified = false




function enviarDados() {

    verificarCampos(verified)

    /* 
        Ligação com back-end para ligar dados
    */


    

    return false

}


function verificarCampos() {
    verified = false

    // Verificando se campos estão corretos
    if (zipCode.val().length == 11 && adress.val().length > 3 && number.val().length >= 1 && addressComplement.val().length > 3
         && district.val().length > 3 && city.val().length > 3 && $('#uf').val() != '-') {

        verified = true

    } else {
        // Verificando quais campos estão com erros
        if (zipCode.val().length > 11 || zipCode.val().length < 11) {
            let inputErro = 'Preencha o campo CPF corretamente'

            alert(inputErro)

        } else if (adress.val().length < 3) {
            let inputErro = 'Preencha o campo Rua corretamente'

            alert(inputErro)

        } else if (number.val().length < 1) {
            let inputErro = 'Preencha o campo Número corretamente'

            alert(inputErro)

        } else if (addressComplement.val().length < 3) {
            let inputErro = 'Preencha o campo Complemento corretamente'

            alert(inputErro)

        } else if (district.val().length < 3) {
            let inputErro = 'Preencha o campo Bairro corretamente'

            alert(inputErro)

        } else if (city.val().length < 3) {
            let inputErro = 'Preencha o campo Município corretamente'

            alert(inputErro)

        } else if ($('#uf').val() == '-') {
            let inputErro = 'Preencha o campo UF corretamente'

            alert(inputErro)

        }
    }


    // Verificação para Zerar os campos 

    // console.log(verified); | Log para vizualição do valor da variável
    if (verified != false) {
        limparCampos()
        alert("Dados Enviados!")
    }


}

function limparCampos() {
    //limpando campos

    // Limpando Campos obrigatórios
    zipCode.val('')
    adress.val('')
    number.val('')
    district.val('')
    addressComplement.val('')
    city.val('')
    $('#uf').val('-')

    // Limpando Campos não obrigatórios
    $('#selectProducts').val('-')
    quantity.val('')
    value.val('')
    total.val('')


    // Limpando Campo de input File
    $('#file').val("")
    // Devolvendo o o texto da label
    $('#showFile').html('Clique para escolher o arquivo')



    
}

$(function () {
    // Mostrando arquivo selecionado no File


    $('#file').change(function () {
        let caminhoFile = $(this).val()

        // caminhoFile.split('\\')) *Faz o caminho do arquivo se tornar uma Array, Fazendo a mesma ficar amigavel para o usúario*
        // caminhoFile Log para vizualizar caminho
        // console.log(caminhoFile.split('')); Log para vizualizar Array

        $('#showFile').html('<b>Arquivo Selecionado: </b>' + caminhoFile.split('\\')[2])
        // Escondendo para usuário o tamanho máximo novamente
        $('#sizeFile').html('')

        //deixando o botão habilitado 
        $('.divBtnSend').css('transition', '7s').html('<button class="btnSend" onclick="enviarDados()">Enviar</button>')
        $('.btnSend').css('background', 'background: rgb(154, 0, 255)')
            .css('background', 'linear-gradient(90deg, rgba(154, 0, 255, 1) 15%, rgba(115, 0, 254, 1) 85%)')
        
    })
})


$('#file').bind('change', function (e) {
    var data = e.originalEvent.target.files[0];
    // console.log(data.size + " => tamanho Arquivo" + " | Tamanho disponível <= " + 6000 * 1000);

    if (data.size > 6000 * 1000) {
        // Validação de tamanho de arquivo

        let caminhoFile = $(this).val() // Variável do caminho do arquivo

        // caminhoFile.split('\\')) *Faz o caminho do arquivo se tornar uma Array, Fazendo a mesma ficar amigavel para o usúario*
        // caminhoFile Log para vizualizar caminho
        // console.log(caminhoFile.split('')); Log para vizualizar Array

        $('#showFile').html('Clique para escolher o arquivo')

        // Mostrando para usuário o tamanho máximo novamente
        $('#sizeFile').html(caminhoFile.split('\\')[2] + '<b><p>MÁXIMO 6 MB POR ENVIO</p></b>')
            .css('opacity', '1') // Transição suave do texto

        //desabilitando o botão habilitado 
        $('.divBtnSend').css('transition', '7s').html('<button class="btnSend">Enviar</button>')
        $('.btnSend').css('background', 'var(--blackLight)')

        document.getElementById('file').value() = "" // Zerando input File
    }
})