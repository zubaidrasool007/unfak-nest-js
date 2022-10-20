import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { AppService, ITeam } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTeam(): Promise<Array<ITeam> | { message: string }> {
    const response = await this.appService.getTeam();
    return response;
  }

  @Post()
  async addNewTeamMember(@Body() newMember: ITeam): Promise<Array<ITeam> | { message: string }> {
    const response = await this.appService.addNewTeamMember(newMember);
    if (response['message']) {
      throw new HttpException(response['message'], HttpStatus.BAD_REQUEST);
    }
    return response;
  }

  @Put()
  async updateMemberInfo(@Body() updatingMember: ITeam): Promise<Array<ITeam> | { message: string }> {
    const response = await this.appService.updateMemberInfo(updatingMember);
    if (response['message']) {
      throw new HttpException(response['message'], HttpStatus.BAD_REQUEST);
    }
    return response;
  }

  @Delete(':id')
  async removeTeamMember(@Param('id') id: number): Promise<Array<ITeam> | { message: string }> {
    const response = await this.appService.removeTeamMember(id);
    if (response['message']) {
      throw new HttpException(response['message'], HttpStatus.BAD_REQUEST);
    }
    return response;
  }

}
