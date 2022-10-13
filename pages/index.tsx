import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

interface resData {
  causes: Array<{
    name: string;
    zip_code: number;
    city: string;
    country: string;
    state: string;
  }>;
}

const Home: NextPage = () => {
  const [resultData, setResultData] = useState<resData>();

  const getName = async () => {
    const result = await axios.get(
      `https://api.givebacks.com/services/core/causes/search[sugar][1]`
    );
  };

  useEffect(() => {
    const fetchResult = async () => {
      const result = await axios.get(
        `https://api.givebacks.com/services/core/causes/search`
      );
      setResultData(result.data);
    };
    fetchResult();
  }, []);
  console.log(resultData);

  const displayCauses = resultData?.causes.map((cause, i) => {
    return <div key={i}>{cause.name}</div>;
  });

  return <div>{displayCauses}</div>;
};

export default Home;
