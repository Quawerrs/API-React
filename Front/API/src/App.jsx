import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulaire from './Formulaire'
import AjouterPage from './AjouterPage';
import VoirPage from './VoirPage';
import NavBar from './NavBar';



function App() {
  const [count, setCount] = useState(0)
  function App() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/ajouter" component={AjouterPage} />
            <Route path="/voir" component={VoirPage} />
          </Switch>
        </div>
      </Router>
    )
}
}

export default App
