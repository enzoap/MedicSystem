import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertValuesEspecialidadeMedica1615517156558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('ALERGOLOGIA')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('ANGIOLOGIA')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('BUCO MAXILO')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('CARDIOLOGIA CLÍNICA')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('CARDIOLOGIA INFANTIL')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('CIRURGIA CABEÇA E PESCOÇO')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('CIRURGIA CARDÍACA')`)
        await queryRunner.query(`INSERT INTO especialidademedica (especialidade) VALUES ('CIRURGIA DE TÓRAX')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'ALERGOLOGIA'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'ANGIOLOGIA'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'BUCO MAXILO'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'CARDIOLOGIA CLÍNICA'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'CARDIOLOGIA INFANTIL'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'CIRURGIA CABEÇA E PESCOÇO'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'CIRURGIA CARDÍACA'`)
        await queryRunner.query(`DELETE FROM especialidademedica WHERE especialidade = 'CIRURGIA DE TÓRAX'`)
    }

}
