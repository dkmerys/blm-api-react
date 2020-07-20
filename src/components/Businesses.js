import React from 'react';

class Businesses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      businesses: []
    }
  }

  makeApiCall = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://warm-harbor-14009.herokuapp.com/businesses"
    fetch(proxyurl + url)
      .then(response => response.json())
      .then((jsonResponse) => {
        console.log("RESPONSE " + jsonResponse)
        this.setState({
          isLoaded: true,
          businesses: jsonResponse
        })
      })
  }

  componentDidMount() {
    this.makeApiCall()
  }

  render() {
    const { error, isLoaded, businesses } = this.state;
    if (error) {
      return (
        <React.Fragment>
          Error: {error.message}
        </React.Fragment>
      )
    } else if (!isLoaded) {
      return (
        <React.Fragment>
          Loading...
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h1>Businesses</h1>
          <ul>
            {businesses.map((business, index) =>
              <li key={index}>
                <h3>{business.name}</h3>
                <p>{business.address}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      )
    }
  }

}

export default Businesses;