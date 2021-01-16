import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import ProductCardRelate from "../../components/cards/ProductCardRelate";
import {
  getProductBySubSub,
  getFilteredProducts,
} from "../../functions/product";
import { useSelector, useDispatch } from "react-redux";
import ProductFilterMenu from "../../components/home/ProductFilterMenu";
import { Slider, Checkbox, message } from "antd";
import _ from "lodash";
import { Helmet } from "react-helmet";

const SubSubHome = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [subSub, setSubSub] = useState({});
  const [cate, setCate] = useState({});
  const [sub, setSub] = useState({});

  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [limit, setLimit] = useState(1);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [soluong, setSoluong] = useState(0);

  // FOR Sản phẩm ở trang Home
  const [products1, setProducts1] = useState([]);
  const [skip1, setSkip1] = useState(0);
  const [size1, setSize1] = useState(0);
  const [soluong1, setSoluong1] = useState(0);

  const [myFilters, setMyFilters] = useState({
    filters: { brand: [], size: [] },
  });

  const { user } = useSelector((state) => ({ ...state }));

  // const loadProductBySubSub = () => {
  //   getProductBySubSub(match.params.ssslug).then(res => {
  //     console.log(res)
  //     // setProduct(res.data.products);
  //   });
  // };
  const loadProductBySubSub = (slug) => {
    dispatch({
      type: "SET_SPIN",
      payload: true,
    });
    getProductBySubSub(slug).then((data) => {
      // console.log('data', data);
      // console.log('products', data.products);
      // console.log('subsub', data.subSub[0]);
      setProducts(data.products);
      setSubSub(data.subSub[0]);
      setCate(data.subSub[0].category);
      setSub(data.subSub[0].sub);

      let color = [];
      let brand = [];
      let size = [];
      for (let i = 0; i < data.products.length; i++) {
        color.push(data.products[i].color);
        brand.push(data.products[i].brand);
        size.push(data.products[i].size);
      }

      let uniqueColor = _.uniqWith(color, _.isEqual);
      let uniqueBrand = _.uniqWith(brand, _.isEqual);
      let uniqueSize = _.uniqWith(size, _.isEqual);
      // console.log('colorUnique', unique);
      setColors(uniqueColor);
      setBrands(uniqueBrand);
      setSizes(uniqueSize);
      // console.log('uniqueColor', uniqueColor);
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_SPIN",
          payload: false,
        });
      }, 1000);
    });
  };
  const loadMore = () => {
    let toSkip = skip + limit;

    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        message.error("No products found");
      } else {
        // console.log("DULIEU1", data.data);
        setProducts([...products, ...data.data]);
        setSoluong(data.size);
        setSkip(toSkip);
      }
    });
  };
  const resetMenu = () => {
    const ssslug1 = props.match.params.ssslug;
    loadProductBySubSub(ssslug1);
  };
  useEffect(() => {
    const ssslug1 = props.match.params.ssslug;
    loadProductBySubSub(ssslug1);
  }, []);

  return (
    <>
      <Helmet>
        <title>{subSub.name}</title>
      </Helmet>
      <div className="tygh-content clearfix">
        <div className="container-fluid  cat-content-grid">
          <div className="container-fluid-row container-fluid-row-full-width ut2__subcategories">
            <div className="row-fluid ">
              {" "}
              <div className="span16 ut2-top">
                <div className="ut2-extra-block-title">
                  <h1 className="ty-mainbox-title">
                    <span>{subSub.name}</span>
                  </h1>
                  <div id="breadcrumbs_167">
                    <div className="ty-breadcrumbs clearfix">
                      <Link to="/" className="ty-breadcrumbs__a">
                        <bdi>Home</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <Link
                        to={`/${cate.slug}/product`}
                        className="ty-breadcrumbs__a"
                      >
                        <bdi>{cate.name}</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <Link
                        to={`/${cate.slug}/${sub.slug}/product`}
                        className="ty-breadcrumbs__a"
                      >
                        <bdi>{sub.name}</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <span className="ty-breadcrumbs__current">
                        <bdi>{subSub.name}</bdi>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div className="span9 main-content-grid  ">
                <div className="ut2-cat-container">
                  <div className="cat-view-grid" id="category_products_11">
                    {/* Inline script moved to the bottom of the page */}
                    <div
                      className="ty-pagination-container cm-pagination-container"
                      id="pagination_contents"
                    >
                      <div className="grid-list">
                        <div id="categories_view_pagination_contents">
                          {products.map((product) => (
                            <ProductCard product={product} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProductFilterMenu
                brands={brands}
                colors={colors}
                sizes={sizes}
                setProducts={setProducts}
                setColors={setColors}
                setBrands={setBrands}
                setSizes={setSizes}
                resetMenu={resetMenu}
                skip={skip}
                limit={limit}
                setSoluong={setSoluong}
                myFilters={myFilters}
                setMyFilters={setMyFilters}
                setSkip={setSkip}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubHome;
