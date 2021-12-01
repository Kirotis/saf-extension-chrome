const setDOMInfo = (roomName) =>
    (document.getElementById("roomName").textContent = roomName);

window.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true,
        },
        (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { from: "popup", subject: "DOMInfo" },
                setDOMInfo
            );
        }
    );
});

// const fn = () => {
//     return(
//         <section class="main">
//             <h2 class="main__title">SAF</h2>
//             <span class="main__room-name">
//                 Room name:
//                 <h3 id="roomName">Неизвестно</h3>
//             </span>
//         </section>
//     )
// }
// console.log(' :>> ', ReactDOM.render);
// ReactDOM.render(
//     fn(),
//     document.getElementById("root")
// );
