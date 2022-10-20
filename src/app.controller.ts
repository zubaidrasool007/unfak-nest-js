import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AppService, ITeam } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTeam(): Array<ITeam> | { message: string } {
    return this.appService.getTeam();
  }

  @Post()
  addNewTeamMember(@Body() newMember: ITeam): Array<ITeam> | { message: string } {
    return this.appService.addNewTeamMember(newMember);
  }

  @Put()
  updateMemberInfo(@Body() updatingMember: ITeam): Array<ITeam> | { message: string } {
    return this.appService.updateMemberInfo(updatingMember);
  }

  @Delete(':id')
  removeTeamMember(@Param('id') id: number): Array<ITeam> | { message: string } {
    return this.appService.removeTeamMember(id);
  }

}
