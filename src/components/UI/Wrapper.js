import './Wrapper.css';
const Wrapper = (props) => {
  return <ul id="concepts">{props.children}</ul>;
};

export default Wrapper;
