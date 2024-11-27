import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {

  constructor(private prisma: PrismaService){}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  async getProperties(id: number) {
    return await this.prisma.client.findUnique({
      where: { id },
      include: { properties: true }, // Include related properties
    });
  }
  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
