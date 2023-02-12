import logo from './logo.svg';
import './App.css';
import { Contact } from './models/contact.class';
import ComponentA from './components/componentA';

function App() {
  const contact = new Contact('Ricardo', 'Perez', 'sanexto@gmail.com', true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contact={ contact } />
      </header>
    </div>
  );
}

export default App;
