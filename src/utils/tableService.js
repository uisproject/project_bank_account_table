import debounce from "./debounce";
import moment from "moment";
import SearchTableFilter from "../components/General/SearchTableFilter";
import DateRangeTableFilter from "../components/General/DateRangeTableFilter";

export const getColumnProps = ({ dataIndex = null, useSearch = false }) => ({
  ...(useSearch && {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <SearchTableFilter
        onChange={(e) =>
          debounce(() => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }, 500)
        }
      />
    ),
    onFilter: (value, record) => {
      return record?.[dataIndex].toLowerCase().includes(value.toLowerCase());
    },
    filterIcon: () => <i className="fa-solid fa-magnifying-glass"></i>,
  }),
});

export const getColumnDateRangeProps = ({
  dataIndex = null,
  useSort = false,
  useDateRange = false,
}) => ({
  ...(useDateRange && {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <DateRangeTableFilter
        handleChange={(value) => {
          setSelectedKeys(
            value
              ? [
                  {
                    start: moment(value[0]).format("YYYY-MM-DD"),
                    end: moment(value[1]).format("YYYY-MM-DD"),
                  },
                ]
              : null
          );
          confirm({ closeDropdown: false });
        }}
      />
    ),
    onFilter: (value, record) => {
      const start = moment(record?.[dataIndex]).diff(value.start);
      const end = moment(record?.[dataIndex]).diff(value.end);
      return start >= 0 && end <= 0;
    },
    filterIcon: (filtered) => (
      <i
        className={filtered ? "fa-solid fa-calendar" : "fa-regular fa-calendar"}
      ></i>
    ),
  }),
  ...(useSort && {
    sorter: (a, b) =>
      useSort === "asc"
        ? moment(a?.[dataIndex]).unix() - moment(b?.[dataIndex]).unix()
        : useSort === "desc"
        ? moment(b?.[dataIndex]).unix() - moment(a?.[dataIndex]).unix()
        : null,
    sortDirections:
      useSort === "asc"
        ? ["ascend", "descend"]
        : useSort === "asc"
        ? ["descend", "ascend"]
        : null,
  }),
});
