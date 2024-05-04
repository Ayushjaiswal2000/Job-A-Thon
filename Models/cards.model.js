export const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      description: "We are looking for a skilled software engineer to join our team.",
      location: "San Francisco, CA",
      salary: "$80,000 - $100,000",
      experience: "2+ years",
      logo: "https://picsum.photos/200/200" // Example placeholder image from Lorem Picsum
    },
    {
      title: "Data Scientist",
      company: "Data Analytics Co.",
      description: "Seeking a talented data scientist to work on cutting-edge projects.",
      location: "New York, NY",
      salary: "$90,000 - $120,000",
      experience: "3+ years",
      logo: "https://picsum.photos/200/200" // Example placeholder image from Lorem Picsum
    }
];



  export default class CardsModel {
    fetchCards()  {
      return jobs;
      // Write your code here
    };
  }
  