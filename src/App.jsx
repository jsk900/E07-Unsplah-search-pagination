import { useState, useEffect, useRef } from 'react';

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const [search, setSearch] = useState('Berlin');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);

  const inputRef = useRef();
  const totalPagesRef = useRef();

  //Grab API KEY from .env file.
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URI = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=12&query=${search}&page=${page}`;

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput('');
  };

  const nextPage = () => {
    if (page < totalPagesRef.current) {
      setPage((prevPage) => prevPage + 1);
    }

    inputRef.current.focus();
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }

    inputRef.current.focus();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URI);
        const results = await response.json();
        setData({ results, loading: false, error: null });
      } catch (error) {
        setData({ results: null, loading: false, error });
      }
    };
    fetchData();
  }, [URI]);

  if (data.loading) return <p>Loading.....</p>;
  if (data.error) return <p>{data.error}</p>;

  totalPagesRef.current = data.results.total_pages;

  return (
    <main>
      <Header
        inputRef={inputRef}
        searchInput={searchInput}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        page={page}
        totalPagesRef={totalPagesRef}
        nextPage={nextPage}
        prevPage={prevPage}
        search={search}
      />

      <Content data={data} />

      <Footer />
    </main>
  );
};

export default App;
