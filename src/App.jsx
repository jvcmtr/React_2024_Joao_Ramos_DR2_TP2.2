import React ,{ useState } from 'react'
import './App.css' 
import Card from './components/card'
import DisplayText from './components/displayText'

export default function App() {

  const [text, settext] = useState("");

return (
    <main className='app'>
        <h1 className="page_title"> João Cícero Fundamentos de React TP2.1</h1>
        <Card> 
          Escreva algo :  
          <input onChange={ev => settext(ev.target.value)} />
          <DisplayText content={text} ></DisplayText>
        </Card>
    </main>
    )
}