
export interface IList {
  list: {
    pagination: IListPagination;
    entries: IListEntries[];
  };
}

export interface IListPagination {
  count: number;
  hasMoreItems: boolean;
  totalItems: number;
  skipCount: number;
  maxItems: number;
}

export interface IListEntries {
  entry: IUser;
}

export interface IUser {
  id: string;
  enabled: boolean;
  firstName: string;
  lastName?: string;
  userStatus?: string;
  jobTitle?: string;
  statusUpdatedAt?: string;
  mobile?: string;
  emailNotificationsEnabled?: boolean;
  description?: string;
  telephone?: string;
  skypeId?: string;
  avatarId?: string;
  location?: string;
  company?: IUserCompany;
  email?: string;
}

export interface IUserCompany {
  organization: string;
  address1: string;
  address2: string;
  address3: string;
  postcode: string;
}
