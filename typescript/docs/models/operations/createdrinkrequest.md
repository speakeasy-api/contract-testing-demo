# CreateDrinkRequest

## Example Usage

```typescript
import { CreateDrinkRequest } from "openapi/models/operations";

let value: CreateDrinkRequest = {
  id: "<id>",
  drink: {
    id: "<id>",
    type: "Coffee",
    price: 7151.89,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `drink`                                              | [components.Drink](../../models/components/drink.md) | :heavy_check_mark:                                   | N/A                                                  |