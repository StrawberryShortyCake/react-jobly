import { useState, useEffect } from "react";
import Company from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import "./CompanyList.css";

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
      <h1 className="CompanyList-heading">All Companies</h1>
      {companies.length === 0 && <p>No search results found!</p>}
      <ul>
        {companies.map((company) => (
          <li className="CompanyList-item" key={company.handle}>
            <Company companyData={company} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyList;

// DO NOT DELETE; USE FOR TESTING
// const defaultCompanies = [
//   {
//     handle: "handle 1",
//     name: "name1",
//     numEmployees: 10,
//     description: "description 1",
//     logoUrl: "",
//   },
//   {
//     handle: "handle 2",
//     name: "name 2",
//     numEmployees: 20,
//     description: "description 2",
//     logoUrl: "",
//   },
// ];
