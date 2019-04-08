import React,{Component} from'react'

class SearchBar extends Component{
   constructor(props){
      super(props);     
      this.state = {searchText:"",placeHolder:"tapez votre film..."}
    }
 
    render(){
        return( 
        <div>
        <input onChange={this.handlechange.bind(this)} placeholder={this.state.placeHoldercd}/>
        <p>{this.state.searchText}</p>
       
        </div>
         
        )
}
    handlechange(event){
        this.setState({searchText:event.target.value});
        console.log(this.state.searchText);
    }
}

export default SearchBar;