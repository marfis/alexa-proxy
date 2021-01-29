# Alexa Proxy (NodeJS)

NodeJS lambda that works as a proxy between Amazon Alexa and some machine running smart home server consuming JSON (e.g. Home Assistant).

* Supports multiple skill<->endpoint configurations.
* You can send credentials using custom headers.

## Installation

* First install AWS CLI and set up credentials.

```bash
npm install
```

## Configuration

Rename config.sample.yml to config.yml.

Within this file, you can configure

* Endpoint
* Custom headers

## Deploy

```bash
grunt
```

Then party like there's no tomorrow.
