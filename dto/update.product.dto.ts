import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
    @ApiProperty({
        description: 'Name of products',
        type: 'string',
    })
    name: string;
    @ApiProperty()
    price: number;
}