import { getProductDetails } from "@/widgets";
import { ModelDetails } from "@/widgets/model-details";
import { getCarDetails } from "@/widgets/model-details/api/modelDetailsApi";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [carInfo, setCarInfo] = React.useState(null);
  // useEffect(() => {
  //   setLoading(true);
  //   getProductDetails(id).then((data) => {
  //     setProduct(data);
  //     setLoading(false);
  //   });
  // }, [id]);


  useEffect(() => {
    setLoading(true);
    getCarDetails("9cxPsOY4jp2b39TvAXrJ").then((data) => {
      setCarInfo(data);
      setLoading(false);
    })
  }, [])

  // console.log(carInfo)


  if (loading) {
    return <div>Loading...</div>;
  }

  // return <ModelDetails model={product} carInfo={carInfo} />;
  return <ModelDetails  carInfo={carInfo} />;
};
