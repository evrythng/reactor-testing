# reactor-testing

This repository allows you to test your EVRYTHNG Reactor scripts on your local
machine, and simulates one of the possible types of events that a Reactor script
can receive.

See [_Reactor_](https://developers.evrythng.com/docs/reactor) in the EVRYTHNG
documentation to learn more about Reactor.


## How to use

1. `$ git clone https://github.com/evrythng/reactor-testing && cd reactor-testing`

2. Set up `config.json` according to your needs:

    - `apiKey` - The Trusted App API key.
    - `event` - Relative location of the JSON file describing the event to 
      simulate. For example:

      ```
      {
        "function": "onScheduledEvent",
        "event": {
          "foo": "bar"
        }
      }
      ```

    - `script` - Relative location of the Reactor script to be tested, 
      including the `function` in the file specified by `event`.

3. `$ npm install && node runner.js`


## Important Note

Make sure your callback returns a Promise! For example: 

```
function onScheduledEvent(event) {
  return new Promise((resolve, reject) => {
    logger.info('Running callback!');
    resolve();
  });
} 

module.exports.onScheduledEvent = onScheduledEvent;
```
