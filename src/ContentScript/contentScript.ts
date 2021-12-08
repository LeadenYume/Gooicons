export { }

interface InjectNode {
    div: ChildNode;
    a: ChildNode;
}

function getInjectNode(node: ChildNode): InjectNode | undefined {
    let exit = false;
    let deep = 0;
    let currentNode = node;
    let result = undefined
    while (!exit && deep < 20) {
        deep++;
        if ((currentNode.nodeName == "SCRIPT" || currentNode.nodeName == "STYLE") && currentNode.nextSibling) {
            currentNode = currentNode.nextSibling;
        } else if (currentNode.nodeName == "H2" && currentNode.nextSibling) {
            currentNode = currentNode.nextSibling;
        } else if (currentNode.childNodes.length === 0 && currentNode.nextSibling) {
            currentNode = currentNode.nextSibling;
        } else if (currentNode.nodeName == "DIV" && currentNode.childNodes.length > 0 && currentNode.childNodes[0].nodeName == "A") {
            result = {
                div: currentNode,
                a: currentNode.childNodes[0]
            }
            exit = true;
        } else if (currentNode.childNodes.length > 0) {
            currentNode = currentNode.childNodes[0];
        } else {
            exit = true;
        }
    }
    return result;
}

async function work() {
    let rso = document.getElementById("rso");
    rso?.childNodes.forEach((child) => {
        if (child.nodeName !== "SCRIPT" && child.nodeName !== "STYLE") {
            let injectNode = getInjectNode(child);
            if (injectNode !== undefined) {
                let href = (injectNode.a as HTMLLinkElement).href.split('://')[1].split('/')[0];
                var newNode = document.createElement("img");
                newNode.height = 16;
                newNode.width = 16;
                newNode.src = "https://www.google.com/s2/favicons?domain=" + href;
                newNode.style.setProperty("position", "absolute");
                newNode.style.setProperty("left", "-27px");
                newNode.style.setProperty("top", "2px");
                newNode.appendChild(document.createTextNode("test"));
                injectNode.div.insertBefore(newNode, injectNode.a);
            }
        }
    })
}

chrome.storage.local.get("enabled", async function (value) {
    let enabled = value['enabled'];
    if (enabled) {
        work();
    }
});




