import CompanyDetails from "./CompanyDetails";
import Company from "./CompanyCard";
import SearchForm from "./SearchForm";

const defaultCompanies = [
  {
    handle: "handle 1",
    name: "name1",
    numEmployees: 10,
    description: "description 1",
    logoUrl: "",
  },
  {
    handle: "handle 2",
    name: "name 2",
    numEmployees: 20,
    description: "description 2",
    logoUrl: "",
  },
];

/**
 * Purpose: renders a list of companies
 *
 * Props: none
 * States: companies
 *
 * App > RoutesList > Companies
 */

function CompanyList() {
  const companies = defaultCompanies;

  function getCompanyList(){
    return "";
  }

  return (
    <div className="CompanyList">
      <SearchForm getList={getCompanyList} />
      <ul>
        {companies.map((company) => (
          <li className="Companies" key={company.handle}>
            <Company companyData={company} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyList;
