import { Controller, Get, Param } from '@nestjs/common';

@Controller('account/savings')
export class SavingsController {
    constructor(){
        console.log('This is savings controller');
        
    }

    @Get(":accnum")
    miniStatement(@Param("accnum") accnum:string){
        return {
            accnum: accnum,
            bal: 9640000,
            date: new Date().toLocaleString()
        }
    }


}