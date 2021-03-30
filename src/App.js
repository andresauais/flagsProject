import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './redux/reducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CountryList from './components/country-list'
import FilterMenu from './components/filter-menu'
import Header from './components/header'
import CountryPage from './pages/CountryPage'

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage}/>
          <Route path="/">
            <FilterMenu />
            <CountryList />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
