import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import firebase from "../../firebase";
import axios from "axios";
import Header from "../../atoms/header";
import Loader from "../../atoms/loader";
export default (props: any) => {
  let { history } = props;
  const state = useContext(GlobalContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("/api").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="">
      <Header>
        <button
          className="p-8 bg-green-500 hover:bg-gren-300 w-full py-2 text-white"
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                state.loader = true;
                history.push("/login");
              });
          }}
        >
          Logout
        </button>
      </Header>

      <div className="py-5">
        <div className="mt-8">
          {data ? (
            <div>
              {data.map((sin: any, index: number) => (
                <div key={index} className="flex justify-between m-4">
                  <p
                    key={index}
                    className="text-base mb-2 flex  font-bold w-1/4"
                  >
                    {sin.id} {sin.title}
                  </p>
                  <button
                    className=" bg-green-400 hover:bg-green-500 w-1/3 py-2 text-white w-1/4"
                    onClick={() => {
                      props.history.push(`/${sin.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};
