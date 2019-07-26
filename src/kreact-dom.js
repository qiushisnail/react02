import { initVnode } from './kvdom'

function render(vnode, contaniner) {
  // contaniner.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>` // 缩进2格
  contaniner.appendChild(initVnode(vnode))
}

export default { render }