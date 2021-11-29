chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.from === "content" && msg.subject === "setRoomName") {
        chrome.pageAction.show(sender.tab.id);
    }
});
