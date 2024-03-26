import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

import img01 from "./assets/imgs/foto01.jpg"
import img02 from "./assets/imgs/foto02.jpg"
import img03 from "./assets/imgs/foto03.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
       title="Paisagem 01"
       image={img01}
       text1="blalb"
       text2="394802374"/>
       <Card 
       title="Paisagem 02"
       image={img02}
       text1="blalb"
       text2="394802374"/>
       <Card 
       title="Paisagem 03"
       image={img03}
       text1="blalb"
       text2="394802374"/>
    </>
  )
}

export default App
