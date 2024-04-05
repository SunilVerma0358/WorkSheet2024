import React, { useState, useEffect } from "react";
const ApiFatch = () => {
  let [dogImage, setDogImage] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);
  return (
    <div>
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"210px"} src={dog}></img>
        ))}
    </div>
  );
};

export default ApiFatch;
