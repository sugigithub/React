import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  cursor: pointer;
`;
const ErrorMsg = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 150px;
  width: 300px;
  border: 2px solid black;
  left: calc(50% - 150px);
  background-color: rgba(0, 0, 0, 0.7);
`;
const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 150px;
`;
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
          console.log();
        }
      );
    }
    componentWillUmMount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    closeOverlay = () =>{
        this.setState({error:null})
    }
    render() {
      return (
        <Fragment>
          <Overlay show={this.state.error} onClick = {this.closeOverlay}>
            <ErrorMsg>
              <Text>Something went wrong</Text>
            </ErrorMsg>
          </Overlay>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
