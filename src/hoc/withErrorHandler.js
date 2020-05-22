import React, { Component, Fragment } from "react";

import { Overlay, ErrorMsg, Text } from "./style";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (req) => {
          this.setState({ error: null });
          return req;
        },
        (error) => {
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
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
    closeOverlay = () => {
      this.setState({ error: null });
    };
    getIdTokenOnExpiry = (token) => {
      const dataToPost = {
        grant_type: "refresh_token",
        refresh_token: token,
      };
      axios
        .post(
          "https://securetoken.googleapis.com/v1/token?key=AIzaSyAU_m_eq6oQBC5r68X2pcAH6zbl6WjWj8M",
          dataToPost
        )
        .then((res) => {
          const idToken = {
            idToken: res.data.id_token,
            refreshToken: res.data.refresh_token,
          };
          sessionStorage.setItem("token", JSON.stringify(idToken));
          this.props.onLoggingIn();
        });
    };
    render() {
      return (
        <Fragment>
          <Overlay show={this.state.error} onClick={this.closeOverlay}>
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
