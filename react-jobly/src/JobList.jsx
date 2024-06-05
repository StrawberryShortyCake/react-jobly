import { useState, useEffect } from "react";
import "./JobList.css";
import JobCard from "./JobCard.jsx";
import SearchForm from "./SearchForm.jsx";
import JoblyApi from "./api.js";

const defaultJobs = [
  {
    title: "title 1",
    salary: 100000,
    equity: "0.5",
    name: "company 1",
    handle: "c1",
  },
  {
    title: "title 2",
    salary: 200000,
    equity: "0.5",
    name: "company 2",
    handle: "c2",
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
  //TODO: make a loading component
  const [jobs, setJobs] = useState(defaultJobs); // FIXME: this is really not good user experience, null conditional

  async function getJobList(searchTerm = "") {
    console.log("running getJobList in JobList");
    const query = searchTerm.length > 0 ? { title: searchTerm } : {};
    const jobs = await JoblyApi.getJobs(query);
    console.log("jobs retrieved", jobs);
    setJobs(jobs);
  }

  useEffect(function getJobListWhenMounted() {
    getJobList();
  }, []);

  // TODO: consider handling if no company is returned
  return (
    <div className="JobList">
      <SearchForm getList={getJobList} />
      <ul>
        {jobs.map((job) => (
          <li key={job.handle}>
            <JobCard
              title={job.title}
              salary={job.salary}
              equity={job.equity}
              name={job.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobList;
