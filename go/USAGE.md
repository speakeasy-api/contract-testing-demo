<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
	"context"
	"log"
	"openapi"
	"openapi/models/components"
)

func main() {
	ctx := context.Background()

	s := openapi.New(
		openapi.WithSecurity("<YOUR_API_KEY_HERE>"),
	)

	res, err := s.Users.Create(ctx, components.User{
		ID:   "90d8257b-5a84-4510-97c3-dabf1bfa361b",
		Name: "John Doe",
		Address: components.Address{
			Street: openapi.String("123 Main St"),
			City:   openapi.String("San Francisco"),
			State:  openapi.String("CA"),
			Zip:    openapi.String("94107"),
		},
		Age:    30,
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
<!-- End SDK Example Usage [usage] -->