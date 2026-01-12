# wdio-cookie-test

A streamlined repository designed to validate and benchmark cookie handling behaviors when using WebDriver BiDi versus Classic mode.

## Setup

Ensure you have Node.js installed, then clone the repository and install dependencies:

```bash
yarn
```

## Running the tests

```bash
yarn test
```

## Configuration

The behavior of the tests depends on whether WebdriverIO is communicating via the Classic HTTP protocol or the newer BiDi (WebSocket) protocol.

In the `wdio.conf.ts` file, modify the `capabilities` object:

* **For WebDriver BiDi mode:**
    ```javascript
    'wdio:enforceWebDriverClassic': false
    ```
* **For Classic WebDriver mode:**
    ```javascript
    'wdio:enforceWebDriverClassic': true
    ```
