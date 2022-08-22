import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Author {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;
}