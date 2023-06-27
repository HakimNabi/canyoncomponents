import React, { useContext, useState, useEffect } from 'react';
import './css/shopleft.css';
import { AiFillCaretDown } from 'react-icons/ai';
import CheckboxList from './CheckboxeList';
import dimensions from '../../Static/Dimensions.jpg';
import SliderComponent from './SliderComponent';
import CartPopup from '../CartPopup/CartPopup';
import { UserContext } from '../../UserContext';

const ShopLeft = () => {
  const { isCartopen, setisCartopen } = useContext(UserContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = ['USA', 'Canada', 'Mexico', 'Brazil', 'Japan'];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isopen, setisopen] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsContentVisible(false);
    } else {
      setIsContentVisible(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isContentVisible ? (
    <div className='main'>
      {/* Content */
        <div className="main ">
          <div className='flex'>

            <h2>KEYWORD</h2>
            <div className='hr' ></div>
          </div>
          <div className='keywoedSearch'>
            <div>
              <input type="text" placeholder='Search' className='searchinput' />
            </div>


            <button className='search' onClick={() => { setisCartopen(true) }}>Search</button>

          </div>
          {
            isCartopen && <CartPopup />
          }
          <div className="flex">


            <h2>
              DIMENSIONS(mm)
            </h2>
            <div className='hr' ></div>



          </div>
          <img src={dimensions} alt="StandardImage" width={250} />
          <div className="flex">

            <h2>STANDARD SIZE</h2>
            <div className='hr' ></div>
          </div>
          <p>Standard Size:</p>

          <div className='p1'>
            <select value={selectedCountry} className='country' onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <AiFillCaretDown onClick={() => { setisopen(!isopen) }} />

            <input type="number" className='sizeinput' placeholder='Size' min={0} onChange={(e) => { setsize(e.target.value); }} />
            <div className='updown'>

            </div>

            <input type="number" className='sizeinput' placeholder='CS' min={0} onChange={(e) => { setCs(e.target.value) }} />
            <div className='updown'>

            </div>
            <input type="number" className='sizeinput' placeholder='ID' min={0} onChange={(e) => { setid(e.target.value) }} />
            <div className='updown'>

            </div>

          </div>
          {
            isopen ?
              <div>
                <div style={{ width: '15vw', height: '20vh', marginTop: '2rem', border: "2px solid grey", overflowY: 'scroll' }}>
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                  <input type="checkbox" name="" id="" />10 20 30 <br />
                </div>
              </div> : <></>
          }
          <div className="flex">
            <h2>TEMPRATURE &deg; C</h2>
            <div className='hr' ></div>
          </div>
          <SliderComponent />
          <div className="flex">
            <h2>BASE MATERIAL TYPE</h2>
            <div className='hr' ></div>
          </div>
          <CheckboxList data={data} />
          <div className="flex">
            <h2>Sub MATERIAL TYPE</h2>
            <div className='hr' ></div>
          </div>
          <CheckboxList data={data} />
          <div className="flex">
            <h2>Compliance</h2>
            <div className='hr' ></div>
          </div>
          <CheckboxList data={data} />
          <div className="flex">
            <h2>Hardness</h2>
            <div className='hr' ></div>
          </div>

          <CheckboxList data={data} />
          <div className="flex">
            <h2>Color</h2>
            <div className='hr' ></div>
          </div>

          <CheckboxList data={data} />


        </div>


      }
    </div>
  ) : (
    <></>
  );
};

export default ShopLeft;
