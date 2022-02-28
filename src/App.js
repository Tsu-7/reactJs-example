import logo from './logo.svg';
import './App.css';
import ShowName from './components/ShowName';
import ListProduct from './components/listProduct/ListProduct';

function App() {
  const data = [
    {
        id: 1,
        name: "Sach",
        price: 12000,
        image: require('./assets/images/sach1.jpg') 
    },
    
    {
        id: 2,
        name: "Sach 2",
        price: 12000,
        image: require('./assets/images/sach2.jpg') 
    },
    {
        id: 3,
        name: "Sach 3",
        price: 12000,
        image: require('./assets/images/sach3.png') 
    },
    {
        id: 4,
        name: "Sach 4",
        price: 12000,
        image: require('./assets/images/sach4.jpg') 
    },
    {
        id: 5,
        name: "Sach 5",
        price: 12000,
        image: require('./assets/images/sach5.jpg') 
    },

]
  return (
    <div className="App">
      <ListProduct data={data}/>
    </div>
  );
}

export default App;
