import { useState, useEffect } from "react";
import "./JobList.css";
import JobCard from "./JobCard.jsx";
import SearchForm from "./SearchForm.jsx";
import JoblyApi from "./api.js";

/**
 * Purpose: renders a list of jobs
 *
 * Props: none
 * States: jobs
 *
 *  App > RoutesList > Jobs
 */
function JobList() {
  const [jobs, setJobs] = useState(null);

  async function getJobList(searchTerm = "") {
    console.log("running getJobList in JobList");
    const jobs = await JoblyApi.getJobs(searchTerm);
    console.log("jobs retrieved", jobs);
    setJobs(jobs);
  }

  useEffect(function getJobListWhenMounted() {
    getJobList();
  }, []);

  if (jobs === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="JobList">
      <SearchForm getList={getJobList} />
      {jobs.length === 0 && <p>No search results found!</p>}
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

/**
 * create a component that takes a prop for the # of items to show
 * It takes all the items, divide it up and decide which grouping of them to show
 *
 * It calls another component for generating items
 * It has a function that adds a page visual / interative component to add to the bottom
 *
 * Use a state to keep track which grouping of items to render
 */

// DO NOT DELETE, SAVE FOR TESTING
// const defaultJobs = [
//   {
//     title: "title 1",
//     salary: 100000,
//     equity: "0.5",
//     name: "company 1",
//     handle: "c1",
//   },
//   {
//     title: "title 2",
//     salary: 200000,
//     equity: "0.5",
//     name: "company 2",
//     handle: "c2",
//   },
// ];
