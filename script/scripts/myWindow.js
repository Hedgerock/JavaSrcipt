export class MyWindow {

    create () {
        const myWindow = document.createElement('div');
        myWindow.className = 'my-window'

        document.body.append(myWindow);

        return myWindow
    }
}