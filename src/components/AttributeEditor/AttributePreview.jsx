import Button from "../Button";
import Field from "../Field";
import IconPencil from "../Icon/IconPencil";
import React from "react";
import SplitBlock from "../SplitBlock";
import { withRouter } from "react-router-dom";
const AttributePreview = ({
  id,
  schemeId,
  name,
  description,
  type,
  sensitive,
  history
}) => {
  return (
    <div className="attribute-preview">
      <Button
        className="btn btn-primary btn-edit"
        onClick={() => {
          history.replace(`/schemes/${schemeId}/${id}/edit`);
        }}
      >
        <IconPencil fill="white" />
        Editar
      </Button>
      <h3>
        <strong>{name}</strong>
      </h3>
      <Field title="Description">{description}</Field>

      <Field title="Type">{type}</Field>

      <Field title="Sensitivity">
        {sensitive === 0 && "NO"}
        {sensitive === 1 && "SI"}
        {sensitive === undefined && "-"}
      </Field>
      <SplitBlock>POSIBLE VALUES</SplitBlock>
      <table>
        <thead>
          <tr>
            <th>VALUE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>null</code>
            </td>
            <td>Value when user is not found</td>
          </tr>
          <tr>
            <td>{`{Integer}`}</td>
            <td>ID key of user</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(AttributePreview);
