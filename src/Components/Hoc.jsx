import React from 'react'
import './Hoc.css'

const products = [
   {pName: 'SmartPhone', price: 15999, color: 'navyblue'},
   {pName: 'Tv', price: 8999, color: 'red'},
   {pName: 'HtmlBook', price: 999, color: 'white'},
   {pName: 'Shoes', price: 3199, color: 'Grey'},
   {pName: 'T-shirts', price: 950, color: 'blue'}
]

const withSearch = (WrappedComponent) => {
    class withSearch extends React.Component{
      constructor(){
        super();
        this.state={
          search: '',
        }
      }
  
      updateName = (e) =>{
       this.setState({search: e.target.value})
      }

      filterName = (e) =>{
      return  products.filter (products => products.pName.toLowerCase().includes(this.state.search))
      }
      
  render(){
    let updateProductName = this.filterName();
    return (
      <div className='hoc'>
      <h2> HOC: Higher Order Component</h2>
      <ul>
      <li>A Higher-order component is a function that takes a component and returns a new component.</li>
      <br/>
      <li>A HOC is an advanced technique in React for reusing component logic.</li>
      <li> HOCs are not part of the React API. </li>
      <li> They are a pattern that emerges from React’s compositional nature.</li>
      </ul>
      <br/>
     <p><h4>syntax:</h4> const EnhancedComponent = higherOrderComponent(WrappedComponent);</p>
     <br/>
     <h4>Example 1: </h4>
     <label>
     Search 
      <input type="search" onChange={this.updateName}/>
     </label>
      
      <WrappedComponent products = {updateProductName} {...this.props}/>  
    
      </div>
    )
  }
  } 
  return withSearch;
}
export default withSearch;