import { Controller, Get, Post, Req } from '@nestjs/common';
import { time } from 'console';
import { Request } from 'express';

@Controller('loan/home')
export class HomeController {
    constructor(){
        console.log("This is home controller");
        
    }

    @Get('/details')
    details(){
        return("This is home loan dept");
    }

    @Get("details/:city")
    cityDetails(@Req() req:Request){
        // return "Show home loan details for "+req.params.city;
        return {
            city: req.params.city,
            loan: {
                amount: 100000,
                duration: 15,
                roi: 17
            }
        }
    }

    @Post()
    applyLoan(){
        return("User applied for loan")
    }
}
