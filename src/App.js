import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Dealer from './components/dealer/Dealer';
import DealerList from './components/dealer/DealerList';
import DealerFinder from './components/dealer/DealerFinder';
import AddDealer from './components/functionalMethods/AddDealer';
import AddItem from './components/functionalMethods/AddItem';
import AddPurchase from './components/functionalMethods/AddPurchase';

function App() {
  return (
    <div className="App">
      <h1>OK lets start </h1>
      <Switch>
        <Route path="/component1">
          <Component1></Component1>
        </Route>
        <Route path="/component2">
          <Component2></Component2>
        </Route>
        <Route path="/dealer">
          <Dealer></Dealer>
        </Route>
        <Route path="/dealerList">
          <DealerList></DealerList>
        </Route>

        <Route path="/dealerSearch">
          <DealerFinder></DealerFinder>
        </Route>
        <Route path="/addDealer">
          <AddDealer></AddDealer>
        </Route>

        <Route path="/addItem">
          <AddItem></AddItem>
        </Route>

        <Route path="/addPurchase">
          <AddPurchase></AddPurchase>
        </Route>


      </Switch>
    </div>
  );
}
export default App;