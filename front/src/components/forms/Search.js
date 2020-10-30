import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <form name="search_form" onSubmit={handleSubmit}>                    
        <div id="live_reload_box">
        </div>
        <div id="cp_ls_ajax_loader" className="live-search-loader-wrap" style={{display: 'none'}}>
        
        </div>
        <input type="text" onChange={handleChange} name="text" value={text} placeholder="Search products" className="ty-search-block__input cm-hint" />
        <button style={{ cursor: "pointer" }} onClick={handleSubmit} title="Search" className="ty-search-magnifier" type="submit">
        <i className="ty-icon-search" />
        </button>
   </form>
  );
};

export default Search;
