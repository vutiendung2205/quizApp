import './App.css';
import Parameters from './components/Parameters';
import HeaderMenu from './components/HeaderMenu';
import ListQuestions from './components/ListQuestions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotiDialog from './components/NotiDialog';
import Results from './components/ResultsDialog';
import ResultsDialog from './components/ResultsDialog';

function App() {
  return (
    <Router>
        <div className="App">
            <HeaderMenu />
            <Switch>

                <Route path="/" exact >
                    <Parameters />
                </Route>

                <Route path="/quiz" exact >
                    <ListQuestions />
                </Route>
                <Route path="/quiz/results" >
                    <Results />
                </Route>

            </Switch>
            <NotiDialog />
            <ResultsDialog />
        </div>
    </Router>
    
  );
}

export default App;
