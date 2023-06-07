import * as React from 'react';
import { connect } from 'react-redux';
import { updateTodo } from "../redux-thunk/actions";
import { Link } from "react-router-dom";
import TodoTable from './TodoTable';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: sessionStorage.getItem("user")
        }
    }

    componentDidMount() {
        const loggedInUser = this.props.data.find(obj => {
            return obj.name === this.state.user;
        });
        this.setState({ loggedInUser: loggedInUser });
    }

    updateTodo = (index, title, description) => {
        let todos = this.state.loggedInUser.todos;
        todos[index] = { ...todos[index], title, description }
        this.props.updateTodo(todos);
    }

    deleteTodo = (index) => {
        let todos = this.state.loggedInUser.todos;
        todos.splice(index, 1)
        this.props.updateTodo(todos);
    }

    gotoAddTodo = () => {
        document.getElementById("redirectbtn").click();
    }

    render() {
        return (
            <div style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                {this.state.loggedInUser && this.state.loggedInUser.todos &&
                    <TodoTable todos={this.state.loggedInUser.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                }

                <Button variant="primary" onClick={this.gotoAddTodo}>Add new Todo</Button>
                <Link id="redirectbtn" to="/add"></Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.reduxThunk.data,
    isLoggedIn: state.reduxThunk.isLoggedIn,
});

const mapDispatchToProps = {
    updateTodo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
