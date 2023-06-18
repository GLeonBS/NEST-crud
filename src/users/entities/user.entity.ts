import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {

    @Prop({required: true})
    name: String

    @Prop()
    cpf: String

    @Prop()
    age: number

    @Prop({required: true})
    email: String
}

export const UserSchema = SchemaFactory.createForClass(User)
