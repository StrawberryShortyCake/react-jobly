import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import JobCard from "./JobCard";
import JoblyApi from "./api";
const defaultCompany = {
  handle: "handle1",
  name: "name1",
  description: "description1",
  numEmployees: 10000,
  logoUrl: "",
  jobs: [
    {
      id: 1,
      title: "title 1",
      salary: 100000,
      equity: "0.5",
      name: "company 1",
    },
    {
      id: 2,
      title: "title 2",
      salary: 200000,
      equity: "0.5",
      name: "company 1",
    },
  ],
};

/**
 * Purpose: renders a list of companies
 *
 * Props: none
 * States: company
 *
 * App > RoutesList > CompanyDetails
 */

function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  // FIXME: Andrea
  // FIXME: consider handling when company cannot be found & 404

  console.log("CompanyDetails", { handle, company });

  async function getCompanyDetails() {
    console.log("running getCompanyDetails in CompanyDetails");
    const company = await JoblyApi.getCompany(handle);
    setCompany(company);
  }

  useEffect(function getCompanyDetailsWhenMounted() {
    console.log("useEffect running");
    getCompanyDetails();
  }, [handle]);

  if (company === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CompanyDetails">
      Today's company:{" "}
      <Link to="/companies/anderson-arias-morrow">Company!</Link>
      {company.name}
      {company.salary}
      {company.equity}
      <ul>
        {company.jobs.map((job) => (
          <li key={job.id}>
            <JobCard
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyDetails;
