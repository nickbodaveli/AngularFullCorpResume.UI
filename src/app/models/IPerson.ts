export interface IPerson {
    id: string;
    usersId: string;
    name: string;
    about : string;
    lastName : string;
    email : string;
    skype : string;
    phone : string;
    website: string;
    workingExperiences: Array<IWorkingExperiences>;
    educations: Array<IEducations>;
    skills: Array<ISkills>;
}

export interface IWorkingExperiences {
    id: string;
    personsId: string;
    name:string;
    description : string;
    startDate : string;
    finishDate : string;
    isPresent : string;
}

export interface IEducations {
    id: string;
    personsId: string;
    name:string;
    description : string;
    startDate : string;
    finishDate : string;
    isPresent : string;
}

export interface ISkills {
    id: string;
    personsId: string;
    name:string;
}