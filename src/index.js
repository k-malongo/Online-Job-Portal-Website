//
console.log("hello world");

//display list of all jobs

const link = "http://localhost:3000/jobs/3";
const displayJobs = function () {
  fetch(link)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //create elements using the dom

      // console.log(data)

      
      let job_card = document.createElement("div");
      job_card.setAttribute("class", "job-card");

      let jobName = document.createElement("div");
      jobName.setAttribute("class", "job-name");

      let companyLogo = document.createElement("img");
      companyLogo.setAttribute("class", "job-profile");
      companyLogo.setAttribute("id", "compLogo");
      // companyLogo.setAttribute('src', "")

     let skills = document.createElement("div");
      skills.setAttribute("class", "job-label");  

      let jobDetails = document.createElement("div");
      jobDetails.setAttribute("class", "job-detail");

      let h4 = document.createElement("h4");
      h4.setAttribute("id", "company");

      let h3 = document.createElement("h3");
      h3.setAttribute("id", "position");

      let p = document.createElement("p");

      jobDetails.appendChild(h4);
      jobDetails.appendChild(h3);
      jobDetails.appendChild(p);
      jobName.appendChild(companyLogo);
      jobName.appendChild(jobDetails);
      job_card.appendChild(jobName)
      job_card.appendChild(skills)
      console.log(job_card);
      let company = document.getElementById("company");
      company.innerText = data.company;
      let position = document.getElementById("position");
      position.innerText = data.job_type;
      console.log(data[1].image)

      let img = document.getElementById("compLogo");
      img.src = data.image

      // img.src = data.image;
    // companyLogo.setAttribute('src', data.image)

      // print to screen
      const jobs = document.getElementById("jobs");
      jobs.appendChild(job_card);

      // let job_type= document.getElementById("position")
    });
};

displayJobs();
