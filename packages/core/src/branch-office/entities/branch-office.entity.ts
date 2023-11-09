import { ObjectType, Field, Int } from "@nestjs/graphql";
import { User } from "src/user/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class BranchOffice {
  
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.branch,{nullable:false,cascade:['insert','update','remove']})
  users: User[];
}
