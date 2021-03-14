import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('endereco')
export default class Endereco {

    @PrimaryGeneratedColumn('increment')
    readonly id: number

    @Column()
    cep: string

    @Column()
    logradouro: string

    @Column()
    complemento?: string

    @Column()
    bairro: string

    @Column()
    uf: string

    @Column()
    cidade: string
}