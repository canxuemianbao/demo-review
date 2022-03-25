import { Card, Page } from "@shopify/polaris";
import { useFeatureCode } from "../../billing";
import { WithAbility } from "../../components/WithAbility";
import { useGetShipmentQuery } from "../../graphql";
import Filter from "./components/Filter";
import { List } from "./components/List";

export interface ShipmentsProps {
  permission: any
}

function Shipments() {
  const shipments = useGetShipmentQuery();
  const hasFeatureCode = useFeatureCode("add shipment");

  return (
    <Page
      title="Sales by product"
      primaryAction={{
        content: "Add shipment",
        onAction: () => {
          !hasFeatureCode && alert("you dont has this feature");
        },
      }}
    >
      <Filter />
      <Card>
        <List shipments={shipments} />
      </Card>
    </Page>
  );
}

function CompanyShipments() {
  const shipments = useGetShipmentQuery();

  return (
    <Page
      title="Sales by product"
    >
      <span>"cannot view filter"</span>
      <Card>
        <List shipments={shipments} />
      </Card>
    </Page>
  );
}

export default WithAbility(Shipments, CompanyShipments);
