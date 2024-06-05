import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import JoblyApi from "./api";
const defaultJobs = [
  {
    title: "title 1",
    salary: 100000,
    equity: "0.5",
    name: "company 1",
  },
  {
    title: "title 2",
    salary: 200000,
    equity: "0.5",
    name: "company 1",
  },
];

/**
 * Purpose: renders a list of companies
 *
 * Props: none
 * States: companyData
 *
 * App > RoutesList > CompanyDetails
 */

// { handle, name, description, numEmployees, logoUrl, jobs }
function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  console.log("CompanyDetails", { handle, company });

  async function getCompanyDetails() {
    console.log("running getCompanyDetails in CompanyDetails");
    const company = await JoblyApi.getCompany(handle);
    console.log("company details retrieved", company);
    setCompany(company);
  }

  useEffect(function getCompanyDetailsWhenMounted() {
    console.log("useEffect running");
    getCompanyDetails();
  }, []);

  return (
    <div className="CompanyDetails">
      {company.name}
      {company.salary}
      {company.equity}
      <ul>
        {company.jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        ))}
      </ul>
    </div>
  );
}
export default CompanyDetails;
