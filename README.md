<div align="center">
    <picture>
	<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/5dbef0ff-ee5f-4e8f-8abd-9f57e3310cb9">
	<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/38058088-ac68-443e-9d63-94200c201759">
	<img width="400px" src="https://github.com/user-attachments/assets/5dbef0ff-ee5f-4e8f-8abd-9f57e3310cb9#gh-light-mode-only" alt="Speakeasy">
    </picture>
</div>
<br></br>

This repository contains a demonstration for [Speakeasy Contract Testing](https://www.speakeasy.com/product/api-testing) feature set. It contains:

* Sample OpenAPI Specification with the following API operations:
  * Create, read, update, and delete a user.
  * Create a drink.
* Pre-generated SDKs for supported test generation languages (without testing to start):
  * Go (native [`testing` package](https://pkg.go.dev/testing))
  * Python ([pytest](https://docs.pytest.org/))
  * TypeScript ([vitest](https://vitest.dev/))

Refer to the [testing documentation](https://speakeasy.com/docs/testing) for latest details about enabling and configuring the product.

## Demonstration

The goals of this demonstration are to show:

* How to enable OpenAPI Specification (OAS) based test generation and mock API server generation.
  * How existing OAS `example` and `examples` properties influence test generation, including multiple tests for a single operation.
  * How missing OAS examples are populated with realistic data when possible.
* How to run generated tests.
  * `speakeasy test`
  * `speakeasy run` with optional workflow configuration.
* How to add custom tests, including multiple step tests.

### Prerequisites

The following are prerequisites for running the demonstration locally:

* Must have [Speakeasy CLI](https://www.speakeasy.com/docs/create-client-sdks) installed and authenticated.
  * Must be authenticated with Speakeasy enterprise tier account (e.g. `speakeasy-self`).
* Must have relevant language(s) installed to successfully generate SDK and run testing:
  * [Go](https://go.dev/)
  * [Python](https://www.python.org/)
  * [TypeScript](https://www.typescriptlang.org/)
* Must have [Docker](https://docker.com) installed and running.

### Enable OAS Based Testing and Mock Server Generation

* Update the `{LANGUAGE}/.speakeasy/gen.yaml` configuration to enable testing and mock server generation:

```yaml
generation:
  # ... other configuration ...
  mockServer:
    disabled: false
  tests:
    generateNewTests: true
```

* Open a CLI terminal to the root directory of this repository.
* Run `speakeasy run` for the target language. After success, generated test files for each OAS operation will now be present:
  * Go: `go/tests/`
  * Python: `python/tests/`
  * TypeScript: `typescript/src/__tests__/`
* Open one of the generated test files to review how each test is written:
  * Instantiating SDK client with customizable server URL (defaults to mock API server).
  * Using the SDK client to call the OAS operation with any necessary request data.
  * Asserting against the SDK client response, including HTTP status code and response data.

### Compare OAS with Generated Tests

* Open `openapi.yaml` to compare the API definition to the generated tests.
* The `createUser` OAS operation response has OAS `example` properties for its data inside its referenced shared component (`components/schemas/User`). This data should be present in the language-specific test for that operation (e.g. `TestUsers_CreateUser` in Go).
* The `createDrink` OAS operation does not have OAS `example` properties for its data inside its referenced shared component (`components/schemas/Drink`). This data should be automatically generated in the language-specific test for that operation (e.g. `TestUsers_CreateDrink` in Go). The OAS operation does, however, have OAS `examples` properties. Each named example under `examples` will create additional language-specific tests for that operation (e.g. `TestUsers_CreateDrinkCreateBeer` and `TestUsers_CreateDrinkCreateCoffee` in Go).

### Run Tests

* Open a CLI terminal to the root directory of the repository.
* Run `speakeasy test` for the target language, e.g. `speakeasy test --target go`. Testing will automatically start the mock API server, call the language-specific testing commands, and stop the mock API server. Use `--verbose` flag to see actions/commands being ran.
* Update the `.speakeasy/workflow.yaml` configuration to optionally enable testing for `speakeasy run`:

```yaml
targets:
    LANGUAGE:
        # ... other configuration ...
        testing:
            enabled: true
```

* Run `speakeasy run` for the target language. The output should now include target testing as additional steps.

### Show Arazzo Implementation

* Review the generated `{LANGUAGE}/.speakeasy/tests.arazzo.yaml` configuration to show how language-specific testing is generated in a language-agnostic manner.

### Generate Custom Tests

* Update the `{LANGUAGE}/.speakeasy/tests.arazzo.yaml` configuration to include the following after all other configuration:

```yaml
  - workflowId: user-lifecycle
    steps:
      - stepId: create
        operationId: createUser
        requestBody:
          contentType: application/json
          payload: {"address": {"street": "456 Second St", "city": "San Diego", "state": "CA", "zip": "92104"}, "age": 32, "gender": "MALE", "name": "Trystan Crooks"}
        successCriteria:
          - condition: $statusCode == 200
          - condition: $response.header.Content-Type == application/json
          # - condition: $response.body#/address/street == '456 Second St'
          # - condition: $response.body#/address/city == 'San Diego'
          - condition: $response.body#/address/state == 'CA'
          - condition: $response.body#/address/zip == 92104
          - condition: $response.body#/age == 32
          - condition: $response.body#/gender == 'MALE'
            # - condition: $response.body#/name == 'Trystan Crooks'
        outputs:
          id: $response.body#/id
      - stepId: get
        operationId: getUser
        parameters:
          - name: id
            in: path
            value: $steps.create.outputs.id
        successCriteria:
          - condition: $statusCode == 200
          - condition: $response.header.Content-Type == application/json
          # - condition: $response.body#/address/street == '456 Second St'
          # - condition: $response.body#/address/city == 'San Diego'
          - condition: $response.body#/address/state == 'CA'
          - condition: $response.body#/address/zip == 92104
          - condition: $response.body#/age == 32
          - condition: $response.body#/gender == 'MALE'
            # - condition: $response.body#/name == 'Trystan Crooks'
        outputs:
          user: $response.body
          age: $response.body#/age
      - stepId: update
        operationId: updateUser
        parameters:
          - name: id
            in: path
            value: $steps.create.outputs.id
        requestBody:
          contentType: application/json
          payload: $steps.get.outputs.user
          replacements:
            - target: /address/zip
              value: 92103
            - target: /age
              value: $steps.get.outputs.age
        successCriteria:
          - condition: $statusCode == 200
          - condition: $response.header.Content-Type == application/json
          # - condition: $response.body#/address/street == '456 Second St'
          # - condition: $response.body#/address/city == 'San Diego'
          - condition: $response.body#/address/state == 'CA'
          - condition: $response.body#/address/zip == 92103
          - condition: $response.body#/age == 32
          - condition: $response.body#/gender == 'MALE'
            # - condition: $response.body#/name == 'Trystan Crooks'
        outputs:
          address: $response.body#/address
          gender: $response.body#/gender
          name: $response.body#/name
      - stepId: updateAgain
        operationId: updateUser
        parameters:
          - name: id
            in: path
            value: $steps.create.outputs.id
        requestBody:
          contentType: application/json
          payload: {"id": "$steps.create.outputs.id", "address": "$steps.update.address", "age": 33, "gender": "$steps.update.gender", "name": "$steps.update.name"}
        successCriteria:
          - condition: $statusCode == 200
          - condition: $response.header.Content-Type == application/json
          # - condition: $response.body#/address/street == '456 Second St'
          # - condition: $response.body#/address/city == 'San Diego'
          - condition: $response.body#/address/state == 'CA'
          - condition: $response.body#/address/zip == 92103
          - condition: $response.body#/age == 33
          - condition: $response.body#/gender == 'MALE'
            # - condition: $response.body#/name == 'Trystan Crooks'
      - stepId: delete
        operationId: deleteUser
        parameters:
          - name: id
            in: path
            value: $steps.create.outputs.id
        successCriteria:
          - condition: $statusCode == 200
    x-speakeasy-test-group: users
```

* Run `speakeasy run` for the target language.
* Review the new language-specific test for this custom test that performs create, read, update, and delete operations (e.g. `TestUsers_UserLifecycle` in Go). This test should be calling multiple SDK operations and passing response data to other requests.

## Further Reading

* [Speakeasy blog post](https://www.speakeasy.com/post/contract-testing-with-openapi) on our thoughts on API testing.
* [Speakeasy documentation](https://www.speakeasy.com/docs/testing) for contract testing features.
* [Official OpenAPI documentation on Arazzo](https://www.openapis.org/arazzo).
* [Speakeasy documentation](https://www.speakeasy.com/openapi/arazzo) for the Arazzo specification.
