import React from "react";
import { navigateTo } from "gatsby-link";
import FontAwesome from "react-fontawesome";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo("/thanks/"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter ph-form">
              <h1 className="has-text-weight-bold is-size-2 has-text-centered	">
                Submit A Question
              </h1>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    <h1 className="has-text-weight-bold is-size-6">Name</h1>
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input ph-input"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="John Doe"
                      />
                      <span className="icon is-small is-left">
                        <FontAwesome className="fas" style={{ color: "#4a4a4a" }} name="user" />
                      </span>
                    </p>
                  </label>
                </p>
                <p>
                  <label>
                    <h1 className="has-text-weight-bold is-size-6">Email</h1>
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input ph-input"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="hello@example.com"
                      />
                      <span className="icon is-small is-left">
                        <FontAwesome className="fas" style={{ color: "#4a4a4a" }} name="envelope" />
                      </span>
                    </p>
                  </label>
                </p>
                <p>
                  <label>
                    <h1 className="has-text-weight-bold is-size-6">Message</h1>
                    <p className="control">
                      <textarea
                        className="input ph-input ph-textarea"
                        type="email"
                        name="message"
                        onChange={this.handleChange}
                        cols="50"
                        placeholder="Really loving your podcast! :)"
                      />
                    </p>
                  </label>
                </p>
                <p>
                  <button className="ph-submit is-pulled-right" type="submit">
                    Send
                    <span className="icon is-small is-left">
                      <FontAwesome
                        className="fas"
                        style={{ marginLeft: "10" }}
                        name="paper-plane"
                      />
                    </span>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
