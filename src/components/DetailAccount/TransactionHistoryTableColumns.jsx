import TextBold from "../General/TextBold";
import { dateParser } from "../../utils/parser";
import { getColumnDateRangeProps } from "../../utils/tableService";

const TransactionHistoryTableColumns = () => [
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    ...getColumnDateRangeProps({
      dataIndex: "transactionDate",
      useSort: "asc",
    }),
    render: (text) => <TextBold>{dateParser(text)}</TextBold>,
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
    render: (value) =>
      value ? <TextBold style={{ color: "green" }}>{value}</TextBold> : "-",
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    render: (value) =>
      value ? <TextBold style={{ color: "red" }}>{value}</TextBold> : "-",
  },
];

export default TransactionHistoryTableColumns;
