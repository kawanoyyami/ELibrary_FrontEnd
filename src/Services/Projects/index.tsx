import getUserProjects from '../Users/getUserProjects';

export { default as getProject } from './getProject';
export { default as getProjectsReports } from './getProjectReports';
export { default as updateProject } from './updateProject';
export { default as createProject } from './createProject';
export { default as deleteProject } from './deleteProject';

export const getAllProjects = async (userId: number) => {
  try {
    const projects = await getUserProjects(userId);
    return projects;
  } catch (e) {
    console.log(e);
  }

  return [{ Name: '', Id: -1 }];
};
