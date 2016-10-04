# reactor-testing

This repository allows you to test your EVRYTHNG Reactor scripts on your local
machine, and simulates one of the possible types of events that a Reactor script
can receive.

See [_Reactor_](https://developers.evrythng.com/docs/reactor) in the EVRYTHNG
documentation to learn more about Reactor.


## How to use

1. `$ git clone https://github.com/evrythng/reactor-testing`

2. `$ cd reactor-testing`

3. Insert your Reactor script into the corresponding section of `script.js`.

4. Insert your Operator API key in `runner.js` as the value of 
   `OPERATOR_API_KEY`.

5. Choose the type of event to simulate, and the file to be used as that event
   object at the top of `runner.js`. This file must contain valid values for the 
  various entity IDs involved.

6. `$ npm install && node runner.js`
