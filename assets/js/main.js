function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
    this.capturaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) this.resolve();
        });
    };
    this.capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.removeChar();
            if (el.classList.contains('btn-eq')) this.resolve();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus(); // Pra nao bugar no enter
    };
    this.removeChar = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = '';
    this.resolve = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta invalida.');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta invalida.');
            return;
        }
    };
}
const calculadora = new Calculadora();
calculadora.inicia();