import { fetchProductDetail } from "@/api";
import axios from "axios";
import React from "react";

function ProductDetailPage({ msg, productInfo }) {
  const headerTitle = "상품 상세 성보 페이지";

  return (
    <div>
      {/* <ProductHeader title={headerTitle} /> */}
      <div>{msg}</div>
      <p>{productInfo.name}</p>
    </div>
  );
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const id = context.params.productId;
  const res = await fetchProductDetail(id);

  return {
    props: { msg: "서버 데이터", productInfo: res.data },
  };
}
