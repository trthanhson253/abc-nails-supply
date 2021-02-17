import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  // getProductsByCount,
  fetchProductsByFilter,
} from "../../functions/product";
import { Image } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { setCookie, getCookie } from "../../functions/auth";

const Search = () => {
  const dispatch = useDispatch();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { search, spin } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const [products, setProducts] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text == null || !text.trim()) {
      history.push("/");
    } else {
      history.push(`/search?keyword=${text}`);
    }
    if (!getCookie("keyword")) {
      setCookie("keyword", text);
    } else {
      var currentKeyword = getCookie("keyword");
      currentKeyword += "-" + text;
      setCookie("keyword", currentKeyword);
    }
  };

  const fetchProducts = (arg) => {
    setLoading(true);
    fetchProductsByFilter(arg).then((res) => {
      const delayed = setTimeout(() => {
        setLoading(false);
      }, 400);
      setProducts(res.data);
    });
  };

  useEffect(() => {
    if (text != null) {
      const delayed = setTimeout(() => {
        // console.log("textSonTran", text);
        fetchProducts(text);
      }, 400);
      return () => clearTimeout(delayed);
    }
    // if (getCookie("keyword")) {
    //   const recentlyKeyword = getCookie("keyword").split("-");

    //   if (recentlyKeyword.length > 3) {
    //     recentlyKeyword.shift();
    //   }
    //   setCookie("keyword", recentlyKeyword.join("-"));
    //   setKeywords(recentlyKeyword);
    // }
  }, [text]);
  useEffect(() => {
    if (getCookie("keyword")) {
      const recentlyKeyword = getCookie("keyword").split("-");

      if (recentlyKeyword.length > 5) {
        recentlyKeyword.shift();
      }
      setCookie("keyword", recentlyKeyword.join("-"));
      setKeywords(recentlyKeyword);
    }
  }, [getCookie("keyword")]);

  return (
    <form name="search_form" onSubmit={handleSubmit}>
      <div id="live_reload_box">
        <div
          className="live-search-box"
          style={{ display: loading ? "none" : "" }}
        >
          <div
            className="result-box"
            style={{ maxHeight: "70vh", overflowY: "scroll" }}
          >
            {products.length ? (
              <>
                {loading ? (
                  <></>
                ) : (
                  <>
                    {keywords.reverse().map((k) => (
                      <li className="live-item-li clearfix">
                        <Link
                          className="cm-ls-product"
                          to={`/search?keyword=${k}`}
                        >
                          <div className="live-item-container">
                            <div className="live-image-container">
                              <i class="fa fa-history"></i>
                            </div>
                            <div className="live-info-container">
                              <div className="live-product-name-wrap">
                                <span className="live-product-name product-title">
                                  {k}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}

                    {products.map((c) => (
                      <li className="live-item-li clearfix">
                        <Link
                          className="cm-ls-product"
                          to={`/${c.category.slug}/${c.sub.slug}/${c.subSub.slug}/${c.slug}/product`}
                        >
                          <div className="live-item-container">
                            <div className="live-image-container">
                              <i class="fa fa-search"></i>
                              <Image
                                className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                                src={c.image[0].url}
                                alt={c.name}
                                width={30}
                                height={30}
                                style={{ opacity: 1 }}
                              />
                            </div>
                            <div className="live-info-container">
                              <div className="live-product-name-wrap">
                                <span className="live-product-name product-title">
                                  {c.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
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
        placeholder="Search"
        className="ty-search-block__input"
      />
      <button
        style={{ cursor: "pointer" }}
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
