# Income-and-Expense-system

## how to Migration database (cmd)
### migration create
``` typeorm migration:create ./src/migration/User ```

### migration run

``` npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts ```

