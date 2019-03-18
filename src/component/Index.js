import React, { Component } from "react"
import Countries from "./Counrty"
import "./index.css"

class Index extends Component {
  state = { country: [], newCountry: [], text: "" }
  fetchApi = () => {
    let countryApi = "https://restcountries.eu/rest/v2/all"
    fetch(countryApi)
      .then(function(res) {
        return res.json()
      })
      .then(data => {
        this.setState({ country: data, newCountry: data })
      })
  }
  componentDidMount() {
    this.fetchApi()
  }
  onChangeHandaler = e => {
    this.setState({ text: e.target.value })
  }

  sortCountriesByAccending = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => {
      if (a.name > b.name) {
        return -1
      } else if (a.name < b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ newCountry: newCountry })
  }

  sortByCountrie = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ newCountry: newCountry })
  }

  sortCapitalByAccending = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => {
      if (a.capital > b.capital) {
        return -1
      } else if (a.capital < b.capital) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ newCountry: newCountry })
  }

  sortByCapital = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => {
      if (a.capital < b.capital) {
        return -1
      } else if (a.capital > b.capital) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ newCountry: newCountry })
  }

  sortContinentByAccending = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => {
      if (a.region < b.region) {
        return -1
      } else if (a.region > b.region) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ newCountry: newCountry })
  }

  sortByContinent = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => {
      if (a.region > b.region) {
        return -1
      } else if (a.region < b.region) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ newCountry })
  }

  sortPopulation = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => a.population - b.population)
    this.setState({ newCountry })
  }

  sortPopulationByAccending = () => {
    let newCountry = [...this.state.newCountry]
    newCountry.sort((a, b) => b.population - a.population)
    this.setState({ newCountry })
  }

  SearchByKeyEnter = e => {
    this.onChangeHandaler(e)
    let country = [...this.state.country]
    const newCountry = country.filter(
      element =>
        element.name.toLowerCase().startsWith(this.state.text) ||
        element.capital.toLowerCase().startsWith(this.state.text) ||
        element.region.toLowerCase().startsWith(this.state.text)
    )
    this.setState({
      newCountry
    })
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="headtext">LIST OF COUNTRIES</div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Please type the country you want"
              className="inputValue"
              name="text"
              onChange={this.SearchByKeyEnter}
            />
          </div>
        </div>
        <div className="countryHeading">
          <div>
            Name of Countries
            <a
              className="sortCountries"
              id="sortDownCountries"
              onClick={this.sortByCountrie}
            >
              &darr;
            </a>
            <a
              className="sortCountries"
              id="sortUpCountries"
              onClick={this.sortCountriesByAccending}
            >
              &uarr;
            </a>
          </div>
          <div>
            {" "}
            Capital City
            <a
              className="sortCapital"
              id="sortDownCapital"
              onClick={this.sortByCapital}
            >
              &darr;
            </a>
            <a
              className="sortCapital"
              id="sortUpCapital"
              onClick={this.sortCapitalByAccending}
            >
              &uarr;
            </a>
          </div>
          <div>
            Continent Name
            <a
              className="SortContinent"
              id="sortDownContinent"
              onClick={this.sortByContinent}
            >
              &darr;
            </a>
            <a
              className="SortContinent"
              id="sortUpContinent"
              onClick={this.sortContinentByAccending}
            >
              &uarr;
            </a>
          </div>
          <div>
            Population
            <a
              className="sortPopulation"
              id="sortDownPopulation"
              onClick={this.sortPopulation}
            >
              &darr;
            </a>
            <a
              className="sortPopulation"
              id="sortUpPopulation"
              onClick={this.sortPopulationByAccending}
            >
              &uarr;
            </a>
          </div>
          <div>
            Flag
            <a id="sortArrow" />
          </div>
        </div>
        <div className="mainContent">
          {this.state.country.length > 0 ? (
            this.state.newCountry.map(item => (
              <Countries
                name={item.name}
                capital={item.capital}
                continent={item.region}
                population={item.population}
                flag={item.flag}
              />
            ))
          ) : (
            <p>Loading data</p>
          )}
        </div>
      </div>
    )
  }
}
export default Index
