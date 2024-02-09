export function contactsPage() {
    const contacts = [ 
        ['address', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, cupiditate.'],
        ['phone', 'Lorem ipsum dolor sit amet.'],
        ['e-mail', 'Lorem ipsum dolor sit amet consectetur.'],
        ['city', 'Lorem, ipsum dolor.'] 
    ];
    const contactsBox = document.createElement('div');

    const list = document.createElement('ul');
    list.className = 'list';
    const title = document.createElement('h2');
    title.textContent = 'Contacts page';

    contacts.forEach(contact => {
        const el = document.createElement('li');
        const elTitle = contact[0];
        const elValue = contact[1];
        el.dataset.value = elValue;

        el.className = `element element_${elTitle}`;
        el.textContent = elTitle + ':' + ' ';

        list.append(el);
    })

    contactsBox.append(title, list);

    return contactsBox
}