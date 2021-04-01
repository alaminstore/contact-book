import { CREACTE_CONTACT } from "./type";
export const addContact = (contact) => {
  return {
    type: CREACTE_CONTACT,
    payload: contact,
  };
};
