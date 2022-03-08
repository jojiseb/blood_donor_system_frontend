import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='https://localhost:8080/api/v1' className='navbar-brand'>Blood Donor Management</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;