# reactor-testing

> Using `evrythng-cli`? You can use this functionality in a streamlined format
> with the 
> [`evrythng-cli-plugin-reactor-test`](https://github.com/evrythng/evrythng-cli-plugin-reactor-test)
> plugin.

This repository allows you to test your EVRYTHNG Reactor scripts on your local
machine, and simulates one of the possible types of events that a Reactor script
can receive.

See [_Reactor_](https://developers.evrythng.com/docs/reactor) in the EVRYTHNG
documentation to learn more about Reactor.

To test a single-file script, simply place it in `main.js` and check the 
`script` path in `config.json` is correct (for example, `./main.js`). To test a 
bundle script, use a local folder `bundle`, and set the `script` path to 
`./bundle/main.js`.


## How to use

1. `$ git clone https://github.com/evrythng/reactor-testing && cd reactor-testing`

2. Set up a `config.json` according to your needs:

    - `trustedAppApiKey` - The Trusted App API key.
    - `script` - Path to the main script file that contains the callbacks.
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
    - `realistic` - Be as realistic as possible, with log only shown when 
      `done()` is called, and less error handling.
    - `showRequests` - Print all requests and responses made by the 
      `evrythng-extended` SDK. Requires `realistic: false`.

3. `$ npm install && npm start`
