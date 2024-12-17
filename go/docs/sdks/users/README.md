# Users
(*Users*)

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

    res, err := s.Users.Create(ctx, "90d8257b-5a84-4510-97c3-dabf1bfa361b", components.User{
        ID: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
        Name: "John Doe",
        Address: components.Address{
            Street: openapi.String("123 Main St"),
            City: openapi.String("San Francisco"),
            State: openapi.String("CA"),
            Zip: openapi.String("94107"),
        },
        Age: 30,
        Gender: components.GenderMale,
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

| Parameter                                                | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |                                                          |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | 90d8257b-5a84-4510-97c3-dabf1bfa361b                     |
| `user`                                                   | [components.User](../../models/components/user.md)       | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |                                                          |

### Response

**[*operations.CreateUserResponse](../../models/operations/createuserresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |