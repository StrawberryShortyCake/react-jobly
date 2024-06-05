import { useState, useEffect } from "react";
import Company from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

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
  const [companies, setCompanies] = useState(null);

  async function getCompanyList(searchTerm = "") {
    console.log("running getCompanyList in CompanyList");
    const companies = await JoblyApi.getCompanies(searchTerm);
    console.log("companies retrieved", companies);
    setCompanies(companies);
  }

  useEffect(function getCompanyListWhenMounted() {
    getCompanyList();
  }, []);

  if (companies === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CompanyList">
      <SearchForm getList={getCompanyList} />
      {companies.length === 0 &&
        <p>No search results found!</p>
      }
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
