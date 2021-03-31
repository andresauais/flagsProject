import React from 'react'
import styled from 'styled-components'
import Search from './search'
import Region from './region'
import Wrapper from './wrapper'

const FilterMenuStyled = styled.div`
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
}
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 480px 1fr 164px;
  }
}
`
function FilterMenu() {
  return (
    <FilterMenuStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <span></span>
          <Region />
        </div>
      </Wrapper>
    </FilterMenuStyled>
  )
}

export default FilterMenu