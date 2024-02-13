import { contacts } from "../data.js";
import { createEl } from "../utils.js";

export function contactsPage() {
    const contactsBox = createEl('', 'div');
    const list = createEl('list', 'ul');
    const title = createEl('contacts-box__title', 'h2', 'Contacts page');

    contacts.forEach(contact => {
        const elTitle = contact[0];
        const elValue = contact[1];

        const el = createEl(`element element_${elTitle}`, 'li', `${elTitle}: `);

        el.dataset.value = elValue;
        list.append(el);
    })

    contactsBox.append(title, list);

    return contactsBox
}