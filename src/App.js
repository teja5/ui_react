import React from 'react';
import './App.css';
import Dealer from './component/Dealer';
import Item from './component/Item';
import Purchase from './component/Purchase';
import {
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import DealersList from './component/DealersList';
import ItemsList from './component/ItemsList';
import PurchaseList from './component/PurchaseList';
import EditDealer from './component/EditDealer';

function App() {
  return (
    <div >
      <nav>
        <ul>
          <li>
            <NavLink to="/dealer">Dealer</NavLink>
          </li>
          <li>
            <NavLink to="/item">Item</NavLink>
          </li>
          <li>
            <NavLink to="/purchase">Purchase</NavLink>
          </li>
          <li>
            <NavLink to="/dealerList">DealerList</NavLink>
          </li>
          <li>
            <NavLink to="/itemList">ItemList</NavLink>
          </li>
          <li>
            <NavLink to="/purchaseList">PurchaseList</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dealer">
          <Dealer />
        </Route>
        <Route path="/edit-dealer/:dealerId">
          <EditDealer />
        </Route>
        <Route path="/item">
          <Item />
        </Route>
        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="/dealerList">
          <DealersList />
        </Route>
        <Route path="/itemList">
          <ItemsList />
        </Route>
        <Route path="/purchaseList">
          <PurchaseList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
