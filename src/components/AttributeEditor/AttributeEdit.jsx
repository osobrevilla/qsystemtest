import Select, { Option } from "../Select/";

import Button from "../Button";
import Field from "../Field";
import IconSave from "../Icon/IconSave";
import Input from "../Input";
import React from "react";
import SplitBlock from "../SplitBlock";
import TextArea from "../TextArea";
import { connect } from "react-redux";
import { updateSchemeAttribute } from "../../actions";
import { withRouter } from "react-router-dom";

class AttributeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  handleChange = event => {
    const { id } = this.props;
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { id } = this.props;
    const { name, description, type, sensitive } = this.state;

    return (
      <div className="attribute-edit">
        <Button
          className="btn btn-primary btn-save"
          onClick={() => {
            const { id, schemeId } = this.state;
            this.props.updateSchemeAttribute({ ...this.state });
            this.props.history.replace(`/schemes/${schemeId}/${id}`);
          }}
        >
          <IconSave />
          Guardar
        </Button>
        <Field title="Key Name">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Field>
        <Field title="Description">
          <TextArea
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </Field>
        <Field title="Type">
          <Select
            placeholder={"Select Option"}
            onChange={this.handleChange}
            name="type"
            value={type}
          >
            <Option value="integer">Integer</Option>
            <Option value="string">String</Option>
            <Option value="email">Email</Option>
          </Select>
        </Field>
        <Field title="Sensitivity">
          <label style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              name="sensitive"
              defaultChecked={!!sensitive}
              onChange={event => {
                let sensitive = event.target.checked ? 1 : 0;
                this.setState({
                  sensitive
                });
              }}
            />{" "}
            is this personal data?
          </label>
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
  }
}

export default connect(
  null,
  { updateSchemeAttribute }
)(withRouter(AttributeEdit));
