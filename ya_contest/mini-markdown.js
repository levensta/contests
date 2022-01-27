var ex = "= head\n" +
    "\n" +
    "text ((https://ya.ru link)) text.\n" +
    "\n" +
    "* item\n" +
    "* item\n";

ex = ex.replace(/^= (.*)$/gm, "<h1>$1</h1>")
    .replace(/\(\((.*) (.*)\)\)/gm, "<a href=\"$1\">$2</a>")
    .replace(/(^[A-Za-z].*(?:\n[A-Za-z].*)*)/gm, "<p>$1</p>")
    .replace(/(^\* (.*)$)/gm, "<li>$2</li>")
    .replace(/\n(<li>(.+)((\r?\n.+)*))\n/gm, "\n<ul>\n$1\n</ul>\n");

// let str = ex.split("\n").join("");

console.log(ex);