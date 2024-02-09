export function aboutPage() {
    const aboutPage = document.createElement('div');
    const aboutPageTitle = document.createElement('h2');
    const aboutPageText = document.createElement('p');

    aboutPage.className = 'about-page';
    aboutPageTitle.className = 'about-page__title';
    aboutPageText.className = 'pages-text';

    aboutPageTitle.textContent = 'About page';
    aboutPageText.innerHTML = `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nam provident quae possimus totam veniam asperiores, vel corporis
    consequuntur molestias nihil amet magnam expedita officia dolorem 
    voluptatibus itaque porro repudiandae recusandae nulla corrupti quis?<br><br> 
    Repudiandae, alias vitae assumenda saepe, iusto ratione quod nesciunt 
    ut laborum eligendi quibusdam perferendis deleniti sed repellat tenetur 
    suscipit laudantium dicta eum cumque. Officia quibusdam porro hic vel illo 
    modi magni facere doloremque doloribus minus? Maiores voluptatum id velit 
    consectetur magni, assumenda obcaecati ab veniam praesentium nam, aliquid, 
    omnis nostrum ratione quia sunt doloribus iure provident accusantium doloremque.<br><br> 
    Voluptates reprehenderit rem qui id non asperiores? Perspiciatis facilis dolor optio 
    perferendis sed! Deleniti modi asperiores molestiae aperiam, pariatur velit sed beatae 
    a in dolorum officiis saepe soluta distinctio, fugit reprehenderit reiciendis, ex quis. 
    Eum dolorum doloribus quas quia numquam? Et iste asperiores, qui eos modi ex minima consequuntur 
    voluptatibus necessitatibus saepe autem libero odit accusamus sunt quia neque.
    `

    aboutPage.append(aboutPageTitle, aboutPageText);

    return aboutPage;
}