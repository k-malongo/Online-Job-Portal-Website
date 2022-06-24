console.log("hello world");

//display list of all jobs

const link = "http://localhost:3000/jobs/";

const displayJobs = function () {
  fetch(link)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //create elements using the dom
      data.forEach((data) => {
        // console.log(data)
        let job_card = document.createElement("div");
        job_card.setAttribute("class", "job-card");

        let jobName = document.createElement("div");
        // jobName.setAttribute("class", "job-name");
        jobName.className = "job-name";

        let companyLogo = document.createElement("img");
        companyLogo.src = data.image;
        companyLogo.className = "job-profile";
        companyLogo.setAttribute("id", "compLogo");

        let skills = document.createElement("div");
        skills.setAttribute("class", "job-label");
        let postedJob = document.createElement("div");
        postedJob.className = "job-posted";

        let jobDetails = document.createElement("div");
        jobDetails.setAttribute("class", "job-detail");

        let h4 = document.createElement("h4");
        h4.id = "company";

        let h3 = document.createElement("h3");
        h3.setAttribute("id", "position");
        h4.id = "position";

        let p = document.createElement("p");

        h4.innerText = data.company;
        h3.innerText = data.job_type;
        p.innerText = data.description;
        postedJob.innerText = data.location;
        data.requirements.forEach((data) => {
          // console.log(data)
          let label1 = document.createElement("a");
          label1.className = "label-a";
          label1.innerText = data;
          skills.appendChild(label1);
        });

        jobDetails.appendChild(h4);
        jobDetails.appendChild(h3);
        jobDetails.appendChild(p);
        jobName.appendChild(companyLogo);
        jobName.appendChild(jobDetails);
        job_card.appendChild(jobName);
        job_card.appendChild(skills);
        job_card.appendChild(postedJob);
        // console.log(job_card);

        // print to screen
        let jobs = document.getElementById("jobs");
        jobs.appendChild(job_card);
      });

      // console.log(jobs)

      // let job_type= document.getElementById("position")
    });
};

const formClick = function () {
  //unhide the form
  let btn = document.getElementById("addJob");
  btn.addEventListener("click", () => {

    let v = btn.innerHTML;
    // alert(v)
    if(v==="Create New Job"){
      btn.innerHTML = "Create new job"
      let form = document.getElementById("formDiv");
      form.style.display = "block";
    }else{
      btn.innerHTML = "Create New Job"
      let form = document.getElementById("formDiv");
      form.style.display = "none";
    }
})
};

//get details from form

const addNewJob = function (){
  fm = document.getElementById("formClick");
  fm.addEventListener("submit", (e) => {
   e.preventDefault();
alert("olaa")
let companyName = document.getElementById('input1').value
let jobtype = document.getElementById('input2').value
let jobDesc = document.getElementById('input3').value
let imgUrl = document.getElementById('input4').value
let location = document.getElementById('input5').value
let skill1 = document.getElementById('input6').value
let skill2 = document.getElementById('input7').value
let skill3 = document.getElementById('input8').value
  
  addCharacter(jobtype,companyName,jobDesc,imgUrl,location,skill1,skill2,skill3);
    // alert(name+" img - "+img)
});
function addCharacter(jobtype,companyName,jobDesc,imgUrl,location,skill1,skill2,skill3) {
  fetch("http://localhost:3000/jobs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      job_type: jobtype,
      image : imgUrl,
      company : companyName,
      description : jobDesc,
      location : location,
      requirements : [skill1,skill2,skill3]   

    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
    .catch((error) => console.log(error));
}

  //get elements by id
  

// addToJson(submit,companyName,jobDesc,imgUrl,location,skill1,skill2,skill3)
}

// const addToJson = function(submit,companyName,jobDesc,imgUrl,location,skill1,skill2,skill3){

// }
addNewJob()
formClick();
displayJobs();




