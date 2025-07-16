<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
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

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.
```python
# Asynchronous Example
import asyncio
from openapi import SDK

async def main():
    async with SDK(
        api_key="<YOUR_API_KEY_HERE>",
    ) as sdk:

        res = await sdk.users.create_async(request={
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

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->