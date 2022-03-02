import { Injectable } from '@nestjs/common';
import { Group, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) { }

  create(data: Prisma.GroupCreateInput): Promise<Group> {
    return this.prisma.group.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GroupWhereUniqueInput;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput;
  }): Promise<Group[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.group.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(groupWhereUniqueInput: Prisma.GroupWhereUniqueInput): Promise<Group> {
    return this.prisma.group.findUnique({
      where: groupWhereUniqueInput
    });
  }

  async update(params: {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.GroupUpdateInput;
  }): Promise<Group> {
    const { where, data } = params;
    return this.prisma.group.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.GroupWhereUniqueInput): Promise<Group> {
    return this.prisma.group.delete({
      where,
    });
  }
}
