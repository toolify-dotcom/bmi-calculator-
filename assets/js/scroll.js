class BackToTop {
    constructor(offset = 100) {
        this.offset = offset;
        this.createButton();
        this.addListeners();
    }

    createButton() {
        // Create the button element
        this.button = document.createElement('button');
        this.button.className = 'btn btn-primary position-fixed bottom-0 end-0 m-3 align-items-center justify-content-center d-none';
        this.button.id = 'backToTop';
        this.button.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';

        // Append to body
        document.body.appendChild(this.button);
    }

    addListeners() {
        window.addEventListener('scroll', () => this.toggleVisibility());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleVisibility() {
        if (window.scrollY > this.offset) {
            this.button.classList.remove('d-none');
            this.button.classList.add('d-flex');
        } else {
            this.button.classList.add('d-none');
        }
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}