import React, {useState} from 'react';
import './css/shopright.css';
// import ProductTable from './ProductTable';
import CustomPaginationActionsTable from './CustomPaginationActionsTable';



const ShopRight = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <div className="row">
        <h1>408,426 Results</h1>
      </div>
      < CustomPaginationActionsTable />
      {/* <ProductTable/> */}
    </div>

  )
}

export default ShopRight;
