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
  const [jobs, setJobs] = useState(defaultJobs);

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

  // onload = useEffect, triggered on load
  // on click => passed in as a function, triggered on click
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
