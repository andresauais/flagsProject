import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Country from './country';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  padding: 4em 2em;
`
function CountryList(){

  const [countryList, setCountryList] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setCountryList(data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])
  return(
    <CountryListStyled>
      {
        countryList.map(({name, flag, population, region, capital})=>{
          return(
            <Country
              key={name}
              flag= {flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          )
        })
      }
    </CountryListStyled>
  )
}

export default CountryList;