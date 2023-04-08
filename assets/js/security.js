// document.addEventListener("contextmenu", function(event){
//     event.preventDefault(); // Prevent default context menu behavior
//     alert("Collin Mwenda © Rights reserved"); // Display custom message
// });
document.addEventListener("contextmenu", function(event){
    event.preventDefault(); // Prevent default context menu behavior
    // Create a centered modal dialog box
    var modal = document.createElement("div");
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // Create the message element
    var message = document.createElement("div");
    message.style.backgroundColor = "#fff";
    message.style.padding = "20px";
    message.style.borderRadius = "5px";
    message.style.boxShadow = "0 0 10px skyblue";
    message.style.textAlign = "center";
    message.style.fontSize = "24px";
    message.style.fontWeight = "bold";
    message.textContent = "Collin Mwenda © Rights reserved";
    // Add the message element to the modal dialog box
    modal.appendChild(message);
    // Add the modal dialog box to the document
    document.body.appendChild(modal);
    // Add an event listener to the modal dialog box to close it when clicked
    modal.addEventListener("click", function(){
        document.body.removeChild(modal);
    });
});

