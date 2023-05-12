import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1683916201674 implements MigrationInterface {
  name = 'Migration1683916201674';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(100) NOT NULL, \`lastname\` varchar(100) NOT NULL, \`username\` varchar(100) NOT NULL, \`password\` varchar(100) NOT NULL, \`birthdate\` datetime NOT NULL, \`email\` varchar(200) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`video\` (\`id\` varchar(36) NOT NULL, \`url\` varchar(500) NOT NULL, \`title\` varchar(500) NOT NULL, \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, \`categoriaId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`categoria\` (\`id\` varchar(36) NOT NULL, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`updatedAt\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP COLUMN \`categoriaId\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`categoriaId\` varchar(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`description\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`thumbnailUrl\` varchar(255) NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`duration\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`categoryId\` varchar(36) NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`title\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`title\` varchar(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`url\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`url\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_74e27b13f8ac66f999400df12f6\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_98256272d59de0cc10af3ecdd00\` FOREIGN KEY (\`categoriaId\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_038baf265a6504529ffb1dcff0f\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_038baf265a6504529ffb1dcff0f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_98256272d59de0cc10af3ecdd00\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_74e27b13f8ac66f999400df12f6\``,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`url\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`url\` varchar(500) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`title\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`title\` varchar(500) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`categoryId\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`updated_at\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`created_at\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`duration\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP COLUMN \`thumbnailUrl\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP COLUMN \`description\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP COLUMN \`categoriaId\``,
    );
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`updatedAt\``);
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`categoriaId\` varchar(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`DROP TABLE \`categoria\``);
    await queryRunner.query(`DROP TABLE \`video\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
