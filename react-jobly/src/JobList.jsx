import "./JobList.css";
import JobCard from "./JobCard.jsx";

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
    name: "company 2",
  },
];

/**
 * Purpose: renders a list of jobs
 *
 * Props: none
 * States: jobs
 *
 *  App > RoutesList > Jobs
 */
function JobList() {
  const jobs = defaultJobs;
  return (
    <ul>
      {jobs.map((job) => (
        <JobCard
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          name={job.name}
        />
      ))}
    </ul>
  );
}
export default JobList;
