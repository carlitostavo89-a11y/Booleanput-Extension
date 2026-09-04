// Booleanput PRO v2 - Compatible con la VM de TurboWarp
(function(Scratch) {
  'use strict';

  class Booleanput {
    constructor() {
      this.c1 = '#5CB1D6';
      this.c2 = '#47A8D1';
      this.c3 = '#2E8EB8';
    }

    getInfo() {
      return {
        id: 'booleanput',
        name: 'Booleanput',
        color1: this.c1,
        color2: this.c2,
        color3: this.c3,
        blocks: [
          {
            opcode: 'bool',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'a booleano [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          }
        ]
      };
    }

    bool(args) {
      return Scratch.Cast.toBoolean(args.INPUT);
    }
  }

  Scratch.extensions.register(new Booleanput());
})(Scratch);
