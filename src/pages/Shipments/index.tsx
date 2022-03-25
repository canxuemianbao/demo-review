import { Card, DataTable, Page } from "@shopify/polaris";
import { useContext } from "react";
import { useFeatureCode } from "../../billing";
import { CompanyContext } from "../../context";
import { useGetShipmentQuery } from "../../graphql";
import { ability } from "../../rbac";
import Filter from "./components/Filter";
import { List } from "./components/List";

function Shipments() {
  const isCompanyConsole = useContext(CompanyContext)
  const hasAbility = ability.can("view", "aftership/shipments");
  const shipments = useGetShipmentQuery();
  const hasFeatureCode = useFeatureCode("add shipment");

  return (
    <Page
      title="Sales by product"
      primaryAction={isCompanyConsole ? undefined : {
        content: "Add shipment",
        onAction: () => {
          !hasFeatureCode && alert("you dont has this feature");
        },
      }}
    >
      {hasAbility && <Filter />}
      {!hasAbility && "cannot view filter"}
      <Card>
        <List shipments={shipments} />
      </Card>
    </Page>
  );
}

export default Shipments;
