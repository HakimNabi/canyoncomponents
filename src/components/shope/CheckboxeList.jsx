import React, { useState } from 'react';
import './CheckboxeList.css';

function CheckboxList({ data }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const itemId = event.target.value;
        if (event.target.checked) {
            setSelectedItems([...selectedItems, itemId]);
        } else {
            setSelectedItems(selectedItems.filter((id) => id !== itemId && id !== itemId.id));
        }
        console.log(selectedItems);
    };

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>

                    <input type="checkbox" value={item.id}
                        onChange={handleCheckboxChange} />
                    <label>{item.name}</label>
                </div>
            ))}
        </div>
    );
}

export default CheckboxList;