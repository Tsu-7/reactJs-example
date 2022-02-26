import logo from './logo.svg';
import './App.css';
import ShowName from './components/ShowName';

function App() {
  return (
    <div className="App">
      <p>pham van do</p>
      <ShowName name="vu duc hai" />
      <ShowName name="nguyen thi hue" />
      <ShowName name="nguyen hai minh" />
      <ShowName name="nguyen nhan hieu" />
      <ShowName name="pham kha chien" />

    </div>
  );
}

export default App;
