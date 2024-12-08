import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateCityDto {
    @ApiProperty({
        example: 'Chennai',
        required: true
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        example: 'India',
        required: true
    })
    @IsNotEmpty()
    country: string

    isActive: boolean
}
