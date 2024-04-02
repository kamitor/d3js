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
              <div style={item.logotext}>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
            <div
              className="overflow-scroll d-flex flex-column"
              style={item.bodytheme}
            >
              <h3 style={item.static}>{item.data1}</h3>
              <p style={item.static}>{item.data2}</p>
              <div className="form-group">
                <label style={item.logotext}>{item.data6}</label>
                <input type="number" className="form-control" name="text_input_CF523BA6-1357-401F-9F0D-B2A3EAE1FBBC"></input>
              </div>
              <h3 style={item.static}>{item.data3}</h3>

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
