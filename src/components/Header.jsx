import React from 'react';
import SearchForm from './SearchForm';
import Buttons from './Buttons';

const Header = ({
  inputRef,
  searchInput,
  changeHandler,
  submitHandler,
  page,
  totalPagesRef,
  nextPage,
  prevPage,
  search,
}) => {
  return (
    <header>
      <SearchForm
        inputRef={inputRef}
        searchInput={searchInput}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />

      <h2>{search}</h2>
      <div className='pages'>
        <p>Page: {page}</p>
        <p>Total Pages: {totalPagesRef.current}</p>
      </div>

      <Buttons
        page={page}
        totalPagesRef={totalPagesRef}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </header>
  );
};

export default Header;
