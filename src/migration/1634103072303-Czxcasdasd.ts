import { MigrationInterface, QueryRunner } from 'typeorm';

export class Czxcasdasd1634103072303 implements MigrationInterface {
  name = 'Czxcasdasd1634103072303';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cvmaker1\`.\`profile\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`education\` varchar(255) NULL, \`skill\` varchar(255) NULL, \`sumary\` varchar(255) NULL, \`experience\` varchar(255) NULL, \`certifications\` varchar(255) NULL, \`answersFrist\` varchar(255) NULL, \`answerSencond\` varchar(255) NULL, \`answerThrird\` varchar(255) NULL, \`careerName\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cvmaker1\`.\`career\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`questionFrist\` varchar(255) NOT NULL, \`questionSencond\` varchar(255) NULL, \`questionThrird\` varchar(255) NULL, UNIQUE INDEX \`IDX_5519c2c1506f96cb2efb3e0d60\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cvmaker1\`.\`user\` (\`userId\` char(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`userId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cvmaker1\`.\`profile\` ADD CONSTRAINT \`FK_13c37b351baa879d1cc09487f0e\` FOREIGN KEY (\`careerName\`) REFERENCES \`cvmaker1\`.\`career\`(\`name\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cvmaker1\`.\`profile\` DROP FOREIGN KEY \`FK_13c37b351baa879d1cc09487f0e\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`cvmaker1\`.\`user\``,
    );
    await queryRunner.query(`DROP TABLE \`cvmaker1\`.\`user\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_5519c2c1506f96cb2efb3e0d60\` ON \`cvmaker1\`.\`career\``,
    );
    await queryRunner.query(`DROP TABLE \`cvmaker1\`.\`career\``);
    await queryRunner.query(`DROP TABLE \`cvmaker1\`.\`profile\``);
  }
}
