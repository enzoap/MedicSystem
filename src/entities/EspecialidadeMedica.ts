import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Medico from "./Medico";

@Entity('especialidademedica')
export default class EspecialidadeMedica {

    @PrimaryGeneratedColumn('increment')
    readonly id: number

    @Column()
    especialidade: string
}