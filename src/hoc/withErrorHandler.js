import React, { Component, Fragment } from "react";

import {Overlay,ErrorMsg,Text} from './style';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
     componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      },
      (error) => {
        this.setState({ error: error });
        return Promise.reject(error);
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
            this.setState({ error: error });
            return Promise.reject(error);
        }
      );
    }
    componentWillUnmount() {
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
