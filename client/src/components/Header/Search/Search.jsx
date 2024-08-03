import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [searchUrl, setSearchUrl] = useState("");

  // Update the URL used for fetching search results when the query changes
  useEffect(() => {
    if (query.length) {
      setSearchUrl(`/api/products?populate=*&filters[title][$contains]=${query}`);
    } else {
      setSearchUrl("");
    }
  }, [query]);

  const { data, loading, error } = useFetch(searchUrl);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search products"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        {loading && <div className="loading-msg">Loading...</div>}
        {error && <div className="error-msg">Error fetching results.</div>}
        {!query.length ? (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        ) : !data?.data?.length ? (
          <div className="no-results-msg">
            No products found for "{query}".
          </div>
        ) : (
          <div className="search-results">
            {data?.data?.map((item) => (
              <div
                className="search-result-item"
                key={item.id}
                onClick={() => {
                  navigate("/product/" + item.id);
                  setSearchModal(false);
                }}
              >
                <div className="image-container">
                  <img
                    src={
                      process.env.REACT_APP_STRIPE_APP_DEV_URL +
                      item.attributes?.img?.data[0]?.attributes?.url
                    }
                    alt="img"
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item.attributes?.title}</span>
                  <span className="desc">{item.attributes?.description}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
