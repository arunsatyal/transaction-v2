import { Button, Form, Spinner }    from "react-bootstrap";
import CustomInput                  from "./customInput";
import { useState }                 from "react";
import { loginUser }                from "../axios/userAxiosHelper";
import { toast }                    from "react-toastify";
import { useNavigate }              from "react-router-dom";
import { loginUserAction }          from "../pages/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUserAction(formData));
  };

  const { isAuthenticated, isAuthenticating } = useSelector(
    (state) => state.user
  );

  if (isAuthenticated) {
    navigate("/transaction");
  }

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          value: email,
          placeholder: "Email address",
          required: true,
        }}
      />

      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          value: password,
          placeholder: "Password",
          required: true,
        }}
      />

      <Button
        variant="success rounded-pill"
        className="w-100 py-2"
        type="submit"
        disabled={isAuthenticating}
      >
        {isAuthenticating ? <Spinner size="sm" animation="border" /> : "Log In"}
      </Button>
    </Form>
  );
};

export default LoginForm;
