

function customRender(reactElement, mainContainer){
//    const domElement = document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children;
//    domElement.setAttribut('href', reactElement.props.href)
//    domElement.setAttribute('target',reactElement.props.target)
//    mainContainer.appendChild(domElement);


}
const reactElement = {
    type: 'a',
    props: {
        href: 'https/google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)