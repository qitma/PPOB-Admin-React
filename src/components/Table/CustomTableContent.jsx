import React from "react";
import PropTypes from "prop-types";

const CustomTableContent = props => {
  const { tableKey, data, dataid } = props;
  const CellAction = props.cellAction;
  const keyNo = 1;
  const newData =
    tableKey !== undefined && tableKey.length > 0
      ? tableKey
      : Object.keys(data);
  return (
    <tr key={data[`id`]}>
      <td key={keyNo}>
        {dataid}
      </td>
      {newData.map((key, index) => {
        if (key.toLowerCase() !== "id") {
          return (
            <td key={index + 1}>
              {data[key]}
            </td>
          );
        }
        return null;
      })}
      {CellAction && (
        <td key={Object.keys(data).length}>
          {React.cloneElement(CellAction, { data: data })}
        </td>
      )}
    </tr>
  );
}

CustomTableContent.propTypes = {
  tableKey: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  dataid: PropTypes.number,
  classes: PropTypes.any,
  cellAction: PropTypes.object
};

export default CustomTableContent;
