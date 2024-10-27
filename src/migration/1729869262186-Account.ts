import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Account1729869262186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "accounts",
                columns: [
                    {
                        name: "account_id",
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
                        name: "account_name",
                        type: "varchar",
                        length:"50"
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
