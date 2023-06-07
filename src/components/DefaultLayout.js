import * as React from 'react';
import { connect } from 'react-redux';
import { logOut } from "../redux-thunk/actions";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class DefaultLayout extends React.Component {

    logout = async () => {
        await this.props.logOut();
        sessionStorage.removeItem("user");
        document.getElementById("redirectbtnlogout").click();
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse" style={{ backgroundColor: "#e3f2fd" }}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Todo App</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>{this.props.isLoggedIn &&
                                <>
                                    <i className='fa-solid fa-user' style={{ fontSize: '24px' }}></i>
                                    <label className='p-2'>{sessionStorage.getItem("user")}</label>
                                    <Button variant='btn btn-outline-danger' onClick={this.logout}>Logout</Button>
                                </>
                            }</li>
                        </ul>
                    </div>
                </nav>
                <Link to="/" id="redirectbtnlogout"></Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.reduxThunk.isLoggedIn,
});

const mapDispatchToProps = {
    logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
