const items = document.querySelectorAll("input[type=checkbox]");

console.log(items);

window.onload = function() {
    items.forEach(item => item.checked = false);
};

let lastChecked;

function check(e) {
    this.labels[0].classList.toggle("checked");

    let isBetween = false;

    if (this.checked && e.shiftKey) {
        items.forEach(item => {
            if (item === lastChecked || item === this) {
                isBetween = !isBetween;
            }

            if (isBetween) {
                item.checked = true;

            }

        });
    }

    lastChecked = this;
}

items.forEach(item => item.addEventListener("click", check));