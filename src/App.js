import "./App.css";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lon: null,
            main: null
        }
    }
    
    componentDidMount() {
        this.getCoordinatesWithFetch();
        
    }

    // componentDidUpdate() {
    //     this.getWeatherWithFetch();
    // }


    // fetch 
    getCoordinatesWithFetch = async () => {
        let apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        let city = "Canton";
        let url = "http://api.openweathermap.org/geo/1.0/direct";

        try {
            let res = await fetch(`${url}?q=${city}&appid=${apiKey}`);
            console.log(res);

            if (!res.ok) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`)
            }

            let data = await res.json();
            console.log(data);
            this.setState({ 
                lat: data[0].lat, 
                lon: data[0].lon
            })
        } catch (error) {
            console.log(error.message)
        }

      //   url = "http://api.openweathermap.org/data/2.5/forecast";
      // // API call: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
      

      //   try {
      //       let res = await fetch(`${url}?lat=${this.state.lat}&lon=${this.state.lon}&appid=${apiKey}`);
      //       console.log('Weather res:', res);

      //       if (!res.ok) {
      //         throw new Error(`Error: ${res.status} - ${res.statusText}`)
      //       }

      //       let data = await res.json();
      //       console.log(data);
      //       this.setState({
      //         main: data.list[0].main
      //       }
      //     )
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      this.getWeatherWithFetch();
    }

    getWeatherWithFetch = async () => {
      let apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      let url = "http://api.openweathermap.org/data/2.5/forecast";
      // API call: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

      try {
          let res = await fetch(`${url}?lat=${this.state.lat}&lon=${this.state.lon}&appid=${apiKey}`);
          console.log('Weather res:', res);

          if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`)
          }

          let data = await res.json();
          console.log(data);
          this.setState({
            main: data.list[0].weather[0].main
          }
        )
      } catch (error) {
        console.log(error.message);
      }

    }

    
    render() {
        return (
            <div className="App">
                <h1>App</h1>
                <p>{`API KEY: ${process.env.REACT_APP_WEATHER_API_KEY}`}</p>
                <p>{`Lat: ${this.state.lat}, Lon: ${this.state.lon}`}</p>
                <p>{`Weather Now: ${this.state.main}`}</p>
            </div>
        )
    }
}

export default App