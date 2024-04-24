## Description

- You will be given some input, as it might be received from an unsafe boundary.
- The input contains both PII and non-PII data
- You must implement a parser/validator that translates the boundary rendition to an internal DSL
- The internal DSL should be passable to downstream components that need to reason about PII
  - Downstream components could include storage and logging services

## How to run

```sh
dotnet fsi parser.fsx
```