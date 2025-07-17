undefine

<!-- No SDK Installation -->
<!-- No SDK Example Usage -->
<!-- No SDK Available Operations -->
<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [Requirements](#requirements)
  * [Authentication](#authentication)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  |
| -------- | ------ | ------- |
| `apiKey` | apiKey | API key |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.users.create({
    id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
    age: 30,
    gender: "MALE",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`drinksCreate`](docs/sdks/drinks/README.md#create)
- [`usersCreate`](docs/sdks/users/README.md#create)
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete User
- [`usersGet`](docs/sdks/users/README.md#get) - Get User
- [`usersUpdate`](docs/sdks/users/README.md#update) - Update User

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.users.create({
    id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
    age: 30,
    gender: "MALE",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.users.create({
    id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
    age: 30,
    gender: "MALE",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `SDKError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4XX, 5XX    | \*/\*        |

```typescript
import { SDK } from "openapi";
import { SDKValidationError } from "openapi/models/errors";

const sdk = new SDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  let result;
  try {
    result = await sdk.users.create({
      id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
      name: "John Doe",
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
      },
      age: 30,
      gender: "MALE",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        sdkerror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof SDKError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognized or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "http://localhost:35123",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.users.create({
    id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
    age: 30,
    gender: "MALE",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "openapi";

const sdk = new SDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

d