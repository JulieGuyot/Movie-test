import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Sort = ({ setCategory, data}) => {
    const categoriesTab = []
    data.map ((element, index)=> {
        // we want to know if the category already exists
        const searchIndex = categoriesTab.findIndex((cat) => {
            return cat === element.category 
          });
          if (searchIndex === -1){
            return ( 
                categoriesTab.push(element.category)
            )
          }
         })

    return (
        <DropdownButton as={ButtonGroup} variant="secondary" title="Categories" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1" onClick={()=> setCategory("")}>All categories</Dropdown.Item>
            {categoriesTab.map((element, index) => {
                
                return (
                    <Dropdown.Item eventKey="1" onClick={()=> setCategory(element)}>{element}</Dropdown.Item>
            )})}
        </DropdownButton>
    )
};

export default Sort;
