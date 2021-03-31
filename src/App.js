import React, {useEffect, useState} from 'react';
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

  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <BrowserRouter>
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Switch>
            <Route path="/country/:id" component={CountryPage}/>
            <Route path="/">
              <FilterMenu />
              <CountryList />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
