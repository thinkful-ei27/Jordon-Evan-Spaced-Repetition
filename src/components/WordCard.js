import React from 'react';
import { connect } from 'react-redux';
function WordCard(props) {
  return <div>{props.words}</div>;
}

const mapStateToProps = state => ({
  words: state.words.words
});
export default connect(mapStateToProps)(WordCard);
