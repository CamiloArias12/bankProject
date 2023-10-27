import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CdtService } from './cdt.service';
import { Cdt } from './entities/cdt.entity';
import { CreateCdtInput } from './dto/create-cdt.input';
import { UpdateCdtInput } from './dto/update-cdt.input';

@Resolver(() => Cdt)
export class CdtResolver {
  constructor(private readonly cdtService: CdtService) {}

  @Mutation(() => Cdt)
  createCdt(@Args('createCdtInput') createCdtInput: CreateCdtInput) {
    return this.cdtService.create(createCdtInput);
  }

  @Query(() => [Cdt], { name: 'cdt' })
  findAll() {
    return this.cdtService.findAll();
  }

  @Query(() => Cdt, { name: 'cdt' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cdtService.findOne(id);
  }

  @Mutation(() => Cdt)
  updateCdt(@Args('updateCdtInput') updateCdtInput: UpdateCdtInput) {
    return this.cdtService.update(updateCdtInput.id, updateCdtInput);
  }

  @Mutation(() => Cdt)
  removeCdt(@Args('id', { type: () => Int }) id: number) {
    return this.cdtService.remove(id);
  }
}
