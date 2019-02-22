import React from 'react';

const background = 'rgba(102,217,239,0.5)'

class HighlightedBlock extends React.Component {
  componentDidMount() {
    let mark = document.querySelector(`#${this.props.id}`);
    let pre = mark.nextElementSibling;
    let code = pre.firstElementChild;
    let child = code.firstChild;
    let shouldHighlight = false;
    while(child != undefined) {
      if (!shouldHighlight && child.textContent.includes(this.props.start)) {
        shouldHighlight = true;
      }
      if (shouldHighlight) {
        if (child.style) child.style.background = background;
        else {
          let newChild = document.createElement('span')
          newChild.textContent = child.textContent
          newChild.style.background = background;
          code.replaceChild(newChild, child);
          child = newChild;
        }
      }
      if (child.textContent.includes(this.props.end)) {
        break;
      }
      child = child.nextSibling;
    }
  }
  
  render() {
    return(
      <React.Fragment></React.Fragment>
    )
  }
}

export default HighlightedBlock;