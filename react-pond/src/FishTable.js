import React, { Component } from "react";
import FishTableRow from "./FishTableRow";

//TODO: FishTable will have many FishTableRows
const FishTable = function(props) {
  return (
    <table>
      <tbody>
        {props.fishes.map(function(fish, idx) {
          return <FishTableRow fish={fish} key={idx} />;
        })}
      </tbody>
    </table>
  );
};

export default FishTable;
