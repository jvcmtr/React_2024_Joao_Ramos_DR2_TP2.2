import React ,{ useState } from 'react'
import './App.css' 
import Card from './components/card'
import DisplayText from './components/displayText'
import Product from './components/Product';

export default function App() {

  const [text, settext] = useState("");

return (
    <main className='app'>
        <h1 className="page_title"> João Cícero Fundamentos de React TP2.2</h1>
        <Card> 
          <p>Escreva algo :   </p>
          <input onChange={ev => settext(ev.target.value)} />
          <DisplayText content={text} ></DisplayText>
        </Card>
        <Card>
          <Product id="1"/>
        </Card>
    </main>
    )
}