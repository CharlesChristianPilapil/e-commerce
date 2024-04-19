import { Form } from "react-bootstrap";

const FormGroupInput = ({
  controlId,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Form.Group controlId={controlId} className="my-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default FormGroupInput;
