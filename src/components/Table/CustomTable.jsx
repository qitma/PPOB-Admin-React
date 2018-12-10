import React from "react";
import PropTypes from "prop-types";
import TableContent from "./CustomTableContent";
import CustomPagination from "../Pagination/Pagination";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

const CustomTables = props => {
  const {
    tableHead,
    tableData,
    tableKey,
    cellAction,
    page,
    handleChangePage
  } = props;
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify" /> Striped Table
            </CardHeader>
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>No</th>
                    {tableHead.map((prop, index) => {
                      return <th key={index}>{prop}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, key) => {
                    // eslint-disable-next-line prettier/prettier
                    let index = (page.page - 1) * page.size + key + 1;
                    return (
                      <TableContent
                        tableKey={tableKey}
                        data={data}
                        dataid={index}
                        cellAction={cellAction}
                        key={data[`id`]}
                      />
                    );
                  })}
                </tbody>
              </Table>
              {page && page.count && (
                <CustomPagination
                  page={page}
                  handleChangePage={handleChangePage}
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

CustomTables.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  tableKey: PropTypes.arrayOf(PropTypes.string),
  cellAction: PropTypes.object,
  page: PropTypes.shape({
    size: PropTypes.number,
    count: PropTypes.number
  }),
  handleChangePage: PropTypes.func.isRequired
};

export default CustomTables;
