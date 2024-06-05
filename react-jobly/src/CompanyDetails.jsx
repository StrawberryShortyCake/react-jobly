import JobCard from "./JobCard";
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
function CompanyDetails() {
  const jobs = defaultJobs;
  return (
    <ul>
      {jobs.map((job) => (
        <JobCard title={job.title} salary={job.salary} equity={job.equity} />
      ))}
    </ul>
  );
}
export default CompanyDetails;
