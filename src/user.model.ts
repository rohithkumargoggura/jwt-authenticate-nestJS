import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({ example: 'John' })
    firstName?: string;

    @ApiProperty({ example: 'Doe' })
    lastName?: string;
}