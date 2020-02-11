import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientID:
          "234802781949-sja0lsrqnam9it3uaklmdmvn1gvb46lv.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;
