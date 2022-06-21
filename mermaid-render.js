function replace() {
    const list = document.querySelectorAll('pre');
    list.forEach(function(pre) {
        if (pre.children.length !== 1)
            return;
        const code = pre.querySelector('code');
        if (code === null)
            return;
        // Found <pre> element with a single <code> child

        let skip = true;

        // Pandoc: <pre class="mermaid"><code>...</code></pre>
        if (pre.getAttribute('class') === "mermaid")
            skip = false;

        // Bitbucket: <pre><code data-language="mermaid">...</code></pre>
        if (code.getAttribute('data-language') === "mermaid")
            skip = false;

        if (skip)
            return;

        // Create the mermaid-js <div class="mermaid"> element
        const div = document.createElement('div');
        div.className = "mermaid";
        div.textContent = code.textContent;
        // Replace the <pre> element
        pre.replaceWith(div);
    });
}

replace();
mermaid.initialize({});

const observer = new MutationObserver(function() {
    replace();
    mermaid.init();
});
observer.observe(document.body, {subtree: true, childList: true});
