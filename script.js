document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const mini = document.getElementById('mini');
  const resultEl = document.getElementById('result');
  const keys = document.querySelectorAll('.key');

  let expr = ''; // expression string

  function updateUI(){
    display.value = expr || '0';
    mini.textContent = expr ? expr : '';
    updateRealtimeResult();
  }

  // Evaluate safely: allow only 0-9 + - * / ( ) . characters
  function safeEval(s){
    try{
      // sanitize
      const sanitized = s.replace(/[^\d+\-*/().]/g, '');
      // avoid trailing operator
      if(/^[+\-*/.]/.test(sanitized)) return null;
      const value = Function(`"use strict"; return (${sanitized})`)();
      if(typeof value === 'number' && isFinite(value)) return value;
      return null;
    }catch(e){ return null; }
  }

  function updateRealtimeResult(){
    const val = safeEval(expr);
    resultEl.textContent = (val !== null) ? '=' + val : '';
  }

  function append(ch){
    // simple prevention: no two operators in a row (except minus after operator for negative numbers)
    if(/^[+\-*/]$/.test(ch)){
      if(expr === '') {
        // allow minus as first char
        if(ch !== '-') return;
      } else {
        // replace last operator with new one (except allow minus after operator)
        if(/[+\-*/]$/.test(expr) && ch !== '-') {
          expr = expr.slice(0, -1) + ch;
          updateUI(); return;
        }
      }
    }
    // prevent multiple dots in same number chunk
    if(ch === '.'){
      const parts = expr.split(/[+\-*/()]/);
      const last = parts[parts.length - 1];
      if(last.includes('.')) return;
    }
    expr += ch;
    updateUI();
  }

  function backspace(){
    expr = expr.slice(0, -1);
    updateUI();
  }

  function clearAll(){
    expr = '';
    updateUI();
  }

  function calculate(){
    const val = safeEval(expr);
    if(val === null) {
      resultEl.textContent = 'Error';
      return;
    }
    expr = String(val);
    updateUI();
    resultEl.textContent = '';
  }

  keys.forEach(k => {
    k.addEventListener('click', () => {
      if(k.dataset.number) append(k.dataset.number);
      else if(k.dataset.action){
        const a = k.dataset.action;
        if(a === 'clear') clearAll();
        else if(a === 'back') backspace();
        else if(a === 'equals') calculate();
        else if(a === 'op') {
          append(k.textContent.trim());
        }
      }
    });
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    const key = e.key;
    if((/^[0-9]$/.test(key)) || key === '.') { append(key); e.preventDefault(); }
    else if(['+','-','*','/','(',')'].includes(key)){ append(key); e.preventDefault(); }
    else if(key === 'Enter' || key === '='){ calculate(); e.preventDefault(); }
    else if(key === 'Backspace'){ backspace(); e.preventDefault(); }
    else if(key === 'Escape'){ clearAll(); e.preventDefault(); }
  });

  updateUI();
});
