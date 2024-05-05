export const jobs = [
    {
        id: "1",
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        description: "We are looking for a passionate Software Engineer to design, develop and install software solutions. Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment. Ultimately, the role of the Software Engineer is to build high-quality, innovative and fully performing software that complies with coding standards and technical design.",
        location: "San Francisco, CA",
        salary: "$80,000 - $100,000",
        experience: "2+ years",
        logo: "https://picsum.photos/200/200", // Example placeholder image from Lorem Picsum
        active: true, // Indicates the job is actively hiring
        applyBy: "2024-06-15", // Application deadline
        openings: 3, // Number of openings
        applicants: 50, // Number of applicants
        skills: ["JavaScript", "React", "Node.js", "SQL"] // Required skills
    },
    {
        id: "2",
        title: "Data Scientist",
        company: "Data Analytics Co.",
        description: "We are looking for a passionate Software Engineer to design, develop and install software solutions. Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment. Ultimately, the role of the Software Engineer is to build high-quality, innovative and fully performing software that complies with coding standards and technical design.",
        location: "New York, NY",
        salary: "$90,000 - $120,000",
        experience: "3+ years",
        logo: "https://picsum.photos/200/200", // Example placeholder image from Lorem Picsum
        active: false, // Indicates the job is not actively hiring
        applyBy: "2024-05-31", // Application deadline
        openings: 1, // Number of openings
        applicants: 20, // Number of applicants
        skills: ["Python", "Machine Learning", "Statistics", "Data Visualization"] // Required skills
    }
];





  export default class CardsModel {
    fetchCards()  {
      return jobs;
      // Write your code here
    };
    getJobById(jobId) {
        // Find the job with the given jobId
        return jobs.find(job => job.id == jobId);
    }
  }
  