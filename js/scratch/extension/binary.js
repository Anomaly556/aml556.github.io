class binary {
  getInfo() {
    return {
      id: "binaryEx",
      name: "Binary Extension",
      description: "Fun with a Binary!",
      blocks: [
        {
          opcode: 'binToTxt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'binary [BIN] to Text',
          arguments: {
            BIN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '01000010 01101001 01101110 01100001 01110010 01111001'
            }
          }
        },
        {
          opcode: 'txtToBin',
          blockType: Scratch.BlockType.REPORTER,
          text: 'text [TEXT] to binary',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Binary'
            }
          }
        }
      ]
    }
  }
  binToTxt(args) {
    var binary = args.BIN.toString();

    return binary.split(" ").map((x) => x = String.fromCharCode(parseInt(x, 2))).join(" ")
  }
  txtToBin(args) {
    var text = args.TEXT.toString();

    return Array.from(text).map((each)=>each.charCodeAt(0).toString(2)).join(" ")
  }
}
Scratch.extensions.register(new binary());
