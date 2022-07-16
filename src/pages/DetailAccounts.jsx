import React from "react";
import AccountInformation from "../components/DetailAccount/AccountInformation";
import BackButton from "../components/General/BackButton";
import TransactionHistory from "../components/DetailAccount/TransactionHistory";
import MainLayout from "../layouts/MainLayout";

const DetailAccounts = () => {
  return (
    <MainLayout>
      <BackButton>Back to landing page</BackButton>
      <AccountInformation />
      <TransactionHistory />
    </MainLayout>
  );
};

export default DetailAccounts;
