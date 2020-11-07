import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import {
  // getProductsByCount,
  fetchProductsByFilter,
} from '../../functions/product';
import { Image } from 'antd';
import Loading from 'react-loading-spinkit';
import PulseLoader from 'react-spinners/PulseLoader';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?${text}`);
    dispatch({
      type: 'SET_SPIN',
      payload: true,
    });
  };

  const fetchProducts = (arg) => {
    setLoading(true);

    fetchProductsByFilter(arg).then((res) => {
      setLoading(false);
      setProducts(res.data);
    });
  };

  useEffect(() => {
    const delayed = setTimeout(() => {
      console.log('textSonTran', text);
      fetchProducts({ query: text });
    }, 500);
    return () => clearTimeout(delayed);
  }, [text]);
  return (
    <form name="search_form" onSubmit={handleSubmit}>
      <div id="live_reload_box">
        <div className="live-search-box" style={{}}>
          <div style={{ maxHeight: '600px' }}>
            {products.length ? (
              <>
                {loading ? (
                  <></>
                ) : (
                  <>
                    {products.map((c) => (
                      <li className="live-item-li clearfix">
                        <a className="cm-ls-product" href="#">
                          <div className="live-item-container">
                            <div className="live-image-container">
                              <Image
                                className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                                src={c.image[1].url}
                                alt={c.name}
                                width={50}
                                height={50}
                                style={{ opacity: 1 }}
                              />
                            </div>
                            <div className="live-info-container">
                              <div className="live-product-name-wrap">
                                <span className="live-product-name product-title">
                                  {c.name}
                                </span>
                              </div>
                              <div className="live-product-price-wrap">
                                <span className="live-product-price ty-price-num">
                                  <bdi>
                                    $<span>{c.price}</span>
                                  </bdi>
                                </span>
                              </div>
                              <div className="live-product-code-wrap">
                                <span className="live-product-code">
                                  {c.item}
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="cp-live-search-buttons">
                          <a
                            className="ty-btn cp-ls-add-to-cart"
                            title="Add to cart"
                          >
                            <i class="fa fa-shopping-cart" />
                          </a>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <input
        type="text"
        onChange={handleChange}
        name="text"
        value={text}
        placeholder="Search products"
        className="ty-search-block__input"
      />
      <button
        style={{ cursor: 'pointer' }}
        onClick={handleSubmit}
        title="Search"
        className="ty-search-magnifier"
        type="submit"
      >
        <i className="ty-icon-search" />
      </button>
    </form>
  );
};

export default Search;
