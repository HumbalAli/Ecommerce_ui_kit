"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "tgfvld8n",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductDetails : React.FC = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async () => {
    if (!id) return;

    try {
      const query = `*[_type == "product" && _id == $id] {
        _id,
        name,
        price,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query, { id });

      if (data.length > 0) {
        setProduct(data[0]);
      } else {
        console.log("No product found with the given ID.");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return 

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-900 mt-4 mb-4">Product Details</h2>
      <div className="bg-white shadow-md rounded-lg">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
            No Image Available
          </div>
        )}

        <div className="mt-4 p-2">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-slate-800 mt-2 text-sm">
            {product.description.length > 100
              ? product.description.substring(0, 100) + "..."
              : product.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-slate-600 font-bold">${product.price}</p>
              {product.discountPercentage > 0 && (
                <p className="text-sm text-green-400">
                  {product.discountPercentage}% OFF
                </p>
              )}
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags?.map((tag, index) => (
              <span key={index} className="text-xs bg-slate-200 text-black rounded-full px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
