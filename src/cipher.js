const cipher = {
  encode: function encode(offset, mensagem) {
    let result = "";
    if (offset == "" || offset == null || mensagem == 0 || mensagem == "") {
      throw new TypeError();
    } else {
      for (let i = 0; i < mensagem.length; i++) {
        let codWord = mensagem.toUpperCase().charCodeAt(i);
        if (codWord != " ") {
          let encode = String.fromCharCode(((codWord -65 + Number(offset)) % 26) + 65);
          result += encode;
        } else {
          result += " ";
        }
      }
      return result;
    }
  },
  decode: function decode(offset, mensagem) {
    let result = "";
    if (offset == "" || offset == null || mensagem == 0 || mensagem == "") {
      throw new TypeError();
    } else {
      for (let i = 0; i < mensagem.length; i++) {
        let codWord = mensagem.toUpperCase().charCodeAt(i);
        if (codWord != " ") {
          let encode = String.fromCharCode(((codWord -65 - Number(offset)) % 26) + 65);
          result += encode;
        } else {
          result += " ";
        }
      }
      return result;
    }
  },
};

export default cipher;
