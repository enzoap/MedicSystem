import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableEndereco1615498595097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'endereco',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true
                },
                {
                    name: 'cep',
                    type: 'varchar'
                },
                {
                    name: 'logradouro',
                    type: 'varchar'
                },
                {
                    name: 'complemento',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'bairro',
                    type: 'varchar'
                },
                {
                    name: 'uf',
                    type: 'varchar'
                },
                {
                    name: 'cidade',
                    type: 'varchar'
                }
                
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('endereco')
    }

}
