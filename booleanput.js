// Booleanput PRO v2 - Extension TurboWarp
class Booleanput {
  constructor() {
    this.c1 = '#5CB1D6'; this.c2 = '#47A8D1'; this.c3 = '#2E8EB8';
    this._hooked = false; this._queueRecolor = false;
    this.hookWorkspaceRetry(0);
  }
  hookWorkspaceRetry(attempt) {
    try {
      const ws = Blockly?.getMainWorkspace?.();
      if (!ws) {
        if (attempt < 20) setTimeout(() => this.hookWorkspaceRetry(attempt+1), 500);
        return;
      }
      if (this._hooked) return;
      ws.addChangeListener(() => {
        if (this._queueRecolor) return;
        this._queueRecolor = true;
        requestAnimationFrame(() => { this._queueRecolor = false; this.recolor(); });
      });
      this._hooked = true; this.recolor();
    } catch(e) { setTimeout(() => this.hookWorkspaceRetry(attempt+1), 500); }
  }
  getInfo() {
    return {
      id: 'booleanput', name: 'Booleanput',
      color1: this.c1, color2: this.c2, color3: this.c3,
      blocks: [{ opcode: 'bool', blockType: 'Boolean', text: 'a booleano [INPUT]', arguments: { INPUT: { type: 'string', defaultValue: '' } } }]
    };
  }
  bool(args) { return Scratch.Cast.toBoolean(args.INPUT); }
  isLight(c){
    if(!c) return false;
    let r,g,b;
    if(c.startsWith('rgb')){ [r,g,b]=c.match(/\d+/g).map(Number); }
    else { let h=c.replace('#',''); if(h.length==3)h=h.split('').map(x=>x+x).join(''); r=parseInt(h.substr(0,2),16); g=parseInt(h.substr(2,2),16); b=parseInt(h.substr(4,2),16); }
    return !isNaN(r) && (0.299*r+0.587*g+0.114*b)>190;
  }
  recolor(){
    const ws=Blockly.getMainWorkspace(); if(!ws)return;
    ws.getAllBlocks(false).filter(b=>b.type=='booleanput_bool').forEach(b=>{
      const inp=b.getInputTargetBlock('INPUT'); const svg=b.getSvgRoot();
      if(!inp||inp.isShadow()){
        b.setColour(this.c1); b.setColourSecondary(this.c2); b.setColourTertiary(this.c3);
        svg?.querySelectorAll('text.blocklyText').forEach(t=>t.style.fill='#FFF'); return;
      }
      const col=inp.getColour();
      b.setColour(col); b.setColourSecondary(inp.getColourSecondary()); b.setColourTertiary(inp.getColourTertiary());
      svg?.querySelectorAll('text.blocklyText').forEach(t=>t.style.fill=this.isLight(col)?'#000':'#FFF');
    });
  }
}
Scratch.extensions.register(new Booleanput());
