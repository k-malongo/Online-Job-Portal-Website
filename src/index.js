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
      
      let job_card = document.createElement("div");
      job_card.setAttribute("class", "job-card");

      let jobName = document.createElement("div");
      // jobName.setAttribute("class", "job-name");
      jobName.className= ("job-name");


      let companyLogo = document.createElement("img");
      companyLogo.src=data.image 
      companyLogo.className= ("job-profile");
      companyLogo.setAttribute("id", "compLogo");

     let skills = document.createElement("div");
      skills.setAttribute("class", "job-label"); 
     ;

      
      let postedJob = document .createElement("div")
      postedJob.className =("job-posted")
      
      let jobDetails = document.createElement("div");
      jobDetails.setAttribute("class", "job-detail");

      let h4 = document.createElement("h4");
      h4.id= ("company");
      

      let h3 = document.createElement("h3");
      h3.setAttribute("id", "position");
      h4.id= ("position");
    

      let p = document.createElement("p");

      h4.innerText = data.company;
      h3.innerText = data.job_type;
      p.innerText = data.description
      postedJob.innerText = data.time
      data.requirements.forEach(data => {
          // console.log(data)
          let label1 = document.createElement('a')
          label1.className= ("label-a")
          label1.innerText = data
          skills.appendChild(label1)

        });

      jobDetails.appendChild(h4);
      jobDetails.appendChild(h3);
      jobDetails.appendChild(p);
      jobName.appendChild(companyLogo);
      jobName.appendChild(jobDetails);
      job_card.appendChild(jobName)
      job_card.appendChild(skills)
      job_card.appendChild(postedJob)
      console.log(job_card);

      
      // print to screen
      let jobs = document.getElementById("jobs");
      jobs.appendChild(job_card);

      console.log(jobs)

      // let job_type= document.getElementById("position")
    });
};

displayJobs();
