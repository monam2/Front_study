import { fetchProductDetail } from "@/api";
import ProductHeader from "@/components/ProductHeader";
import ProductInfoPage from "@/components/ProductInfo";
import React from "react";

function ProductDetailPage({ productDetail }) {
  const headerTitle = "상품 상세 성보 페이지";

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductInfoPage productDetail={productDetail} />
    </div>
  );
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const id = context.params.productId;
  const { data } = await fetchProductDetail(id);

  return {
    props: { productDetail: data },
  };
}
