# Users
(*users*)

## Overview

### Available Operations

* [create](#create)
* [get](#get) - Get User
* [update](#update) - Update User
* [delete](#delete) - Delete User

## create

### Example Usage

```python
from openapi import SDK

with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.users.create(request={
        "id": "90d8257b-5a84-4510-97c3-dabf1bfa361b",
        "name": "John Doe",
        "address": {
            "street": "123 Main St",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94107",
        },
        "age": 30,
        "gender": "MALE",
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [models.User](../../models/user.md)                                 | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CreateUserResponseBody](../../models/createuserresponsebody.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## get

Get User

### Example Usage

```python
from openapi import SDK

with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.users.get(id="90d8257b-5a84-4510-97c3-dabf1bfa361b")

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 | 90d8257b-5a84-4510-97c3-dabf1bfa361b                                |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.User](../../models/user.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## update

Update User

### Example Usage

```python
from openapi import SDK

with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.users.update(id="90d8257b-5a84-4510-97c3-dabf1bfa361b", user={
        "id": "90d8257b-5a84-4510-97c3-dabf1bfa361b",
        "name": "John Doe",
        "address": {
            "street": "123 Main St",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94107",
        },
        "age": 30,
        "gender": "MALE",
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 | 90d8257b-5a84-4510-97c3-dabf1bfa361b                                |
| `user`                                                              | [models.User](../../models/user.md)                                 | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.User](../../models/user.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## delete

Delete User

### Example Usage

```python
from openapi import SDK

with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    sdk.users.delete(id="90d8257b-5a84-4510-97c3-dabf1bfa361b")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 | 90d8257b-5a84-4510-97c3-dabf1bfa361b                                |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |