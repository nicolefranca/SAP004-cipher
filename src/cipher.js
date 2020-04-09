const cipher = {
    encode: function encode(offset, mensagem) {
      let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = ""
      let space = " "
      for(var i=0; i< mensagem.length ;i++){
        let codWord = mensagem.toUpperCase().charAt(i)
        //  console.log(codWord)
        if(codWord != " "){
          let lugaralfa = alfabeto.indexOf(codWord)
          // console.log(lugaralfa)
          let descover = (lugaralfa + Number(offset))%26
          // console.log(descover)
          let wordCode = alfabeto.charAt(descover)
          // console.log(wordCode)
          result += wordCode
        }else{
          result += space
          // console.log(result)
        }
      } 
      return result
    }
    ,decode: function decode (offset, mensagem){
      let alfabeto = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
       let result = ""
       let space = " "
     for(var i=0; i< mensagem.length ;i++){
        let codWord = mensagem.toUpperCase().charAt(i)
        if(codWord != " "){
          let lugaralfa = alfabeto.indexOf(codWord)
          let descover = (lugaralfa + Number(offset))%26
          let wordCode = alfabeto.charAt(descover)
          result += wordCode
        }else{
          result += space
        }
       }
       return result
    }
};

export default cipher;
