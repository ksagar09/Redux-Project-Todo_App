import React from 'react'
import "./IncDec.css";
import { incNumber, decNumber, MulNumber, DivNumber, } from "../actions/index_Action_IncDec";

import { useSelector, useDispatch } from "react-redux";

const IncDec = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const myState = useSelector((state) => state.Change);
  const myOtherState = useSelector((state) => state.Multiplier);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">


        <div className="container">

          <h1>Increment/Decrement Counter</h1>
          <h4>using React & Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              // title="Decrement"
              onClick={() => dispatch(decNumber())}><span>-</span>
            </a>

            <span
              // name="quantity"
              // type="text"
              // className="quantity__input"
              >{myState}
              </span>

            <a
            
              className="quantity__plus"
              // title="Increment"
              onClick={() => dispatch(incNumber())}><span>+</span>
            </a>

          </div>

        </div>


        {/* For Multiplication and Division */}


        <div className="container my-5">

          <h1>Multiplication & Division</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              // title="Divide"
              onClick={() => dispatch(DivNumber())}><span> / </span></a>

            <span
              // name="quantity"
              // type="text"
              // className="quantity__input"
              >
              {myOtherState}
              </span>

            <a
              className="quantity__plus"
              // title="Multiplication"
              onClick={() => dispatch(MulNumber())}><span> * </span></a>

          </div>

        </div>
      </div>
    </>
  )
}

export default IncDec;