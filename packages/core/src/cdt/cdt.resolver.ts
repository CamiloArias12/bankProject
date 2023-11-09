import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CdtService } from "./cdt.service";
import { Cdt } from "./entities/cdt.entity";
import { CreateCdtInput } from "./dto/create-cdt.input";
import { UpdateCdtInput } from "./dto/update-cdt.input";
import { ViewCdt } from "./cdt-view.entity";

@Resolver(() => Cdt)
export class CdtResolver {
  constructor(private readonly cdtService: CdtService) {}

  @Mutation(() => Cdt)
  async createCdt(@Args("createCdtInput") createCdtInput: CreateCdtInput) {
    return this.cdtService.create(createCdtInput);
  }

  @Query(() => [ViewCdt])
  async findAllCdt() {
    return await this.cdtService.findAll();
  }
@Query(() => [ViewCdt])
  async findAllCdtByClient(
      @Args("identification") identification:number
  ): Promise<ViewCdt[]> {

    return await this.cdtService.findAllByClient(identification);
  }
  @Query(() => Cdt)
  async findOneCdt(@Args("id", { type: () => Int }) id: number) {
    return this.cdtService.findOne(id);
  }

 @Mutation(() => Boolean)
  updateCdt(
    @Args("inputCdt")
      inputUser:CreateCdtInput,
   @Args("id")
      id:number
  ) {
    return this.cdtService.update(id,inputUser);
  }

  @Mutation(() => Boolean)
   async deleteCdt(@Args("id", { type: () => Int }) id: number) {
    return this.cdtService.delete(id);
  }
}
