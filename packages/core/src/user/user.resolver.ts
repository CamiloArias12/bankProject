import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user-inupt';
import { Auth } from './dto/enum-type';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

   @Query(() => User, { name: 'getUser' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
      console.log("Get  users",id)
    return await this.userService.findOne(id);
  }

   @Query(() => [User],{name:'getAllUsers'})
   async findAll(){
      console.log("Get all")
      return await this.userService.findAll();
   }
  
  @Mutation(() => Boolean)
  updateUser(
    @Args("inputUser")
      inputUser:CreateUserInput ,
   @Args("identification")
      identification:number
  ) {
    return this.userService.update(identification,inputUser);
  }
   
@Mutation(() => Auth)
  authentication(
    @Args("identification")
      identification:number,
   @Args("password")
      password:string
  ) {
    return this.userService.authentication(identification,password);
  }

   
 @Mutation(()=>Boolean)
  async deleteUser(@Args('identification', { type: () => Int }) identification: number) {
      return this.userService.delete(identification)
  }

  }
