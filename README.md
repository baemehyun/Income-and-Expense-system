# Income-and-Expense-system

## Goal of this project 

to develop backend for Financial Record System

## Feature

- login
- token based authentication (Non jwt)
- CRUD
## how to Migration database (cmd)
### migration create
``` typeorm migration:create ./src/migration/User ```

### migration run

``` npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts ```

