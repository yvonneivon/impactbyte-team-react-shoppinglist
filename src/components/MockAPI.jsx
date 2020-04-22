import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

export default class MockAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            product: "",
        };
    }

    componentDidMount = async () => {
        const url = "https://5e9fab2711b078001679ca71.mockapi.io/user";

        // fetching async await
        const response = await fetch(url);
        const result = await response.json();

        // set state
        this.setState((prevState) => {
            return {
                ...prevState,
                data: result,
                product: "",
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Mock API</h1>
                {this.state.data.length > 0 ? (
                    this.state.data.map((element) => {
                        return <div key={element.id}>{element.product},{element.price}</div>;
                    })
                ) : (
                    <div style={{ width: "200px" }}>
                        <Skeleton count={10} />
                    </div>
                )}
            </div>
        );
    }
}