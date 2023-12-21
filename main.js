const APP_ID = "f65c5f3aeea47b8ae241104ebedc472";
const TOKEN =
  "007eJxTYAj837qMM/N76robmVzpwpIXty2cG5d2VsXS/KO1vkL0/j0KDJZpZqbJpmnGiampiSbmSRaJqUYmhoYGJqlJqSnJJuZG0YyNqQ2BjAwyd1OYGRkgEMRnYchNzMxjYAAALOMekg==";
const CHANNEL = "main";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

let localTracks = [];
let remoteUsers = {};
let nomeUser = "";

const forms = document.getElementById("forms");

if (forms != null) {
  forms.onsubmit = async (event) => {
    event.preventDefault();

    try {
        if(document.getElementById("nome2").value != null){
            nomeUser = document.getElementById("nome2").value;
        }
    } catch (error) {
        console.error("Error adding document: ", error);
    }

    document.getElementById("nome2").value = "";
  };
}

let joinAndDisplayLocalStream = async () => {
  client.on(`user-published`, handleUserJoined);

  let UID = await client.join(APP_ID, CHANNEL, TOKEN, null);

  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

  let player = `<div class="video-container" id="user-container-${UID}">
                    <div class="video-player" id="user-${UID}">
                    </div>
                    <div id="username">
                            ${nomeUser}
                    </div>
                </div>`;

  document
    .getElementById("video-streams")
    .insertAdjacentHTML("beforeend", player);

  localTracks[1].play(`user-${UID}`);

  await client.publish([localTracks[0], localTracks[1]]);
};

let joinStream = async () => {
  await joinAndDisplayLocalStream();
  document.getElementById("join-btn").style.display = "none";
  var form = document.getElementById("forms");
  if (form) {
    form.style.display = "none";
  }
  document.getElementById("logout").style.display = "none";
  document.getElementById("stream-controls").style.display = "flex";
};

let handleUserJoined = async (user, mediaType) => {
  remoteUsers[user.uid] = user;
  await client.subscribe(user, mediaType);

  if (mediaType === "video") {
    let player = document.getElementById(`user-container-${user.uid}`);
    if (player != null) {
      player.remove();
    }

    player = `<div class="video-container" id="user-container-${user.uid}">
                        <div class="video-player" id="user-${user.uid}">
                        </div>
                        <div id="username">
                            ${user.nomeUser}
                        </div>
                  </div>`;

    document
      .getElementById("video-streams")
      .insertAdjacentHTML("beforeend", player);

    user.videoTrack.play(`user-${user.uid}`);
  }

  if (mediaType === "audio") {
    user.audioTrack.play();
  }
};

let handleUserLeft = async (user) => {
  delete remoteUsers[user.uid];
  document.getElementById(`user-container-${user.uid}`).remove();
};

let leaveAndRemoveLocalStream = async () => {
  for (let i = 0; localTracks.length > i; i++) {
    localTracks[i].stop();
    localTracks[i].close();
  }

  await client.leave();
  document.getElementById("join-btn").style.display = "block";
  var form = document.getElementById("forms");
  if (form) {
    form.style.display = "flex";
  }
  document.getElementById("logout").style.display = "block";
  document.getElementById("stream-controls").style.display = "none";
  document.getElementById("video-streams").innerHTML = "";
};

let toggleMic = async (e) => {
  if (localTracks[0].muted) {
    await localTracks[0].setMuted(false);
    e.target.innerText = "Mic on";
    e.target.style.backgroundColor = "#6c117b";
  } else {
    await localTracks[0].setMuted(true);
    e.target.innerText = "Mic off";
    e.target.style.backgroundColor = "#EE4B2B";
  }
};

let toggleCamera = async (e) => {
  if (localTracks[1].muted) {
    await localTracks[1].setMuted(false);
    e.target.innerText = "Camera on";
    e.target.style.backgroundColor = "#6c117b";
  } else {
    await localTracks[1].setMuted(true);
    e.target.innerText = "Camera off";
    e.target.style.backgroundColor = "#EE4B2B";
  }
};

document.getElementById("join-btn").addEventListener("click", joinStream);
document
  .getElementById("leave-btn")
  .addEventListener("click", leaveAndRemoveLocalStream);
document.getElementById("mic-btn").addEventListener("click", toggleMic);
document.getElementById("camera-btn").addEventListener("click", toggleCamera);