import FilterContainer from "./Container";
import FilterCompanyContainer from "./CompanyContainer";

export default function () {
  return import.meta.env.company ? (
    <FilterCompanyContainer />
  ) : (
    <FilterContainer />
  );
}
