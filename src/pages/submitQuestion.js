import React from "react";
import { navigateTo } from "gatsby-link";

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
                    <input
                      className="ph-input"
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <h1 className="has-text-weight-bold is-size-6">Email</h1>
                    <input
                      className="ph-input"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <h1 className="has-text-weight-bold is-size-6">Message</h1>
                    <textarea className="ph-input" name="message" onChange={this.handleChange} />
                  </label>
                </p>
                <p>
                  <button className="ph-submit" type="submit">
                    Send
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
