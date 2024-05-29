
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Comment } from 'src/comment/schemas/comment.schema';
import { ExtrasInfos } from './extras_infos.schema';

//types pour Mongoose
export type AdDocument = HydratedDocument<Ad>;

@Schema({ timestamps: true })
export class Ad {
  //type avec majuscule
  @Prop({ type: Number, required: true })
  userId: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[]

  @Prop({ type: ExtrasInfos })
  extras_info: ExtrasInfos
}


export const AdSchema = SchemaFactory.createForClass(Ad);