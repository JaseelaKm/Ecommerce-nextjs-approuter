"use client";
import AddToCart from "@/app/Components/addToCart/AddToCart";
import { ProductServices } from "@/app/Services/Product-Services";
import Link from "next/link";

async function ProductDetail(props: any) {
  let productId = props.params.ProductId;
  const productDet = await ProductServices.getProductById(productId);
  console.log("productdetail page", productDet);
  return (
    <>
    <div>
      <div className="d-flex m-5 "> 
        <div className="col-md-4  bg-secondary-subtle  ">
          <img className="mt-5 ms-5"
            src={productDet.image.url}
            alt={productDet.name}
            height={400}
            width={300}
          />
        </div>
        <div className="col-md-8  p-4  bg-secondary-subtle ">
          <h1 className="display-5">{productDet.name}</h1>
          <h4 className="text-uppercase text-info">
            {productDet.categories[0].slug}
          </h4>
          <h3 className="display-6 fw=bolder my-5">${productDet.price.raw}</h3>
          <p className="lead">{productDet.description}</p>
          <AddToCart prodId={productDet.id} />
          <Link href="/Cart" className="btn btn-outline-dark me-2 mt-2">
            GO TO CART
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetail;
