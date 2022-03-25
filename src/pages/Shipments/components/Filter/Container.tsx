import { useFeatureCode } from "../../../../billing";
import { ability } from "../../../../rbac";
import Filter from "./Filter";

export default function FilterContainer() {
  const hasFeature = useFeatureCode("filter");
  const hasAbility = ability.can("view", "aftership/shipments");

  return <Filter hasFeature={hasFeature} hasAbility={hasAbility} />;
}
