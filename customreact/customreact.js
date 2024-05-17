function customRender(reactElement,container){ /*
  const domElement= document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  domElement.setAttribute('href',reactElement.href)
  domElement.setAttribute('target',reactElement.target)

  container.appendChild(domElement)
  */

  const domElement=document.createElement(reactElement.type)

  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props){
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement ={
  type: 'a',
  props: {
    href:'https://google.com',
    target:'_blank'
  },
  children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)

//this is how actually react implements injecting js and rendering