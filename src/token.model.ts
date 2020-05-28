import { ApiProperty } from '@nestjs/swagger';

export class Token {

    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm...' })
    lastName?: string;
}