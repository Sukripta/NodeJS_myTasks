

import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseFilters } from "@nestjs/common";

interface Movie{
    id: number;
    title: string;
    rating: number;
    director?: string;
}

@Controller("/api/v1/movies")
export class MovieController{
    getHello(): any {
      throw new Error('Method not implemented.');
    }

    // movies:Array<Movie> = [];
    movies:Movie[] = [];

    constructor(){
        this.movies.push({title: "BlackWidow", id: 24, rating: 4.1});
        this.movies.push({title: "Hulk", id: 41, rating: 4.7});
        this.movies.push({title: "She Hulk", id: 71, rating: 3.7});
        this.movies.push({title: "Hawkeye", id: 127, rating: 4.4});
    }

    @Get()
    getAllMovies():Array<Movie>{
        return this.movies;
    }
    @Post()
    saveMovie(@Body() m:Movie):Movie{
        m.id=this.movies.length+1
        this.movies.push(m)
        return m;
    }

    @Delete(":id")
    deleteMovie(@Param("id") id:Number):Array<Movie>{
       
        let index=this.movies.findIndex(val=>val.id==id);
        this.movies.splice(index,1);
        return this.movies;
    }
}


