import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePhoneBook1686474913069 implements MigrationInterface {
    name = 'UpdatePhoneBook1686474913069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`created_at\``);
    }
}
