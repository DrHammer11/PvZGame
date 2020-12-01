if (!(window.innerWidth/window.innerHeight === 1440/732)) {
    var wc = document.getElementById("EverythingFitter")
    if (window.innerWidth < 1440) {
        wc.style.width = window.innerWidth
        wc.style.height = (window.innerWidth/(1440/732)).toString()+"px"
    }
}
var wc = document.getElementById("EverythingFitter")
wc.style.width = window.innerWidth.toString()+"px";
wc.style.height = (window.innerWidth/(1440/732)).toString()+"px";
function ErrorMessage() {
    wc = document.getElementById("EverythingFitter");
    MessageContainer = document.createElement("div");
    wc.appendChild(MessageContainer);
    MessageContainer.className = "MessageContainer";
    MessageContainer.style.display = "block";
    MessageContainer.id = "ErrorMessage";
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
    wc = document.getElementById("EverythingFitter");
    MessageContainer = document.createElement("div");
    wc.appendChild(MessageContainer);
    MessageContainer.className = "MessageContainer";
    MessageContainer.style.display = "block";
    MessageContainer.id = "LoadMenu";
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
    wc = document.getElementById("EverythingFitter");
    MessageContainer = document.createElement("div");
    wc.appendChild(MessageContainer);
    MessageContainer.className = "MessageContainer";
    MessageContainer.style.display = "block";
    MessageContainer.id = "LoadGame";
    Message = document.createElement("div");
    Message.className = "Message";
    Message.style.width = "25%";
    //Message.style.height = "55%";
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
    MessageHeader.innerHTML = "Loading.. Please wait";
    Message.appendChild(MessageHeader);
    TrollFace = document.createElement("img");
    TrollFace.src = "trollface.png"
    TrollFace.style.position = "static";
    Message.appendChild(TrollFace)
    MessageText = document.createElement("p");
    MessageText.className = "MessageText";
    MessageText.innerHTML = "Problem, user?";
    Message.appendChild(MessageText);
    LoadingBar = document.createElement('progress');
    LoadingBar.max = "100"
    LoadingBar.value = 0
    Message.appendChild(LoadingBar)
    setInterval(function(){ 
        if (Math.random() < LoadingBar.value/180) {
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


