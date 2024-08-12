<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from openapi import SDK

s = SDK(
    api_key="<YOUR_API_KEY_HERE>",
)


res = s.users.create(id="90d8257b-5a84-4510-97c3-dabf1bfa361b", user={
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

if res is not None:
    # handle response
    pass
```

</br>

The same SDK client can also be used to make asychronous requests by importing asyncio.
```python
# Asynchronous Example
import asyncio
from openapi import SDK

async def main():
    s = SDK(
        api_key="<YOUR_API_KEY_HERE>",
    )
    res = await s.users.create_async(id="90d8257b-5a84-4510-97c3-dabf1bfa361b", user={
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
    if res is not None:
        # handle response
        pass

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->