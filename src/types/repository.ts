export interface IRepositoryData {
  items: [
    {
      id: number;
      full_name: string;
      description: string;
      forks: number;
      watchers: number;
      open_issues: number;
      owner: {
        avatar_url: string;
      };
    }
  ];
}
