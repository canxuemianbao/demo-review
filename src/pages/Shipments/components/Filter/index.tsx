import { Button } from "@shopify/polaris";
import { useFeatureCode } from "../../../../billing";
import { ability } from "../../../../rbac";

function Filter() {
  const hasFeature = useFeatureCode("filter");
  const hasAbility = ability.can("view", "aftership/shipments");

  return (
    <Button>
      i am filter.{" "}
      {hasFeature ? "(I have feature!)" : "(I don't have feature ☹️)"}
      {hasAbility ? "(I have ability!)" : "(I don't have ability ☹️)"}
    </Button>
  );
}

export default Filter;
