import React from 'react'
import ShopLeft from "./ShopLeft";
import './Filter.css';
const Filter = (props) => {

  return (
    <div className='filter'>

      <ShopLeft showfilter={props.showfilter} setshowfilter={props.setshowfilter} setselectedBrands={props.setselectedBrands} setValue={props.setValue} selectedBrands={props.selectedBrands} searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm} selectedCategories={props.selectedCategories} setSelectedCategories={props.setSelectedCategories} />

    </div>
  )
}

export default Filter