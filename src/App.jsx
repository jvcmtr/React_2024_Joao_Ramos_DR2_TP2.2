import React ,{ useState } from 'react'
import './App.css' 
import Card from './components/card'
import DisplayText from './components/displayText'
import Product from './components/Product';
import Table from './components/Table'
import LoadCard from './components/LoadableCard';
import JsonInfo from './components/JsonInfo';

export default function App() {

  const [text, settext] = useState("");
  const [chosenUser, setChosenUser] = useState({})

return (
    <main className='app'>
        <h1 className="page_title"> João Cícero Fundamentos de React TP2.2</h1>
        <div className='mainGrid'>
          <Card style={{height: '20vh'}}> 
            <p>Escreva algo :   </p>
            <input onChange={ev => settext(ev.target.value)} />
            <DisplayText content={text} ></DisplayText>
          </Card>
          <Card>
            <Product id={12}/>
          </Card>
          
          <Card>
            <JsonInfo data={chosenUser}/>
          </Card>
          <LoadCard url={"https://fakestoreapi.com/users/"}>
            <Table 
              onClick={setChosenUser}
              columnStyle={{id:{fontSize:"10px"}}} 
              cellStyle={{fontWeight:"300", color:"#303050", backgroundColor:'#eeeeff', padding:"10px", textAlign:'center'}}
              headerStyle={{ backgroundColor:'#aaaaee', padding:"10px"}} 
              mapper={(item) => { return{
                id: item.id, 
                name: item.name.firstname + " " +item.name.lastname,
                phone: item.phone,
                email: item.email
            }}}  />
          </LoadCard>
        </div>
    </main>
    )
}