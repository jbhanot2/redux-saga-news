import React from 'react';
import { connect } from 'react-redux';
import {getNews} from '../redux/action';

// third-party imports
import Button from 'react-bootstrap/Button'

let ButtonComponent = ({getNews}) => (
    <Button variant="primary" size="lg" block onClick={getNews}>
        Press To see Latest News
    </Button>
)

const mapDispatchToProps = {
    getNews: getNews
}
ButtonComponent = connect(null, mapDispatchToProps)(ButtonComponent);
export default ButtonComponent;