import "./JobList.css";
import JobCard from "./JobCard.jsx";
import SearchForm from "./SearchForm.jsx";

const defaultJobs = [
  {
    title: "title 1",
    salary: 100000,
    equity: "0.5",
    name: "company 1",
    handle: "c1"
  },
  {
    title: "title 2",
    salary: 200000,
    equity: "0.5",
    name: "company 2",
    handle: "c2"
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

  function getJobList() {
    return "";
  }

  return (
    <div className="JobList">
      <SearchForm getList={getJobList} />
      <ul>
        {jobs.map((job) => (
          <JobCard
            key={job.handle}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            name={job.name}
          />
        ))}
      </ul>
    </div>
  );
}
export default JobList;
