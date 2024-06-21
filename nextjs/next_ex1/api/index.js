import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

function fetchProducts(productId) {
  return instance.get("/products", {
    params: {
      id: productId,
    },
  });
}

function fetchProductDetail(id) {
  return instance.get(`/products/${id}`);
}

//장바구니에 아이템을 추가하는 API 함수
function createCartItem({ id, name, imageUrl, price }) {
  return instance.post("/carts", {
    id,
    name,
    price,
    imageUrl,
  });
}

//장바구니 목록을 들고오는 API 함수
function fetchCarts() {
  return instance.get("/carts");
}

//특정 아이디에 해당하는 장바구니 아이템을 삭제하는 API 함수
function removeCartsItem(id) {
  return instance.delete(`/carts/${id}`);
}

export { fetchProducts, fetchProductDetail, createCartItem, fetchCarts, removeCartsItem };
