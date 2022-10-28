
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProduct {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
}