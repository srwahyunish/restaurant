import React, {Component} from 'react';
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';
import axios from 'axios';
import {API} from '../config/api';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            featuredCities: null,
            citiesResultSearch: null,
            cityKeywordSearch: null
        };
    }
    
    changeKeywordHandler = (event) => {
        this.setState ({keyword: event.target.value});
    };

    searchHandler = () => {
        let keyword = this.state.keyword;
        var url =`${API.zomato.baseUrl}/cities`;
        axios.get(url, {
            headers: {
                'user-key': API.zomato.api_key
            },
            params: {
                q:keyword
            }
        })
        .then(({data}) => {
            if(data.status === "success") {
                this.setState({
                    citiesResultSearch: data.location_suggestions,
                    keyword:'',
                    cityKeywordSearch: keyword
                })
            }
        })
        .catch(error=> console.log(error));
    };

    getFeaturedCities = () => {
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
            headers: {
                'user-key': API.zomato.api_key
            },
            params: {
                city_ids : "74,11052,170"
            }
        })
        .then(({data}) => {
            if(data.status === "success") {
                this.setState({featuredCities: data.location_suggestions})
            }
        })
        .catch(error => console.log(error) );
    };

    componentDidMount() {
        this.getFeaturedCities();
    }

    render() {
        const citiesDummy =[
            {id: 72, name:"Jakarta", country_name:"Indonesia"},
            {id: 11052, name:"Bandung", country_name:"Indonesia"},
            {id: 170, name:"Bali", country_name: "Indonesia"}
        ];
        return (
            <>
            <ImageAndWelcome />
            <div className="container" style={{marginTio: 30, marginBottom : 30}}>
                <CityList 
                title={'Featured Cities'} 
                cities={this.state.featuredCities}               
                />

                <SearchCity
                    value={this.state.keyword}
                    onChange={this.changeKeywordHandler}
                    onClickSearch={this.searchHandler}                   
                />
                
            
                {
                this.state.cityKeywordSearch !==' ' && (
                    <CityList 
                    title={'Search Result'} 
                    cities={this.state.citiesResultSearch}
                    showSubtitle={true}
                    subtitle={this.state.cityKeywordSearch}
                    />
                )}

                
            </div>
        </>
        );
    }
}

export default Home;