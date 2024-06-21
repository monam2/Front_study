import ProductList from "../components/product/product-list/ProductList";

function ProductPage() {
  return (
    <div>
      <h1>상품 목록 페이지</h1>
      <ProductList />
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - 'products/productId'
 * 3. 장바구니 페이지 - 'carts'
 */

export default ProductPage;
