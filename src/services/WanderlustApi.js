export default {
  fetchPointsOfInterest(params) {
    return fetchData(`/places`);
  }
};

const fetchData = async url => {
  const rootUrl = "http://localhost:3000";
  const finalUrl = `${rootUrl}${url}`;
  const response = await fetch(finalUrl);
  let resultJSON = await response.json();
  console.log(resultJSON);
  return resultJSON;
};
