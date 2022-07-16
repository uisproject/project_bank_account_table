import TextBold from "../General/TextBold";
import {
  getColumnDateRangeProps,
  getColumnProps,
} from "../../utils/tableService";
import { dateParser } from "../../utils/parser";
import { Button } from "antd";

const accountTableColumns = () => [
  {
    title: "No.",
    dataIndex: "key",
    key: "key",
    render: (value) => <div>{value + 1}</div>,
  },
  {
    title: () => "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    ...getColumnDateRangeProps({
      dataIndex: "transactionDate",
      useSort: "asc",
      useDateRange: true,
    }),
    render: (text) => <TextBold>{dateParser(text)}</TextBold>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ...getColumnProps({ dataIndex: "description", useSearch: true }),
    render: (text) => <TextBold>{text}</TextBold>,
  },
  {
    dataIndex: "",
    key: "",
    render: (_, data) => (
      <Button href={`/detail-account/${data.id}`}>
        <TextBold>Detail</TextBold>
      </Button>
    ),
  },
];

export default accountTableColumns;
