// Class Component

import React, { useEffect, useState } from "react";

class WindowWidth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: typeof window !== "undefined" ? window.innerWidth : 0
        };
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div>
                <p>Window width: {this.state.width}</p>
            </div>
        )
    }
}


// Functional Component

function Windowidth () {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        function handleResize () {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);


    return (
        <div>
            <p>Window Width: {width}</p>
        </div>
    )
}