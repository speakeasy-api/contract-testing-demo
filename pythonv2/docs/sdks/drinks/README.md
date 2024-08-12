# Drinks
(*drinks*)

### Available Operations

* [create](#create)

## create

### Example Usage

```python
from openapi import SDK

s = SDK(
    api_key="<YOUR_API_KEY_HERE>",
)


res = s.drinks.create(id="<value>", drink={
    "id": "<id>",
    "name": "Coffee",
    "price": 4893.82,
})

if res is not None:
    # handle response
    pass

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

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |
