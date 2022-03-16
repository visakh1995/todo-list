import React from "react";
const userLeft = false;
const userWatchingCateMeme = true;

// normal promise function
const promiseOnIt = () => {
  let p = new Promise((resolve, reject) => {
    let a = 1 + 4;
    if (a == 2) {
      resolve("success");
    } else {
      reject("failed");
    }
  });

  p.then((message) => {
    console.log("This is in the then" + message);
  }).catch((message) => {
    console.log("This is in the then" + message);
  });
};
// normal promise function ends here

// normal callback function without promise

const watchTutorialCallBack = (callback, errorCallback) => {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCateMeme) {
    errorCallback({
      name: "User watching cat meme",
      message: "cats",
    });
  } else {
    callback("Thumbs up and subscribe");
  }
};
watchTutorialCallBack(
  (message) => {
    console.log("Success:" + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

// normal callback function without promise ends

// rewriting callback function in terms of promise function

const watchPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user gone",
        message: "he just leaves",
      });
    } else if (userWatchingCateMeme) {
      reject({
        name: "watching yutunes",
        message: "just being busy with watching",
      });
    } else {
      resolve({
        message: "oohooo success yeah...tadaaa",
      });
    }
  });
};

watchPromise()
  .then((message) => {
    console.log("success" + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// rewriting callback function in terms of promise function ends here

// promise confirmation of multiple functions
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video one recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("video 2 recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("video 3 rejected");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

// Promis .race alse can use for first promise only need to suucess result

// async await

const makeRequest = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location} `);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("we cannot talk to people");
    }
  });
};

const processRequest = (response) => {
  return new Promise((resolve, reject) => {
    console.log("We are processing the request");
    resolve(`Extra Information" + ${response}`);
  });
};

const doWork = async () => {
  try {
    const response = await makeRequest('Google');
    console.log("response received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
};
doWork();

function Promises() {
  return (
    <div className="promises">
      <p>promises learning</p>
      <button className="btn" onClick={() => promiseOnIt()}>
        click it
      </button>
    </div>
  );
}

export default Promises;
