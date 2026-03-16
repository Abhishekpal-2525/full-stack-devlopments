const myPromise = new Promise((resolve, reject) => {

    let success = true;
  
    if(success){
      resolve("Task Completed");
    } else {
      reject("Task Failed");
    }
  
  });
  
  myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));