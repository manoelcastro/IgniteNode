import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangesInAvatarColumn1629250203560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'avatar',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'avatar',
      new TableColumn({ name: 'avatar', type: 'varchar' }),
    );
  }
}
