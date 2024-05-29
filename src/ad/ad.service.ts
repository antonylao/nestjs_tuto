import { Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ad } from './schemas/ad.schema';

@Injectable()
export class AdService {

  // comme un AdRepository
  constructor(@InjectModel(Ad.name) private adModel: Model<Ad>) { }

  async create(createAdDto: CreateAdDto): Promise<Ad> {
    const createdAd = new this.adModel(createAdDto);
    return createdAd.save();
  }

  async findAll(): Promise<Ad[]> {
    return this.adModel.find();
  }

  async findOne(id: string) {
    return this.adModel.findOne({ _id: id })
  }

  update(id: number, updateAdDto: UpdateAdDto) { //findOneAndUpdate
    return `This action updates a #${id} ad`;
  }

  remove(id: number) { //findOneAndDelete
    return `This action removes a #${id} ad`;
  }
}
