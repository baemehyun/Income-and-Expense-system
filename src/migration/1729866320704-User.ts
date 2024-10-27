import { MigrationInterface, QueryRunner,Table, } from "typeorm";

export class User1729866320704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "user_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true, // Optional: Auto-increment ID
                        generationStrategy: "increment",
                    },
                    {
                        name: "username",
                        type: "varchar",
                        length:"50",
                        isUnique:true

                    },
                    {
                        name: "password",
                        type: "varchar",
                        length:"255"
                    },
                    {
                        name: "is_active",
                        type: "tinyint",
                        length: "1",
                        default: "1"
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
