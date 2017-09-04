# Alexa Proxy (NodeJS)

NodeJS script that works as a proxy between Amazon Alexa in the cloud and a local running smart home server consuming JSON (e.g. Home Assistant).

* Supports multiple skill<->endpoint configurations.
* You can send credentials using custom headers.

## Installation

* First install AWS CLI and set up credentials.

```bash
npm install
```

## Configuration

Rename config.sample.yml to config.yml.

Whithin this file, you can configure

* Endpoints
* Custom headers

## Deploy

```bash
grunt
```

Then party like there's no tomorrow.
