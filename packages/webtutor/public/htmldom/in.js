$(document).ready(function() {
  $("[data-toggle=\"tooltip\"]").tooltip();
  //检测是否全屏,全屏的话隐藏导航栏
  setInterval(() => {
    const isFullScreen =
      document.isFullScreen ||
      document.mozIsFullScreen ||
      document.webkitIsFullScreen;
    if (isFullScreen) {
      $("#webFullScreen").hide();
      // document.getElementById("webFullScreen").style.display = "none";
      document.getElementById("exitWebFullScreen").style.display = "inline";
    } else {
      document.getElementById("webFullScreen").style.display = "inline";
      $("#exitWebFullScreen").hide();
    }
  }, 800);
  //保存用户id到localstorage,(相当于原来的cookie)如果id存在则定义输入框roomname为id,保存密码功能类似
  const up = localStorage.getItem("dedvl_nwysp_username");
  if (up) {
    document.getElementById("userId").value = up;
  }
  //浏览器获取媒体信息,有媒体就关闭esayrtc的调试模式
  navigator.getUserMedia ||
  (navigator.getUserMedia =
    navigator.mozGetUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.msGetUserMedia);
  if (navigator.getUserMedia) {
    easyrtc.enableDebug(false);

    // 默认高质量
    // let localFilter = easyrtc.buildLocalSdpFilter({
    //     audioRecvBitrate: 240, videoRecvBitrate: 16384
    // });
    // let remoteFilter = easyrtc.buildRemoteSdpFilter({
    //     audioSendBitrate: 240, videoSendBitrate: 16384
    // });
    // easyrtc.setSdpFilters(localFilter, remoteFilter);
    // triggerIceRestart();

    // 获取摄像头列表,并显示在下拉框中
    easyrtc.getVideoSourceList(list => {
      const selectCamOption = document.getElementById("localVideo");
      //遍历摄像头列表
      for (let i = 0; i < list.length; i++) {
        // console.log("video label=" + list[i].label + ", id= " + list[i].deviceId);
        const videoLabel =
          list[i].label && list[i].label.length > 0
            ? list[i].label
            : `摄像头${i + 1}`;
        // console.log(videoLabel);
        selectCamOption.add(new Option(videoLabel, list[i].deviceId));
      }
    });

    // 获取音频列表
    easyrtc.getAudioSourceList(list => {
      const selectAudioOption = document.getElementById("localAudio");
      for (let i = 0; i < list.length; i++) {
        // console.log("audio label=" + list[i].label + ", id= " + list[i].deviceId);
        console.log(`设备信息:${list[i].label}`);
        const audioLabel =
          list[i].label && list[i].label.length > 0
            ? list[i].label
            : `麦克风${i + 1}`;

        selectAudioOption.add(new Option(audioLabel, list[i].deviceId));
      }
    });
  } else {
    document.getElementById("myMessageCon").innerHTML =
      "您当前使用的浏览器不支持WebRTC，您可以使用谷歌浏览器。";
    document.getElementById("myMessage").style.display = "block";
  }
});
