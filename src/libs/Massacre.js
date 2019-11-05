const Massacre = class {
    init(props = { name: '$M_app', app: this.initApp('app')}) {
        this.name = props.name;
        this.app = props.app;
        this.addToPage(this.app);
    }
    initApp(className = 'app') {
        const app = document.createElement('div');
        app.classList.add(className);
        this.initFeatures(app);
        return app;
    }
    initFeatures(app) {
        app.write = (msg = '') => {
            msg && typeof msg === 'string' ? app.textContent += msg : Error(`"${msg}" must be a string!!!`);
        }
        app.html = (htmlCode = '') => {
            htmlCode && typeof htmlCode === 'string' ? app.innerHTML += htmlCode : Error(`"${msg}" must be a string!!!`);
        } 
    }
    create(props = {tagName: 'div', className: '', id: '', children: []}) {
        const el = document.createElement(tagName);
        props.className != '' ? el.classList.add(props.className) : null;
        props.id != '' ? el.id = props.id : null;
        if(props.children) {
            this.children();
        }
    }
    addToPage(el) {
        document.body.appendChild(el);
    }
}

const $M = new Massacre();

console.log($M);

export default $M;