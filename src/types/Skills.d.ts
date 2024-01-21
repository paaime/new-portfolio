interface ISkillItem {
  name: string;
  type: string;
  image: string;
}

export interface ISkill {
  title: string;
  skills: ISkillItem[];
}
