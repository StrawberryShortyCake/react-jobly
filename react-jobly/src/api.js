const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  /**
   * Return jobs and companies (for example)
   */
  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    console.log("what's our header???", headers);

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get a list of companies. */

  static async getCompanies(searchTerm) {
    const query = searchTerm.length > 0 ? { nameLike: searchTerm } : {};
    let res = await this.request(`companies/`, query);
    return res.companies;
  }

  /** Get a list of jobs. */

  static async getJobs(searchTerm) {
    const query = searchTerm.length > 0 ? { title: searchTerm } : {};
    let res = await this.request(`jobs/`, query);
    return res.jobs;
  }

  /** log user in, sets a user token on the class
   * accepts data: { username, password }
  */

  static async login(data) {

    let res = await this.request(`auth/token`, data, "POST");
    JoblyApi.token = res.token;
  }

  /** sign user up, sets a user token on the class
   * accepts data:  { username, password, firstName, lastName, email }
  */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "POST");
    JoblyApi.token = res.token;
  }

  /** get user and create User instance */

  static async getUser(username) {
    // note: no need to pass in the token, because this instance should have a token
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

export default JoblyApi;
