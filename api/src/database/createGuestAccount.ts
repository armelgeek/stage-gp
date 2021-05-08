import { Comment, Issue, Project, User } from 'entities';
import { ProjectCategory } from 'constants/projects';
import { IssueType, IssueStatus, IssuePriority } from 'constants/issues';
import { createEntity } from 'utils/typeorm';

const seedUsers = (): Promise<User[]> => {
  const users = [
    createEntity(User, {
      email: 'rick@jira.guest',
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    }),
    createEntity(User, {
      email: 'yoda@jira.guest',
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    }),
    createEntity(User, {
      email: 'gaben@jira.guest',
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    }),
  ];
  return Promise.all(users);
};

const seedProject = (users: User[]): Promise<Project> =>
  createEntity(Project, {
    name: 'singularity 1.0',
    url: 'https://www.atlassian.com/software/jira',
    description:
      'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
    category: ProjectCategory.SOFTWARE,
    users,
  });

const seedIssues = (project: Project): Promise<Issue[]> => {
  const { users } = project;

  const issues = [
    createEntity(Issue, {
      title: 'This is an issue of type: Task.',
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      description: `Your teams can collaborate in Jira applications by breaking down pieces of work into issues. Issues can represent tasks, software bugs, feature requests or any other type of project work.</p><p><br></p><h3>Jira Software&nbsp;(software projects) issue types:</h3><p><br></p><h1><strong>Bug </strong><span style="background-color: initial;">🐞</span></h1><p>A bug is a problem which impairs or prevents the functions of a product.</p><p><br></p><h1><strong>Story </strong><span style="color: rgb(51, 51, 51);">📗</span></h1><p>A user story is the smallest unit of work that needs to be done.</p><p><br></p><h1><strong>Task </strong><span style="color: rgb(51, 51, 51);">🗳</span></h1><p>A task represents work that needs to be done.</p>`,
      estimate: 8,
      timeSpent: 4,
      reporterId: users[1].id,
      project,
      users: [users[0]],
    }),
    createEntity(Issue, {
      title: "Click on an issue to see what's behind it.",
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.LOW,
      listPosition: 2,
      description: "refers to a single work item of any type or size that is tracked from",
      estimate: 5,
      timeSpent: 2,
      reporterId: users[2].id,
      project,
      users: [users[0]],
    }),
    createEntity(Issue, {
      title: 'Try dragging issues to different columns to transition their status.',
      type: IssueType.STORY,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 3,
      description: "An issue's status indicates its current place in the project's workflow. ",
      estimate: 15,
      timeSpent: 12,
      reporterId: users[1].id,
      project,
    }),
    createEntity(Issue, {
      title: 'You can use rich text with images in issue descriptions.',
      type: IssueType.STORY,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.LOWEST,
      listPosition: 4,
      description: "🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢",
      estimate: 4,
      timeSpent: 4,
      reporterId: users[0].id,
      project,
      users: [users[2]],
    }),
    createEntity(Issue, {
      title: 'Each issue can be assigned priority from lowest to highest.',
      type: IssueType.TASK,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGHEST,
      listPosition: 5,
      description: "An issue's priority indicates its relative importance.",
      estimate: 4,
      timeSpent: 1,
      reporterId: users[2].id,
      project,
    }),
    createEntity(Issue, {
      title: 'Each issue has a single reporter but can have multiple assignees.',
      type: IssueType.STORY,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGH,
      listPosition: 6,
      description:'Each issue has a single reporter but can have multiple assignees.',
      estimate: 6,
      timeSpent: 3,
      reporterId: users[1].id,
      project,
      users: [users[1], users[2]],
    }),
    createEntity(Issue, {
      title:
        'You can track how many hours were spent working on an issue, and how many hours remain.',
      type: IssueType.TASK,
      status: IssueStatus.INPROGRESS,
      priority: IssuePriority.LOWEST,
      listPosition: 7,
      description: "Before you start work on an issue, you can set a time or other type",
      estimate: 12,
      timeSpent: 11,
      reporterId: users[0].id,
      project,
    }),
    createEntity(Issue, {
      title: 'Try leaving a comment on this issue.',
      type: IssueType.TASK,
      status: IssueStatus.DONE,
      priority: IssuePriority.MEDIUM,
      listPosition: 7,
      description: "Adding comments to an issue is a useful way to record additional detail about an issue, and collaborate with team members. Comments are shown in the&nbsp;<strong>Comments</strong>&nbsp;section",
      estimate: 10,
      timeSpent: 2,
      reporterId: users[0].id,
      project,
      users: [users[1]],
    }),
  ];
  return Promise.all(issues);
};

const seedComments = (issues: Issue[], users: User[]): Promise<Comment[]> => {
  const comments = [
    createEntity(Comment, {
      body: 'An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.',
      issueId: issues[0].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: 'Autumn moonlight-\na worm digs silently\ninto the chestnut.',
      issueId: issues[1].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: 'In the twilight rain\nthese brilliant-hued hibiscus -\nA lovely sunset.',
      issueId: issues[2].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: 'A summer river being crossed\nhow pleasing\nwith sandals in my hands!',
      issueId: issues[3].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: "Light of the moon\nMoves west, flowers' shadows\nCreep eastward.",
      issueId: issues[4].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: 'In the moonlight,\nThe color and scent of the wisteria\nSeems far away.',
      issueId: issues[5].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: 'O snail\nClimb Mount Fuji,\nBut slowly, slowly!',
      issueId: issues[6].id,
      userId: users[2].id,
    }),
    createEntity(Comment, {
      body: 'Everything I touch\nwith tenderness, alas,\npricks like a bramble.',
      issueId: issues[7].id,
      userId: users[2].id,
    }),
  ];
  return Promise.all(comments);
};

const createGuestAccount = async (): Promise<User> => {
  const users = await seedUsers();
  const project = await seedProject(users);
  const issues = await seedIssues(project);
  await seedComments(issues, project.users);
  return users[2];
};

export default createGuestAccount;
