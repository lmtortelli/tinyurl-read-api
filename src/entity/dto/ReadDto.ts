import { IsUrl, IsHash } from 'class-validator'

export class ReadDto {

    @IsHash("md5")
    keyUrl : String;
    
}