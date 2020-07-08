// This is a JavaScript file

$(document).on("click","#buscar",function(){
  $.ajax({
      type:"get", // como eu vou enviar
      url:"https://viacep.com.br/ws/"+$("#cep").val()+"/json/", // para onde enviar
      success: function(data){// se der certo
            var conteudo;
            conteudo = "<p><strong>Logradouro:"+data.logradouro+"</strong></p>";
            conteudo += "<p><strong>Bairro:"+data.bairro+"</strong></p>";
            conteudo += "<p><strong>Localidade:"+data.localidade+"</strong></p>";
            conteudo += "<p><strong>Estado:"+data.uf+"</strong></p>";

            $("#dados").html(conteudo);             
      },
      error: function(){//se der errado
        alert("Deu Erro!");
      } 
  });
});