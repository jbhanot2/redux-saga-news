import React from 'react';
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};

const rowStyle = {
    margin: '60px'
};
  
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}

let NewsItem = ({ article }) => (
    article ?
    <Row style={rowStyle}>
        {article.map(item => (
             <Col xs={12} md={6}>
                <div>
                    <h1>{item.title}</h1>
                    <img style={imgStyle} src={item.urlToImage} alt="" />
                    <h4>{item.description}</h4>
                    <a href={item.url} target="_blank">READ MORE</a>
                </div>
            </Col>
        ))}
    </Row>
:
    null
);

const mapStateToProps = (state) => ({
    article: state.news,
})

NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;