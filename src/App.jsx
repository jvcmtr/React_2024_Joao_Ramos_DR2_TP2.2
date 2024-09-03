import React ,{ useState, useEffect } from 'react'
import './App.css' 
import Card from './components/card'
import DisplayText from './components/displayText'
import Product from './components/Product';
import Table from './components/Table'
import LoadCard from './components/LoadableCard';
import JsonInfo from './components/JsonInfo';
import { getRequest } from './utils';
import Selectable from './components/Selectable';

export default function App() {

  const [text, settext] = useState("");
  const [chosenUser, setChosenUser] = useState({})
  const [ products, setProducts ] = useState([])
  const PromotionProductId  = 2;

  React.useEffect(()=>{
    getRequest('https://fakestoreapi.com/products', setProducts)
  }, [])

  const changeFilter = (category) =>{
    category = category.replace(' ', "%20")
    getRequest(`https://fakestoreapi.com/products/category/${category}`, setProducts)
  }


  const getUserById = (id) =>{
    getRequest(`https://fakestoreapi.com/users/${id}`, setChosenUser)
  }


return (
    <main className='app'>
        <h1 className="page_title"> João Cícero Fundamentos de React TP2.2</h1>
        <div className='mainGrid'>
          <Card>
            <JsonInfo data={chosenUser}/>
          </Card>

          <LoadCard url={"https://fakestoreapi.com/users/"}>
            <Table 
              onClick={obj => getUserById(obj.id) }
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

          <LoadCard url='https://fakestoreapi.com/products/categories'> 
            <p>Escreva algo :   </p>
            <input onChange={ev => settext(ev.target.value)} />
            <DisplayText content={text} ></DisplayText>
            <Selectable onChange={(ev) => changeFilter(ev.target.value)}></Selectable>
          </LoadCard>
          
          {
            products ? products.map((item)=>{
              return (<Card>
                <Product data={item}/>
              </Card>)
            }) : null
          }
        </div>
    </main>
    )
}