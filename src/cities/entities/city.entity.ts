import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cities'})
export class City {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    name:string

    @Column({type: 'text', nullable: true })
    country:string

    @Column({type: 'boolean', default: true})
    isActive:boolean

}
