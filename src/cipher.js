const cipher = {
    encode: function encode(offset, mensagem) {
      let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let count = mensagem.length;
      let result = ""
      for(var i=0; i< count ;i++){
        let codWord = mensagem.charAt(i)
        //  console.log(codWord)
        let lugaralfa = alfabeto.indexOf(codWord)
        // console.log(lugaralfa)
        let descover = (lugaralfa + Number(offset))%26
        // console.log(descover)
        let wordCode = alfabeto.charAt(descover)
        // console.log(wordCode)
        result += wordCode
      } 
      return result
    }
    ,decode: function decode (offset, mensagem){
      let alfabeto = "ZYXWUVTSRQPONMLKJIHGFEDCBA";
       let count = mensagem.length;
       let result = ""
     for(var i=0; i< count ;i++){
        let codWord = mensagem.charAt(i)
        //  console.log(codWord)
        let lugaralfa = alfabeto.indexOf(codWord)
        // console.log(lugaralfa)
         let descover = (lugaralfa + Number(offset))%26
         // console.log(descover)
         let wordCode = alfabeto.charAt(descover)
         // console.log(wordCode)
         result += wordCode
       }
       return result
    }

    

};

export default cipher;
