// import logo from './logo.svg';
import './App.css';
// import AllCycles from './hooks/lifecycle/AllCycles';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name={"Ricardo"} /> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name={"Ricardo"} /> */}
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre='Ricardo'> */}
          {/* Todo lo que hay aquí, es tratado como props.children */}
          {/* <h3>Contenido del props.children</h3> */}
        {/* </Ejemplo4> */}
        {/* <AllCycles /> */}
        {/* <GreetingStyled name='Ricardo' /> */}
      {/* </header> */}
      <TaskListComponent />
    </div>
  );
}

export default App;