// Booleanput PACK - v2 marrón
(function(Scratch) {
  'use strict';
  class Booleanput {
    constructor() {
      // MARRÓN
      this.c1 = '#8B5E34';
      this.c2 = '#6F4B2A';
      this.c3 = '#5A3D22';
      this.hookWorkspaceRetry(0);
    }
    hookWorkspaceRetry(i) {
      try {
        const blocklyObj = typeof Blockly !== 'undefined' ? Blockly : (window.Blockly || null);
        const ws = blocklyObj?.getMainWorkspace?.();
        if (!ws) {
          if (i < 30) setTimeout(() => this.hookWorkspaceRetry(i + 1), 300);
          return;
        }
        ws.addChangeListener(() => requestAnimationFrame(() => this.recolor()));
        this.recolor();
      } catch(e) {
        setTimeout(() => this.hookWorkspaceRetry(i + 1), 300);
      }
    }
    getInfo() {
      return {
        id: 'booleanput',
        name: 'Booleanput',
        color1: this.c1, color2: this.c2, color3: this.c3,
        blocks: [
          {
            opcode: 'bool',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'a booleano [INPUT]',
            arguments: { INPUT: { type: Scratch.ArgumentType.STRING, defaultValue: '' } }
          },
          {
            opcode: 'text',
            blockType: Scratch.BlockType.REPORTER,
            text: 'a texto [INPUT]',
            arguments: { INPUT: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false } }
          },
          {
            opcode: 'number',
            blockType: Scratch.BlockType.REPORTER,
            text: 'a número [INPUT]',
            arguments: { INPUT: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false } }
          }
        ]
      };
    }
    bool(args){ return args.INPUT; }
    text(args){ return args.INPUT; }
    number(args){ return args.INPUT; }

    isLight(c){
      if (!c) return false;
      let r,g,b;
      if (c.startsWith('rgb')){ [r,g,b] = c.match(/\d+/g).map(Number); }
      else { let h=c.replace('#',''); if(h.length===3)h=h.split('').map(x=>x+x).join(''); r=parseInt(h.substr(0,2),16); g=parseInt(h.substr(2,2),16); b=parseInt(h.substr(4,2),16); }
      return !isNaN(r) && (0.299*r+0.587*g+0.114*b) > 190;
    }
    recolor(){
      const blocklyObj = typeof Blockly !== 'undefined' ? Blockly : (window.Blockly || null);
      const ws = blocklyObj?.getMainWorkspace?.();
      if (!ws) return;
      ws.getAllBlocks(false).filter(b => b.type.startsWith('booleanput_')).forEach(b => {
        const inputName = Object.keys(b.arguments_ || {INPUT:1})[0] || 'INPUT';
        const inp = b.getInputTargetBlock(inputName);
        const svg = b.getSvgRoot();
        if (!inp || inp.isShadow()) {
          b.setColour(this.c1);
          if (b.setColourSecondary) b.setColourSecondary(this.c2);
          if (b.setColourTertiary) b.setColourTertiary(this.c3);
          svg?.querySelectorAll('text.blocklyText').forEach(t => t.style.fill = '#FFF');
          return;
        }
        const col = inp.getColour();
        b.setColour(col);
        if (b.setColourSecondary) b.setColourSecondary(inp.getColourSecondary());
        if (b.setColourTertiary) b.setColourTertiary(inp.getColourTertiary());
        svg?.querySelectorAll('text.blocklyText').forEach(t => t.style.fill = this.isLight(col)? '#000' : '#FFF');
      });
    }
  }
  Scratch.extensions.register(new Booleanput());
})(Scratch);
