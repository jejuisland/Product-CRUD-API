import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    id: number;
    @ApiProperty({
        description: 'Name of products',
        type: 'string',
    })
    name: string;
    @ApiProperty()
    price: number;
}