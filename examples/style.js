import anim from 'css-animation';
import React from 'react';
import ReactDOM from 'react-dom';

const style = `
.box {
  background:red;
  width:100px;
  height:100px;
}
`;

let show = true;

function toggle() {
  const t = document.getElementById('t');
  const b = document.getElementById('b');
  b.disabled = true;
  t.style.visibility = '';
  t.style.opacity = show ? 1 : 0;
  anim.setTransition(t, 'opacity 2s ease-in');
  anim.style(t, (show ? {
    opacity: 0,
  } : {
    opacity: 1,
  }), () => {
    t.style.visibility = show ? '' : 'hidden';
    b.disabled = false;
    anim.setTransition(t, '');
  });
  show = !show;
}

ReactDOM.render(<div>
  <style dangerouslySetInnerHTML={{ __html: style }}></style>
  <div className="box" id="t"/>
  <button onClick={toggle} id="b">toggle</button>
</div>, document.getElementById('__react-content'));
