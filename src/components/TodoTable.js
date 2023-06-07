import * as React from 'react';
import Button from 'react-bootstrap/Button';

class TodoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editIndex: -1,
            editedTitle: '',
            editedDesc: '',
        };
    }

    makeRowEditable = (index) => {
        this.setState({ editIndex: index, editedTitle: this.props.todos[index].title, editedDesc: this.props.todos[index].description })
    }

    updateTodo = (index) => {
        this.props.updateTodo(index, this.state.editedTitle, this.state.editedDesc)
        this.setState({ editIndex: -1 })
    }

    deleteTodo = (index) => {
        this.props.updateTodo(index, this.state.editedTitle, this.state.editedDesc)
        this.props.deleteTodo(index)
        this.setState({ editIndex: -1 })
    }

    handleTitleChange = (e) => {
        this.setState({ editedTitle: e.target.value })
    }

    handleDescriptionChange = (e) => {
        this.setState({ editedDesc: e.target.value })
    }

    render() {
        return (
            <div className="mt-5">
                <table className="table table-striped" border={2}>
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.todos.map(({ title, description, currentdate }, index) => (
                            this.state.editIndex != index ? (
                                <tr key={index}>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td>{currentdate}</td>
                                    <td>
                                        <Button variant='btn btn-outline-primary' onClick={() => this.makeRowEditable(index)}><i className='fa-solid fa-edit' style={{ fontSize: '18px' }}></i></Button>
                                        <Button variant='btn btn-outline-danger' style={{ marginLeft: '10px' }} onClick={() => this.deleteTodo(index)}><i className='fa-solid fa-times' style={{ fontSize: '18px' }}></i></Button>
                                    </td>
                                </tr>
                            ) : (
                                <tr key={index}>
                                    <td><input type='text' value={this.state.editedTitle} onChange={this.handleTitleChange} /></td>
                                    <td><input type='text' value={this.state.editedDesc} onChange={this.handleDescriptionChange} /></td>
                                    <td>{currentdate}</td>
                                    <td><Button variant='btn btn-outline-success' onClick={() => this.updateTodo(index)}><i className='fa-solid fa-check' style={{ fontSize: '18px' }}></i></Button></td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoTable;
