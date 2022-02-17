import { useEffect } from 'react';

const SearchForm = ({
  inputRef,
  searchInput,
  changeHandler,
  submitHandler,
}) => {
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form>
      <input
        ref={inputRef}
        placeholder='Search'
        type='text'
        value={searchInput}
        onChange={(e) => changeHandler(e)}
      />
      <button onClick={(e) => submitHandler(e)}>Search</button>
    </form>
  );
};

export default SearchForm;
