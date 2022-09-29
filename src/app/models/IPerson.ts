export interface IPerson {
    id: string;
    usersId: string;
    name: string;
    experiences : IExperiences;
}

export interface IExperiences {
    id: string;
    personsId: string;
    workingExperiences: Array<IWorkingExperiences>
}

export interface IWorkingExperiences {
    id: string;
    experiencesId: string;
    name:string;
}