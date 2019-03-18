import React from "react"

const Counrty = ({ id, name, capital, continent, population, flag }) => {
  return (
    <div className="countryList">
      <div>{name}</div>
      <div>{capital}</div>
      <div>{continent}</div>
      <div>{population}</div>
      <div>
        <img src={flag} />
      </div>
    </div>
  )
}
export default Counrty
