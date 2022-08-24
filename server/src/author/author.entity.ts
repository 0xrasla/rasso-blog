import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Int, ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Author {
    @PrimaryGeneratedColumn("increment")
    @Field(type => Int!)
    id: number;

    @Column()
    @Field(type => String!)
    firstName: string;

    @Field(type => String!)
    @Column()
    lastName: string;

    @Field(type => String!)
    @Column({ default: true })
    isActive: boolean;
}