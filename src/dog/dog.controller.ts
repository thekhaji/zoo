import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { query, Request, Response } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}
    
    @Get()
    public getHello():string{
        return this.dogService.getHello();
    }

    @Get("greet/:id")
    public introduce(
        @Param() params: string, 
        @Query() query:string): string{
        console.log("params:", params);
        console.log("query:", query);
        return this.dogService.introduce();
    }

    @Post('edit')
    public moddiffyDetail(@Body() body: any): string{
        console.log("body:", body);
        return this.dogService.modifyetail();
        
    }
}

