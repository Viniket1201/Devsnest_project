export const setWhether=(takePlace)=>{
    console.log(takePlace)
      return dispatch=>{
        console.log("hjhjhkhi")
        fetch(`https://api.weatherapi.com/v1/current.json?key=b78d99ce343446ab8d342629210308&q=${takePlace}`)
          .then((res) => {
            if (res.status < 399) {console.log("status");return res.json();} 
           else {
              throw new Error(res.status);
            }
            })
          .then((data) => {
            const locationWhether={
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
            }
            console.log(locationWhether);
            return dispatch({type:"SETWHETHER",payload:locationWhether})
          })
          .catch((err) => {
            console.log("this is", err);
            return dispatch({type:"DEFAULT"})
          });
      } 
  }