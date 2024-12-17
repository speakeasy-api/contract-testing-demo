# Drinks
(*drinks*)

## Overview

### Available Operations

* [create](#create)

## create

### Example Usage

```python
from openapi import SDK

with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.drinks.create(id="<id>", drink={
        "id": "<id>",
        "type": "Coffee",
        "price": 6384.24,
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `drink`                                                             | [models.Drink](../../models/drink.md)                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CreateDrinkResponseBody](../../models/createdrinkresponsebody.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |