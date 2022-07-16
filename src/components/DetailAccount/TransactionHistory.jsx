import React from "react";
import { useSelectDetailAccount } from "../../features/detailAccount";
import { Table } from "antd";
import TransactionHistoryTableColumns from "./TransactionHistoryTableColumns";

const TransactionHistory = () => {
  const { transactionHistory } = useSelectDetailAccount();
  return (
    <div>
      <h3>Current and previous transaction</h3>
      <Table
        columns={TransactionHistoryTableColumns()}
        dataSource={transactionHistory}
      ></Table>
    </div>
  );
};

export default TransactionHistory;
