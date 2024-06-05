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
  const [companies, setCompanies] = useState(defaultCompanies); //FIXME: match user expectations

  async function getCompanyList(searchTerm = "") {
    console.log("running getCompanyList in CompanyList");
    // FIXME: this is not really the worry outside of the api
    const query = searchTerm.length > 0 ? { nameLike: searchTerm } : {};
    const companies = await JoblyApi.getCompanies(query);
    console.log("companies retrieved", companies);
    setCompanies(companies);
  }

  useEffect(function getCompanyListWhenMounted() {
    getCompanyList();
  }, []);

  //TODO: handle no companies

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
