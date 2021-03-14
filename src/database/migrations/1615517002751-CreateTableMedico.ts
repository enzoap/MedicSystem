import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMedico1615517002751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'medico',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '120'
                },
                {
                    name: 'telefoneFixo',
                    type: 'varchar'
                },
                {
                    name: 'crm',
                    type: 'varchar'
                },
                {
                    name: 'telefoneCelular',
                    type: 'varchar'
                },
                {
                    name: 'enderecoId',
                    type: 'int'
                },
                {
                    name: 'especialidadeMedica',
                    type: 'varchar'
                },
                {
                    name: 'deletedDate',
                    type: 'datetime',
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    name:'enderecoFk',
                    columnNames: ['enderecoId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'endereco',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }
            ]
        }))
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medico', true, true)
    }

}
