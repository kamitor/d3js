import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deployData from "./deployData.json";

const DeployProduct1 = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const onNext = () => {
    setCount(count + 1);
    navigate("/deployproduct/page2");
  };
  console.log(count);
  return (
    <>
      {deployData.Product1.map((item) => {
        return (
          <>
            <div style={item.headertheme}>
              <div className="py-3 text-center d-flex align-items-center">
                <img
                  src={item.img}
                  height={item.height}
                  width={item.width}
                  style={item.prevlogo}
                  alt="logo"
                />
                <p className="m-0 p-1 font-weight-bold" style={item.logotext}>
                  {/* {item.title} */}
                  {process.env.REACT_APP_HEADER}
                </p>
              </div>
              
              </div>
            <div
              className="overflow-scroll d-flex flex-column"
              style={item.bodytheme}
            >
              <iframe width="100%" height="500" frameborder="0"
  src="https://observablehq.com/embed/f6d02f0b8ed979ca?cell=*"></iframe>
            

              <div style={item.footer}>
                <button
                  type="submit"
                  style={item.buttonprimarytheme}
                  onClick={onNext}
                >
                  {item.primarybutton}<i className="ml-1 bi bi-arrow-right"></i>
                </button>

                <button type="submit" style={item.buttonsecondarytheme}>
                  <i className="bi bi-arrow-left mr-1"></i>{item.secondarybutton}
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default DeployProduct1;
