import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getBankAccountsAPIService,
  useSelectBankAccountsAPI,
} from "../../features/getBankAccountsAPI";
import { Table } from "antd";
import accountTableColumns from "./AccountTableColumns";

const AccountTable = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelectBankAccountsAPI();

  useEffect(() => {
    dispatch(getBankAccountsAPIService());
  }, []);

  return (
    <>
      {!isLoading && (
        <Table
          pagination={true}
          columns={accountTableColumns()}
          dataSource={data}
        />
      )}
    </>
  );
};

export default AccountTable;
