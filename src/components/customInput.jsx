import { Form } from "react-bootstrap";

const CustomInput = (props) => {
  const { label, inputAttributes, handleOnChange } = props;

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...inputAttributes} onChange={(e) => handleOnChange(e)} />
    </Form.Group>
  );
};

export default CustomInput;
