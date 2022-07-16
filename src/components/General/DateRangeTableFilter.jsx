import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DateRangeTableFilter = ({ handleChange }) => {
  return (
    <>
      <div style={{ padding: "8px" }}>
        <RangePicker onChange={handleChange} format={"DD MMMM YYYY"} showTime />
      </div>
    </>
  );
};

export default DateRangeTableFilter;
