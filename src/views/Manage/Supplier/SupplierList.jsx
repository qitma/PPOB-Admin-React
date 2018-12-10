import React from "react";
import PropTypes from "prop-types";
import Table from "../../../components/Table/CustomTable";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
//import CardHeader from "components/Card/CardHeader.jsx";

const SupplierList = ({ supplierList, handleChangePage }) => {
  //const { classes } = props;

  const tableHead = ["Supplier Name", "Product Name", "Product Type"];
  const tableKey = ["name", "productName", "productType"];
  const { suppliers, page, loading, error } = supplierList;
  console.log(supplierList);

  // if (loading)
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  if (error)
    return (
      <div>
        <h3>Error : {error.message}</h3>
      </div>
    );
  // eslint-disable-next-line no-console
  return (
    <div>
      <BlockUi tag="div" blocking={loading}>
        {suppliers && (
          <Table
            tableHeaderColor="primary"
            tableHead={tableHead}
            tableData={suppliers}
            tableKey={tableKey}
            page={page}
            handleChangePage={handleChangePage}
          />
        )}
      </BlockUi>
    </div>
  );
};

SupplierList.propTypes = {
  supplierList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    suppliers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default SupplierList;
