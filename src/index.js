    
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import YTSearch from 'youtube-api-search';
    
    import SearchBar from './components/search_bar';
    
    const API_KEY = 'AIzaSyBqqgGFdjSw6uSMNa_JqrjT8U85-BCZnwI';
    

    
    
    class App extends Component {
      
      constructor(props){
        super(props);
        
        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
          this.setState({ videos });
          //this.setState({ videos: videos});
          //same as above line if key and value match. ES6 feature.
        });
        
      }
      
      render() {
        return (
          <div>
            <SearchBar />
          </div>
        );
      }
            
    }
    

    ReactDOM.render(<App />, document.querySelector('.container'));