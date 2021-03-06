import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  state = {images: []};


   async onSearchSubmit(term) {
     try{
       console.log(term);
       
    const response = await unsplash.get('/search/photos', {
        params: { query: term , per_page: 50}
      });
      this.setState({images: response.data.results});
    }catch(err){
      new Error(err)
    }
      //Promise .then syntex to get confirmation
      // .then(response => {
      //   console.log(response.data.results);
      // });

      
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(term)=>this.onSearchSubmit(term)} />
        {/* Found:{this.state.images.length} images */}
        <ImageList images={this.state.images} />
        </div>
    );
  }
}

export default App;
