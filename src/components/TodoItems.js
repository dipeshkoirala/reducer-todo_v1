import React, { useState, useReducer } from "react";
import { TitleReducer, is } from "../reducer";

import "../App.css";

const TodoItems = () => {
  const [newToDo, setnewToDo] = useState("");

  const [state, dispatch] = useReducer(TitleReducer, is);

  const handleChanges = (e) => {
    // e.preventDefault();
    setnewToDo(e.target.value);
  };

  let heading =
    state.length === 0 ? (
      <h2>0 todo</h2>
    ) : (
      <h3 className="bg-info m-4 p-4 ">Total Pending: {state.length}</h3>
    );

  const addMember = (newMember) => {
    return { type: "ADD_TODO", payload: newToDo };
  };

  return (
    <div>
      <div>
        <input
          className="todo-input p-2 m-2 float-left "
          type="text"
          name="newToDo"
          value={newToDo}
          onChange={handleChanges}
        />
        <button
          className={"button btn-success p-1 m-1 float-left"}
          onClick={() => {
            dispatch(addMember());
          }}
        >
          Add ToDo
        </button>
        {/* <button
          className={"button btn-danger p-1 m-1 "}
          onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}
        >
          Remove
        </button> */}
        <button
          className={"button btn-danger p-2 m-2 float-right"}
          onClick={() => dispatch({ type: "REMOVE_ALL" })}
        >
          Remove all.
        </button>
      </div>

      <div>{heading}</div>
      {state.map((item, index) => {
        var dk = "";
        var mytime = parseInt(
          new Date().getTime() - new Date(item.id).getTime(),
          10
        );
        //   switch (item.id) {
        //     case mytime > 60:

        if (mytime > 60 * 60 * 24 * 360) {
          /*  mytime = parseInt(
              (new Date().getTime() - new Date(item.id).getTime()) /
                (1000 * 60 * 60 * 24 * 360),

              10
            ); */
          mytime = parseInt(mytime / (1000 * 60 * 60 * 24 * 360), 10);
          dk = mytime + "yr";
          console.log("This is year", mytime);
        } else if (mytime > 60 * 60 * 24) {
          mytime = parseInt(
            (new Date().getTime() - new Date(item.id).getTime()) /
              (1000 * 60 * 60 * 24),

            10
          );
          dk = mytime + "day";
          console.log("This is day");
        } else if (mytime >= 60 * 60) {
          mytime = parseInt(
            (new Date().getTime() - new Date(item.id).getTime()) /
              (1000 * 60 * 60),

            10
          );
          dk = (mytime, "hr");
          console.log("This is hour");
        } else if (mytime >= 60) {
          mytime = parseInt(
            (new Date().getTime() - new Date(item.id).getTime()) / (1000 * 60),
            10
          );
          dk = mytime + "min";
          console.log("This is minute");
        } else {
          mytime = parseInt(mytime, 10);
          dk = mytime + "sec";
          console.log("This is second" + mytime);
        }

        //   break;
        /*   else if (mytime > 60 * 60) {
            mytime = parseInt(
              (new Date().getTime() - new Date(item.id).getTime()) /
                (1000 * 60 * 60),

              10
            );
            dk = (mytime, "hr");
            console.log("This is hour");
          }
          //   break;
 */
        // case mytime > 60 * 60 * 24:
        /*  else if (mytime > 60 * 60 * 24) {
            mytime = parseInt(
              (new Date().getTime() - new Date(item.id).getTime()) /
                (1000 * 60 * 60 * 24),

              10
            );
            dk = mytime + "day";
            console.log("This is day");
          }
          //   break;
          // case mytime > 60 * 60 * 24 * 360:
          else if (mytime > 60 * 60 * 24 * 360) {
            mytime = parseInt(
              (new Date().getTime() - new Date(item.id).getTime()) /
                (1000 * 60 * 60 * 24 * 360),

              10
            );
            dk = mytime + "yr";
            console.log("This is year", mytime);
          } */
        //   break;
        // default:

        /* const date_in_days = (dt1, dt2 = item.id) => {
          // console.log(this.state.arr.created_at);
          let date1 = new Date(dt1).getTime();
          let date2 = new Date(dt2).getTime();
          return Math.floor(
            (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
              Date.UTC(
                date1.getFullYear(),
                date1.getMonth(),
                date1.getDate()
              )) /
              1000 //* 60 * 60 * 24)
          );
        }; */
        return (
          <div className="dk bg-info">
            {!item.completed ? (
              <div>
                <h1
                  className="list bg-success m-10 p-4 "
                  onClick={() =>
                    dispatch({ type: "COMPLETE", payload: item.id })
                  }
                >
                  <span className={"dk m-2 bg-info float-left"}>
                    {index + 1}: {item.item} -Created on: (
                    {new Date(item.id).toDateString()})
                  </span>
                </h1>
              </div>
            ) : (
              <div>
                <h1
                  className="done"
                  onClick={() =>
                    dispatch({ type: "COMPLETE", payload: item.id })
                  }
                >
                  <span className="sp bg-danger">
                    **
                    {item.item} --Removing On: **
                    {/* {parseInt(
                      (new Date().getTime() - new Date(item.id).getTime()) /
                        1000,
                      10
                    )} */}
                    {dk}
                    <button
                      className={"button btn-danger p-1 m-1 float-right"}
                      onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}
                    >
                      Remove
                    </button>
                  </span>
                </h1>
              </div>
            )}
            {/* <input
              className="check m-2 p-4 float-right"
              type="checkbox"
              
            ></input> */}
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
