# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "openapi/models/operations";

let value: UpdateUserRequest = {
  id: "90d8257b-5a84-4510-97c3-dabf1bfa361b",
  user: {
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
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                | 90d8257b-5a84-4510-97c3-dabf1bfa361b               |
| `user`                                             | [components.User](../../models/components/user.md) | :heavy_check_mark:                                 | N/A                                                |                                                    |