export type TAddJobContent = {
  fullname: string;
  setFullname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jobTitle: string;
  setJobTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  role: string;
  setRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitData: (e: React.SyntheticEvent) => void;
};

export type TSearchBar = {
  filtering: string;
  setFiltering: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TTableData = {
  fullname: string;
  jobTitle: string;
  email: string;
  role: string;
};
