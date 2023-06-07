import * as React from "react";
import { connect } from "react-redux";
import { logIn } from "../redux-thunk/actions";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  updateUser = (e) => {
    this.setState({ user: e.target.value });
  };

  //check if user exists in db and log in
  validateUser = async () => {
    const usernames =
      this.props.data && this.props.data.map((user) => user.name);
    if (usernames.includes(this.state.user)) {
      sessionStorage.setItem("user", this.state.user);
      await this.props.logIn();
      document.getElementById("redirectbtntohome").click();
    }
    else {
      alert("User not registered")
    }
  };

  render() {
    return (
      <div>
        <div style={{
          display: 'block',
          width: 700,
          padding: 30,
          marginLeft: 'auto', marginRight: 'auto'
        }}>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>Enter user:</Form.Label>
              <Form.Control type="text"
                placeholder="Enter username" onChange={this.updateUser} />
            </Form.Group>

            <Button className="mt-3" variant="primary" onClick={this.validateUser}>
              Login
            </Button>
          </Form>
          <Link to="/home" id="redirectbtntohome"></Link>
        </div >
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reduxThunk.data,
  isLoggedIn: state.reduxThunk.isLoggedIn,
});

const mapDispatchToProps = {
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
