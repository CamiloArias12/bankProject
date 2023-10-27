import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BranchOfficeService } from './branch-office.service';
import { BranchOffice } from './entities/branch-office.entity';
import { CreateBranchOfficeInput } from './dto/create-branch-office.input';
import { UpdateBranchOfficeInput } from './dto/update-branch-office.input';

@Resolver(() => BranchOffice)
export class BranchOfficeResolver {
  constructor(private readonly branchOfficeService: BranchOfficeService) {}

  @Mutation(() => BranchOffice)
  createBranchOffice(@Args('createBranchOfficeInput') createBranchOfficeInput: CreateBranchOfficeInput) {
    return this.branchOfficeService.create(createBranchOfficeInput);
  }

  @Query(() => [BranchOffice], { name: 'branchOffice' })
  findAll() {
    return this.branchOfficeService.findAll();
  }

  @Query(() => BranchOffice, { name: 'branchOffice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.branchOfficeService.findOne(id);
  }

  @Mutation(() => BranchOffice)
  updateBranchOffice(@Args('updateBranchOfficeInput') updateBranchOfficeInput: UpdateBranchOfficeInput) {
    return this.branchOfficeService.update(updateBranchOfficeInput.id, updateBranchOfficeInput);
  }

  @Mutation(() => BranchOffice)
  removeBranchOffice(@Args('id', { type: () => Int }) id: number) {
    return this.branchOfficeService.remove(id);
  }
}
