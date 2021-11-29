chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.from === "content" && msg.subject === "setRoomName") {
        console.log(`chrome.pageAction`, chrome.pageAction)
        chrome.pageAction.show(sender.tab.id);
    }
});
