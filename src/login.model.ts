import { ApiProperty } from '@nestjs/swagger';

export class Login {
    @ApiProperty({ example: 'John' })
    username?: string;

    @ApiProperty({ example: 'Doe' })
    password?: string;
}