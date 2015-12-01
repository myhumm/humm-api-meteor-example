# Humm Accounts Authentication Examples for humm meteor package 

This project contains basic demos showing the different OAuth 2.0 flows for [authenticating against the Humm Web API](http://developers.myhumm.com/web/auth-guide) using Humm meteor package (https://atmospherejs.com/humm/humm).

These examples cover:

* Authorization Code flow
* Client Credentials flow
* Implicit Grant flow

## Installation

This an exmaple meteor project, [Get started with Meteor](https://www.meteor.com/install) you can find instructions on how to install it and get started. 

## Running the examples

    $  meteor

Then, open `http:/127.0.0.1:3000` in a browser.

### Using your own credentials
The examples contains a working client ID and secret key. Note, however, that they might be rate limited if they are used frequently. If you are planning to create an application, we recommend you register your app and get your own credentials instead of using the ones in this project.

Go to [My Applications on Humm Developer](http://accounts.livingindietv.com/apps) and create your application.

For the examples, we registered these Redirect URIs:

* 127.0.0.1:3000/complete-auth (used for implicit & auth code flow)

Once you have created your app, replace the `client_id` and `client_secret` in the examples with the ones you get from My Applications.
