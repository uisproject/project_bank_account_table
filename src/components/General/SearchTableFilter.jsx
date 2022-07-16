import React, { forwardRef } from "react";
import { Input } from "antd";

const SearchTableFilter = forwardRef((props, ref) => {
  return (
    <>
      <div style={{ padding: "8px" }}>
        <Input
          ref={ref}
          {...props}
          placeholder="Search"
          style={{ marginBottom: "8px" }}
        />
      </div>
    </>
  );
});

export default SearchTableFilter;
