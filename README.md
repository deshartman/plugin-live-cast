# Twilio Livecast Plugin

The Twilio Livecast Flex plugin allows a pod or video caster to have a single pane of glass for all communication components of their cast in one environment. The vide casting is
built right into Flex as a pane, so you can start or stop casting as needed.

Viewer can then interact with you in their preferred way by sending SMS and WhatsApp messages to your Flex number or even call in to chat to you.

You have all the power of Flex to queue tasks, swap between different tasks and can even have support staff initially answe rand vet calls or messages. Gone are
the days of having complex PBX or EKTS systems for your station. Now you have a full powered, flexible communications environment (Flex) right in your browser alongside a powerful,
low latency broadcasting video service (Live).

## Setup

There are two components to the setup:

_Part 1. Twilio Live Service
Part 2. Flex plugin_

### Part 1 - Twilio Live Service

1. Clone the repo located here: https://github.com/deshartman/live-serverless

2. Make sure you are in the root directory and then update dependencies

```
npm install
```

3. Copy the .env.copy file to .env

```
cp .env.copy .env
```

4. Update the .env file with Account SID and an API Key/Secret pair.
   See "API Keys" section of this article for details: https://www.twilio.com/blog/better-twilio-authentication-csharp-twilio-api-keys

5. Deploy the service to Twilio Functions

```
twilio serverless:deploy
```

6. Once done, copy the Domain from the Deployments details output and note the two URLs bolded below. These are the Streamer and the Viewer URLs.

```
Deployment Details
Domain: live-serverless-XXXX-dev.twil.io
Service:
   live-serverless (ZSaaaaaaa)
Environment:
   dev (ZEddddd)
Build SID:
   ZBbbbbbbbb
Runtime:
   node12
View Live Logs:
   https://www.twilio.com/console/functions/editor/.....
Functions:
   https://live-serverless-XXXX-dev.twil.io/audienceToken
   https://live-serverless-XXXX-dev.twil.io/end
   https://live-serverless-XXXX-dev.twil.io/start
   https://live-serverless-XXXX-dev.twil.io/streamerToken
Assets:
   https://live-serverless-XXXX-dev.twil.io/assets/index.html
   *https://live-serverless-XXXX-dev.twil.io/audience.html*
   https://live-serverless-XXXX-dev.twil.io/audience.js
   https://live-serverless-XXXX-dev.twil.io/livePlayer/twilio-live-player-wasmworker-1-5-0.min.js
   https://live-serverless-XXXX-dev.twil.io/livePlayer/twilio-live-player-wasmworker-1-5-0.min.wasm
   https://live-serverless-XXXX-dev.twil.io/livePlayer/twilio-live-player.min.js
   *https://live-serverless-XXXX-dev.twil.io/streamer.html*
   https://live-serverless-XXXX-dev.twil.io/streamer.js
```

### Part 2 - Flex plugin

1. Clone this repo

2. Make sure you are in the root directory and then update dependencies

```
npm install
```

3. Copy the .env.copy file to .env

```
cp .env.copy .env
```

4. Update the .env file with Account SID and an API Key/Secret pair.
   See "API Keys" section of this article for details: https://www.twilio.com/blog/better-twilio-authentication-csharp-twilio-api-keys

5. Deploy the service to Twilio Functions

````
twilio serverless:deploy









Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
````

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex@beta
```

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.
