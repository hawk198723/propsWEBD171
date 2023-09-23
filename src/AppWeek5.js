import "./App.css";
import React, { useState, useEffect } from "react";
function Appweek5() {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
  });

  useEffect(() => {
    fetch("https://mm214.com/demo.php")
      .then((response) => response.json())
      .then((data) =>
        setWeatherData({
          cityName: data.name,
          temperature: Math.round(kelvinToFahrenheit(data.main.temp)),
          description: data.weather[0].description,
        })
      )
      .catch((error) => console.error("Error is:", error));
  }, []);

  return (
    <div className="Appweek5" style={styles.container}>
      <h1>Weather in {weatherData.cityName}</h1>
      <p>Temperature: {weatherData.temperature} F</p>
      <p>Description: {weatherData.description}</p>
    </div>
  );
}

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}
const styles = {
  container: {
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    width: "50%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default Appweek5;
