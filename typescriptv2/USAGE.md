<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await sdk.users.create({
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
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->