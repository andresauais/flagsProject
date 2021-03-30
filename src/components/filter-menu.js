import React from 'react'
import styled from 'styled-components'
import Search from './search'
import Region from './region'
import Wrapper from './wrapper'

const FilterMenuStyled = styled.div`
  .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }

`
function FilterMenu() {
  return (
    <FilterMenuStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <Region />
        </div>
      </Wrapper>
    </FilterMenuStyled>
  )
}

export default FilterMenu