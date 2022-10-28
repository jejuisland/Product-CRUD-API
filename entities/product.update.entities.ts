
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProduct {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
}