# reactor-testing

This repository allows you to test your EVRYTHNG Reactor scripts on your local
machine, and simulates one of the possible types of events that a Reactor script
can receive.

See [_Reactor_](https://developers.evrythng.com/docs/reactor) in the EVRYTHNG
documentation to learn more about Reactor.


## How to use

1. `$ git clone https://github.com/evrythng/reactor-testing && cd reactor-testing`

2. Set up a `config.json` according to your needs:

    - `trustedAppApiKey` - The Trusted App API key.
    - `apiUrl` - The environment API URL.
    - `event` - The parameter passed to the script function. For example:

      ```
      "event": {
        "thng": ...,
        "changes": ...
      }
      ```

    - `function` - The type of function to simulate. For example, 
      `onActionCreated`.

3. `$ npm install && npm start`
