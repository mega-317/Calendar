import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import data from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import axios from 'axios';

export let Context1 = createContext()

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12])

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map((a, i)=>{
                    return (
                      <Card shoes={a} index={i+1}/>
                    )  
                  })
                }
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{ 
                console.log(result.data)
                let copy = [...shoes, ...result.data];
                setShoes(copy);
              })
              .catch(()=>{
                console.log('실패함 ㅅㄱ')
              })

              
            }}>더보기</button>
          </>
        }/>
        
        <Route path="/detail/:id" element={ 
          <Context1.Provider value={{재고, shoes}}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        }/>
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <div>멤버임</div> } />
          <Route path="location" element={ <div>위치정보임</div> } />
        </Route>
        <Route path="/cart" element={ <Cart /> }></Route>
        <Route path="*" element={ <div>404 error</div> } />
      </Routes>

    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.index}.jpg`} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
