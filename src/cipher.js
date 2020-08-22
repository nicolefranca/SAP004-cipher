const cipher = {
  encode: function encode(offset, mensagem) {
    let result = "";
    // let space = " ";
    if (offset == "" || offset == null || mensagem == 0 || mensagem == "") {
      throw new TypeError();
    } else {
      for (let i = 0; i < mensagem.length; i++) {
        let codWord = mensagem.toUpperCase().charAt(i);
        if (codWord != " ") {
          let codWord = mensagem.charCodeAt(i);
          let encode = String.fromCharCode(((codWord - "A".charCodeAt() - offset) % 26) + "A".charCodeAt());
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
    // let space = " ";
    if (offset == "" || offset == null || mensagem == 0 || mensagem == "") {
      throw new TypeError();
    } else {
      for (let i = 0; i < mensagem.length; i++) {
        let codWord = mensagem.toUpperCase().charAt(i);
        if (codWord != " ") {
          let codWord = mensagem.charCodeAt(i);
          let encode = String.fromCharCode(((codWord - "Z".charCodeAt() - offset) % 26) + "Z".charCodeAt());
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
