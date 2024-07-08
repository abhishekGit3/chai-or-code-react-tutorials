import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return <h1>custom app</h1>
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https/google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }
let anotherUser = 'someone'
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  "Visit Google",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    <App/>
    // reactElement 
 /* <ReactElement/> */ 

)
