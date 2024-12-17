# Drinks
(*Drinks*)

## Overview

### Available Operations

* [Create](#create)

## Create

### Example Usage

```go
package main

import(
	"context"
	"openapi"
	"openapi/models/components"
	"log"
)

func main() {
    ctx := context.Background()
    
    s := openapi.New(
        openapi.WithSecurity("<YOUR_API_KEY_HERE>"),
    )

    res, err := s.Drinks.Create(ctx, "<id>", components.Drink{
        ID: "<id>",
        Type: components.TypeCoffee,
        Price: 6384.24,
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.Object != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `drink`                                                  | [components.Drink](../../models/components/drink.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.CreateDrinkResponse](../../models/operations/createdrinkresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |