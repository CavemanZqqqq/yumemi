import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Layout path='/'>


            </Layout>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
