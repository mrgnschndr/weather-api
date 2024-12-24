import "./App.css";
import React from "react";
import axios from 'axios';
import DeveloperNotes from "./DeveloperNotes.js";
import Product from "./Product.js";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lon: null,
            main: null,
            developerNotes: [],
            product: []
        }
    }

    componentDidMount() {
      this.getCoordinatesWithFetch();
    }

    // refactored fetch to axios
    getCoordinatesWithFetch = () => {
        let apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        let city = "Canton";
        let url = "http://api.openweathermap.org/geo/1.0/direct";

        axios.get(`${url}?q=${city}&appid=${apiKey}`)
          .then(response => {
            if (!response.ok && response.status !== 200) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`)
            }
            let data = response.data;
            this.setState({ 
                lat: data[0].lat, 
                lon: data[0].lon
            })
          })
          .catch (error => {
            console.log('Error message:', error.message)
          })
          .finally(() => {this.getWeatherWithFetch()
          })
    }

    getWeatherWithFetch = () => {
      let apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      let url = "http://api.openweathermap.org/data/2.5/forecast";
      // API call: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

      axios.get(`${url}?lat=${this.state.lat}&lon=${this.state.lon}&appid=${apiKey}`)
        .then(response => {
          if (!response.ok && response.status !== 200) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`)
          }
          let data = response.data;
          this.setState({
            main: data.list[0].weather[0].main
          })
        })
        .catch (error => {
          console.log(error.message);
        })
    }

    getDocumentation = async () => {
        try {
            let res = await axios.get('http://localhost:5002/documentation')
            this.setState({
                developerNotes: res.data
            })
            if (!res.ok && res.status !== 200) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`)
            }
            console.log(res);
            return res;

        } catch(error) {
            console.log(error.message);
        }
    }

    getProduct = async () => {
        try {
            let res = await axios.get('http://localhost:5002/products');
            this.setState({
                product: res.data
            })
            return res;
        } catch(error) {
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
                <button onClick={this.getDocumentation}>Get Documentation</button>
                <button onClick={this.getProduct}>Get Product</button>
                <div>
                    {/* {this.state.developerNotes.map((note, index) => {
                        return(
                            <DeveloperNotes key={index} devNote={note} />
                        )
                    })} */}
                    {/* {this.state.product && <Product product={this.state.product}/>} */}
                    {this.state.product.map((product, index) => {
                        return(
                            <Product key={index} prod={product} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App