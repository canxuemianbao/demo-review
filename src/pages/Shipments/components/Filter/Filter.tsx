import { Button } from "@shopify/polaris";

function Filter({
  hasFeature,
  hasAbility,
}: {
  hasFeature: boolean;
  hasAbility: boolean;
}) {
  return (
    <Button>
      i am filter.{" "}
      {hasFeature ? "(I have feature!)" : "(I don't have feature ☹️)"}
      {hasAbility ? "(I have ability!)" : "(I don't have ability ☹️)"}
    </Button>
  );
}

export default Filter;
