import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLyrics } from '../actions/getLyrics';
import styled from 'styled-components';


const Div = styled.div`
background-color: #C0C0C0;
border: 5px solid purple;
border-radius: 2px;`

const Div2 = styled.div`
color: palevioletred;
font-size: 25px;
`


const Music = (props) => {
    const { isFetching, err, song } = props
    useEffect(() => {
        props.getLyrics()
    }, []);

    if (err) {
        return <h2>We have an error{err}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching genres for you!</h2>;
    }
    
    const handleClick = () => {
        props.getLyrics()
    }

    return (
        <Div>
            <Div2>
                <h1>The genre you are looking for is: {song}</h1>
            </Div2>
            <button onClick={handleClick}>Get a new Genre!!</button>
        </Div>
    )

}

const mapStateToProps = state => {
    return {
    isFetching: state.isFetching,
    err: state.err,
    song: state.song
    };
};

export default connect(mapStateToProps, {getLyrics})(Music);
