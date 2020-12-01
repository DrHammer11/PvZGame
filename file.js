//I copied all this code
function ErrorMessage() {
    MessageContainer = document.createElement("div");
    MessageContainer.className = "MessageContainer";
    MessageContainer.style.display = "block";
    MessageContainer.id = "ErrorMessage";
    document.body.appendChild(MessageContainer);
    Message = document.createElement("div");
    Message.className = "Message";
    MessageContainer.appendChild(Message);
    CloseButton = document.createElement("span");
    CloseButton.className= "close";
    CloseButton.innerHTML = "&times;"
    CloseButton.onclick = function() {
        document.getElementById("ErrorMessage").remove();
    }
    Message.appendChild(CloseButton);
    MessageHeader = document.createElement("p");
    MessageHeader.className = "MessageHeader";
    MessageHeader.innerHTML = "Error";
    Message.appendChild(MessageHeader);
    MessageText = document.createElement("p");
    MessageText.className = "MessageText";
    MessageText.innerHTML = "Due to an expected error, the game cannot load as it does not exist. Thank you for your understanding.";
    Message.appendChild(MessageText);
}

function LoadMenu() {
    MessageContainer = document.createElement("div");
    MessageContainer.className = "MessageContainer";
    MessageContainer.style.display = "block";
    MessageContainer.id = "LoadMenu";
    document.body.appendChild(MessageContainer);
    Message = document.createElement("div");
    Message.className = "Message";
    Message.style.width = "30%";
    MessageContainer.appendChild(Message);
    CloseButton = document.createElement("span");
    CloseButton.className= "close";
    CloseButton.innerHTML = "&times;"
    CloseButton.onclick = function() {
        document.getElementById("LoadMenu").remove();
    }
    Message.appendChild(CloseButton);
    MessageHeader = document.createElement("p");
    MessageHeader.className = "MessageHeader";
    MessageHeader.innerHTML = "Welcome!";
    Message.appendChild(MessageHeader);
    var ngButton = document.createElement("button");
    ngButton.className = "MenuButton"
    ngButton.innerHTML = "New Game";
    ngButton.onclick = LoadGame;
    Message.appendChild(ngButton)
    var lgButton = document.createElement("button");
    lgButton.className = "MenuButton"
    lgButton.innerHTML = "Load Game";
    lgButton.onclick = ErrorMessage;
    Message.appendChild(lgButton)
    MessageText = document.createElement("p");
    MessageText.className = "MessageText";
    MessageText.innerHTML = "Note: This game uses local storage to store data.";
    Message.appendChild(MessageText);
}

function LoadGame() {
    MessageContainer = document.createElement("div");
    MessageContainer.className = "MessageContainer";
    MessageContainer.style.display = "block";
    MessageContainer.id = "LoadGame";
    document.body.appendChild(MessageContainer);
    Message = document.createElement("div");
    Message.className = "Message";
    Message.style.width = "30%";
    MessageContainer.appendChild(Message);
    CloseButton = document.createElement("span");
    CloseButton.className= "close";
    CloseButton.innerHTML = "&times;"
    CloseButton.onclick = function() {
        document.getElementById("LoadGame").remove();
    }
    Message.appendChild(CloseButton);
    MessageHeader = document.createElement("p");
    MessageHeader.className = "MessageHeader";
    MessageHeader.innerHTML = "Loading.. Please wait :trollface:";
    Message.appendChild(MessageHeader);
    LoadingBar = document.createElement('progress');
    LoadingBar.max = "100"
    LoadingBar.value = 0
    Message.appendChild(LoadingBar)
    setInterval(function(){ 
        if (Math.random() < LoadingBar.value/100) {
            LoadingBar.value-=1;
        }
        else {
            LoadingBar.value+=1;
        }; }, 500);

}

function StartGame() {
    //ErrorMessage()
    LoadMenu()
}
