import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class TinyUrl {
    
    @PrimaryColumn()
    key_url : String
    
    @Column({
        length: 1000,
    })
    original_url : String

}