import { Injectable } from '@nestjs/common';

export interface ITeam {
  id: number,
  name: string,
  role: 'CTO' | 'CEO' | 'DHR' | 'COO' | 'UI Lead' | 'Front-end Lead' |'Back-end Lead' | 'Front-end Developer' | 'Back-end Developer' | 'UI Developer'
};
export const roles = ['CTO', 'CEO', 'DHR', 'COO', 'UI Lead', 'Front-end Lead', 'UI Developer', 'Back-end Lead', 'Front-end Developer', 'Back-end Developer'];

@Injectable()
export class AppService {
  team: Array<ITeam> = [
    {name: 'Nouman Ijaz', role: 'UI Lead', id: 1},
    {name: 'Usman K.', role: 'CTO', id: 2},
    {name: 'Nouman Pervaiz', role: 'Front-end Lead', id: 3},
    {name: 'Asad Ur Rehman', role: 'Back-end Lead', id: 4},
    {name: 'Ahmad Zulfiqar', role: 'Front-end Developer', id: 5},
    {name: 'Ch Usama', role: 'Back-end Developer', id: 6},
  ];

  getTeam(): Array<ITeam> {
    return this.team;
  }

  addNewTeamMember(newMember: ITeam): Array<ITeam> | { message: string } {
    if (!roles.includes(newMember.role)) { return { message: 'Unrecognized Role!' }; }
    if (newMember.name.length < 3) { return { message: 'Invalid name!' }; }

    newMember = { ...newMember, id: this.team.length + 1 };
    this.team.push(newMember);
    return this.team;
  }

  removeTeamMember(id: number): Array<ITeam> | { message: string } {
    if (!id) { return { message: 'Invalid team member id!'}; }
    const removeAbleIndex = this.team.findIndex(x => x.id === id);
    if (removeAbleIndex < 0) { return { message: 'Member not found!'}; }

    this.team = this.team.splice(removeAbleIndex, 1);

    return this.team;
  }

  updateMemberInfo(updatedMember: ITeam): Array<ITeam> | { message: string } {
    if (!updatedMember.id) { return { message: 'Invalid id!'}; }
    if (!updatedMember.name || updatedMember.name.length < 3) { return { message: 'Invalid name!'}; }
    if (!updatedMember.role || !roles.includes(updatedMember.role)) { return { message: 'Unrecognized Role!' }; }

    const updatingIndex = this.team.findIndex(x => x.id === updatedMember.id);
    if (updatingIndex < 0) { return { message: 'Member not found!'}; }

    this.team[updatingIndex] = updatedMember;

    return this.team;
  }
}
