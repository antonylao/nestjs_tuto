
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Comment } from 'src/comment/schemas/comment.schema';

export class CarpoolInfo {
  @Prop({ type: Date })
  departure_time: Date
  arrivalTime: Date
}
//types pour Mongoose: pas besoin parce qu on ne va pas create or find 
// export type ExtrasInfosDocument = HydratedDocument<ExtrasInfos>;

@Schema({ _id: false })
export class ExtrasInfos {
  //type avec majuscule
  @Prop({ type: CarpoolInfo })
  carpool_info: string;

  @Prop({ type: String, required: true })
  tutoring_info: string;

  @Prop({ type: String, required: true })
  extra_curricular_outings_info: string;

  @Prop()
  extras_info: string
}


export const ExtrasInfosSchema = SchemaFactory.createForClass(ExtrasInfos);