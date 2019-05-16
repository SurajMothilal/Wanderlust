export default {
  fetchPointsOfInterest() {
    return callApi("hey");
  }
};

const callApi = url => {
  fetch(url).catch(() => {
    console.log("Error");
  });
};
savvy2612;
