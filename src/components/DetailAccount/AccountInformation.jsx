import React, { useEffect, useState } from "react";
import { useSelectBankAccountsAPI } from "../../features/getBankAccountsAPI";
import { useParams } from "react-router-dom";
import TextBold from "../General/TextBold";
import { Divider, Space } from "antd";
import { useDispatch } from "react-redux";
import { getBankAccountsAPIService } from "../../features/getBankAccountsAPI";
import { setTransactionHistory } from "../../features/detailAccount";
import { dateParser } from "../../utils/parser";
import "./accountInformation.css";

const AccountInformation = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelectBankAccountsAPI();

  // to fetch API
  useEffect(() => {
    dispatch(getBankAccountsAPIService());
  }, []);

  // when detailData is set
  useEffect(() => {
    if (!detailData) return;
    dispatch(setTransactionHistory({ account: detailData, data }));
  }, [detailData]);

  useEffect(() => {
    if (data.length <= 0) return;
    setDetailData(() => {
      const account = data.find((item) => item.id === Number(id));
      return account;
    });
  }, [data]);

  return (
    <>
      {id && (
        <div>
          <div
            className="detail-transaction-header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Space>
              Account Id :<TextBold>{detailData?.id}</TextBold>
            </Space>
            <Space>
              Transaction Date :{" "}
              <TextBold>{dateParser(detailData?.transactionDate)}</TextBold>{" "}
            </Space>
          </div>
          <Divider style={{ backgroundColor: "#9f9f9f" }} />
          <h3>Your Transaction</h3>
          <table>
            <tbody>
              <tr>
                <td style={{ width: "150px" }}>Category</td>
                <td>
                  <Space>
                    :<TextBold>{detailData?.category}</TextBold>
                  </Space>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <Space>
                    : <TextBold>{detailData?.description}</TextBold>{" "}
                  </Space>
                </td>
              </tr>
              <tr>
                <td>Debit</td>
                <td>
                  <Space>
                    :
                    <TextBold style={{ color: "green" }}>
                      {detailData?.debit ? `$${detailData?.debit}` : "-"}
                    </TextBold>
                  </Space>
                </td>
              </tr>
              <tr>
                <td>Credit</td>
                <td>
                  <Space>
                    :
                    <TextBold style={{ color: "red" }}>
                      {detailData?.credit ? `$${detailData?.credit}` : "-"}
                    </TextBold>
                  </Space>
                </td>
              </tr>
            </tbody>
          </table>
          <Divider style={{ backgroundColor: "#9f9f9f" }} />
        </div>
      )}
    </>
  );
};

export default AccountInformation;
