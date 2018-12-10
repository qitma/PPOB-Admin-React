import React from "react";
import SupplierListContainer from "./_SupplierList"

class ManageSupplier extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <SupplierListContainer></SupplierListContainer>
            </div>
        )
    }
}

export default ManageSupplier;