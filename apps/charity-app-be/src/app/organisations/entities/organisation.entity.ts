import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Organisation {
  @Field(() => String)
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  image!: string;

  @Field()
  stripePriceId!: string;

  @Field(() => Float)
  suggestedAmount!: number;

  @Field(() => Boolean)
  isFeatured!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
