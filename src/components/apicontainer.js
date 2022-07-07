import react from 'react';


class apiContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memes: []
        }
    }

    componentDidMount() {
        fetch
    }

    render() {
        return <Meme name="asd" />
    }
}

export default apiContainer;