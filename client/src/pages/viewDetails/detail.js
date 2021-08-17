import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../atoms/header";
import Loader from "../../atoms/loader";
const Details = (props: any) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("/api/").then((response: any) => {
      setData(
        response.data.find((sin) => sin.id === parseInt(props.match.params.id))
      );
    });
  }, [props.match.params.id]);
  return (
    <div className="">
      <Header>
        <div></div>
      </Header>

      {data ? (
        <>
          <div className="py-5">user Detail</div>
          <p>userId: {data.id}</p>
          <p>title: {data.title}</p>
          <p>body: {data.body}</p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
