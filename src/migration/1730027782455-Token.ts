import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class Token1730027782455 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tokens",
                columns: [
                    {
                        name: "token_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true, // Optional: Auto-increment ID
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "token",
                        type: "varchar",
                        length:"255"
                    },
                    {
                        name: "is_revoke",
                        type: "tinyint",
                        length: "1",
                        default: "0"
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP", 
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP", // Automatically update timestamp
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
