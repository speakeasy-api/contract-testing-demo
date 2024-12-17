# User

## Example Usage

```typescript
import { User } from "openapi/models/components";

let value: User = {
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | 90d8257b-5a84-4510-97c3-dabf1bfa361b                     |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | John Doe                                                 |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `age`                                                    | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      | 30                                                       |
| `gender`                                                 | [components.Gender](../../models/components/gender.md)   | :heavy_check_mark:                                       | N/A                                                      | MALE                                                     |