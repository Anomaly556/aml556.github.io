class sb-time {
  constructor() {}
  
  getInfo() {
    return {
      id: 'sb-time',
      name: 'Scratch Time',
      
      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',
      
      blocks: [
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'dateNow500',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current dateNow500'
        },
        {
          opcode: 'dateNow100',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current dateNow100'
        },
        {
          opcode: 'dateNow50',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current dateNow50'
        },
        {
          opcode: 'dateNow10',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current dateNow10'
        }
      ]
    }
  }
  
  currentMillisecond() {
  return Date.now() % 1000;
  }

  dateNow500() {
  return Date.now() % 500;
  }

  dateNow100() {
  return Date.now() % 100;
  }

  dateNow50() {
  return Date.now() % 50;
  }

  dateNow10() {
  return Date.now() % 10;
  }
  
}

Scratch.extensions.register(new sb-time());
