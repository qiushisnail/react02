import { createNode } from './kvdom'
function createElement(type, props, ...children) {
  props.children = children;
  delete props.__source;
  delete props.__self;

  let vtype;
  if (typeof type === 'string') {
    vtype = 1;
  } else if (typeof type === 'function') {
    if (type.isClassComponent) {
      // 类组件
      vtype = 2
    } else {
      vtype = 3; // 函数组件44
    }
  }
  return createNode(vtype, type, props)

}

// 实现Component 
export class Component {
  // 区分function和class组件
  static isClassComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState() {

  }

}
export default { createElement }