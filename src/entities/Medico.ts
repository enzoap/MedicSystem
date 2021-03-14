import { Column, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Endereco from "./Endereco";
import EspecialidadeMedica from "./EspecialidadeMedica";

@Entity('medico')
export default class Medico {

    @PrimaryGeneratedColumn('increment')
    readonly id: number

    @Column()
    nome: string

    @Column()
    telefoneFixo: string

    @Column()
    telefoneCelular: string

    @Column()
    crm: string

    @Column('simple-array')
    especialidadeMedica: string[]

    @Column()
    enderecoId: number

    @OneToOne(() => Endereco, { cascade: ['update']})
    @JoinColumn({name: 'enderecoId'})
    endereco: Endereco

    @DeleteDateColumn()
    deletedDate: Date

}