import * as React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux-thunk/actions";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
    };
  }

  updateTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  updateDesc = (e) => {
    this.setState({ desc: e.target.value });
  };

  addTodo = async () => {
    const d = new Date();

    //formating to YYYYMMDDHHmmss
    let str = d.getFullYear().toString() + (d.getMonth() + 1).toString().padStart(2, 0) + d.getDate().toString().padStart(2, 0) + d.getHours().toString().padStart(2, 0) + d.getMinutes().toString().padStart(2, 0) + d.getSeconds().toString().padStart(2, 0);

    let todo = {
      title: this.state.title,
      description: this.state.desc,
      currentdate: str,
    };
    await this.props.addTodo(todo);
    document.getElementById("redirectbtn").click();
  }

  goBack = async () => {
    document.getElementById("redirectbtn").click();
  }

  render() {
    return (
      <div style={{
        display: 'block',
        width: 700,
        padding: 30,
        marginLeft: 'auto', marginRight: 'auto'
      }}>
        <h4>Add a Todo</h4>
        <Form>
          <Form.Group className="mt-3">
            <Form.Label>Enter title:</Form.Label>
            <Form.Control type="text"
              placeholder="Enter todo" onChange={this.updateTitle} />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Enter description:</Form.Label>
            <Form.Control type="email"
              placeholder="Enter todo description" onChange={this.updateDesc} />
          </Form.Group>

          <Button className="mt-3" variant="primary" onClick={this.addTodo}>
            Add
          </Button>

          <Button className="mt-3" style={{ marginLeft: '15px' }} variant="danger" onClick={this.goBack}>
            Cancel
          </Button>
        </Form>

        <Link to="/home" id="redirectbtn"></Link>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
