export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  deleted: boolean;
  createdAt: number;
  address: ContactAddress;
}

export interface ContactAddress {
  street: string;
  city: string;
  country: string;
}
