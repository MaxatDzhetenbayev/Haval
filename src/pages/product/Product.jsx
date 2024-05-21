import { ModelDetails } from "@/widgets/model-details";
import { getCarDetails } from "@/widgets";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);

  const [carInfo, setCarInfo] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    getCarDetails(id).then((data) => {
      setCarInfo(data);
      setLoading(false);
    })
  }, [])



  if (loading) {
    return <div>Loading...</div>;
  }

  return <ModelDetails  carInfo={carInfo} />;
};
