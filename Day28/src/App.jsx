import { useState } from "react";
import "./App.css";
export const App = () => {
  const [takePlace, setTakePlace] = useState("");
  const [isWhetherSet, setIsWhetherSet] = useState(false);
  const [whether, setWhether] = useState({
    country: "",
    localtime: "",
    locationName: "",
    state: "",
    condition_text: "",
    condition_icon: "",
    wind_kph: "",
    humidity: "",
    temp_c: "",
    wind_dir: "",
  });
  const handleClick = () => {
    if (takePlace) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=b78d99ce343446ab8d342629210308&q=${takePlace}`
      )
        .then((res) => {
          if (res.status < 399) {
            return res.json();
          } else {
            throw new Error(res.statusText);
          }
        })
        .then((data) => {
          console.log(data);
          setWhether({
            country: data.location.country,
            localtime: data.location.localtime,
            locationName: data.location.name,
            state: data.location.region,
            condition_text: data.current.condition.text,
            condition_icon: data.current.condition.icon,
            wind_kph: data.current.wind_kph,
            humidity: data.current.humidity,
            temp: data.current.temp_c,
            wind_dir: data.current.wind_dir,
          });
          setIsWhetherSet(true);
        })
        .catch((err) => {
          console.log("this is error", err);
          setIsWhetherSet(false);
        });
    } else {
      setIsWhetherSet(false);
    }
    setTakePlace("");
  };
  return (
    <>
      <main>
        <section>
          <header>
            <input
              type="text"
              value={takePlace}
              onChange={(e) => setTakePlace(e.target.value)}
            />
            <button onClick={handleClick}>
              Get weather
            </button>
          </header>
          <footer>
            {isWhetherSet ? (
              <>
                <figure>
                  <div>
                    <h1>{whether.temp}&#x2103; </h1>
                    <span>{whether.condition_text}</span>
                    <h6>
                      {whether.locationName},{whether.country},{" "}
                      {whether.localtime.slice(11)}
                    </h6>
                  </div>
                  <div>
                    <img src={whether.condition_icon} alt="" />
                  </div>
                </figure>
                <aside>
                  <div>
                    <h4>{whether.humidity}</h4>
                    <h6>Humidity</h6>
                  </div>
                  <div>
                    <h4>{whether.wind_dir}</h4>
                    <h6>Wind Direction</h6>
                  </div>
                  <div>
                    <h4>{whether.wind_kph}</h4>
                    <h6>Wind Speed(Kph)</h6>
                  </div>
                </aside>
              </>
            ) : (
              <h1 className="h1">No Data Available</h1>
            )}
          </footer>
        </section>
      </main>
    </>
  );
};