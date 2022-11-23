export type UserType = {
  name: string;
};

export type TodoType = {
  task: string;
};

export type StatusMessage = {
  [key: number]: string;
  200: string;
  201: string;
  400: string;
  401: string;
  403: string;
  404: string;
  500: string;
};
