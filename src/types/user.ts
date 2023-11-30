type Repo = {
  name: string;
  id: number;
  description: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
};

export type UserProps = {
  avatar_url: string;
  login: string;
  name: string;
  id: number;
  location: string;
  followers: number;
  public_repos: number;
  repos: Repo[];
};
