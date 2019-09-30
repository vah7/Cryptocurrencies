import React from 'react';

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            currencies: [],
            loading: false,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
          loading: true,  
        });
        
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
        .then(response => {
            return response.json().then(json => {
                return response.ok ? json : Promise.reject(json);
            });
        })
        .then((data) => {
            this.setState({
                loading: false,
                currencies: data.currencies,
            });
        })
        .catch((error) => {
            this.setState({
                loading: false,
                error: error.errorMesage,
            });
        });
    }

    render() {
        console.log(this.state)

        if(this.state.loading) {
            return <div>Loading...</div>
        }
        return(
            <div>text</div>
        );
    }

}

export default List;