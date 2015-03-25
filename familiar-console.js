fmlrConsoleHtml = '<div id="fmlr-console" class="animated bounceInUp"> <div id="fmlr-console-title"> Familiar <button class="fmlr-local selected"> Local: <strong class="fmlr-id"></strong> </button> <button class="fmlr-global"> <strong>Global</strong> </button> <div id="fmlr-console-close">&odash;</div><div id="fmlr-console-open">&oplus;</div></div><div class="fmlr-global-console fmlr-hide"> <ul> <li> <span>Total clicks</span> <span id="fmlr-console-total-session-clicks" class="fmlr-console-update"></span> </li><li> <span>Decay thresholds (days)</span> <span id="fmlr-console-decay-threshold" class="fmlr-console-update"></span> </li><li> <span>Expiration date (days)</span> <span id="fmlr-console-expiration" class="fmlr-console-update"></span> </li></ul> <ul> <li> <span>Number of friends</span> <span id="fmlr-console-num-friends" class="fmlr-console-update"></span> </li><li> <span>Number of family</span> <span id="fmlr-console-num-family" class="fmlr-console-update"></span> </li><li> <span>Number of strangers</span> <span id="fmlr-console-num-strangers" class="fmlr-console-update"></span> </li></ul> </div><div class="fmlr-local-console"> <div class="fmlr-console-container" style="text-align: center;"> <div> <strong class="fmlr-id"></strong> has a familiarity level of <strong id="current-state"></strong> with <strong id="local-clicks"></strong> clicks </div></div><div class="view-familiarity-level"> <button class="console-btn" id="set-stranger" state="stranger">Stranger</button> <button class="console-btn" id="set-friend" state="friend">Friend</button> <button class="console-btn" id="set-family" state="family">Family</button> </div></div></div>';

fmlrConsoleCss = '<style type="text/css">#fmlr-console{width:480px;font-family:"Helvetica Neue",Helvetica,sans-serif;font-size:14px;background-color:rgba(240,245,245,1);font-weight:200;position:fixed;bottom:25px;height:160px;left:25px;border-radius:3px;-webkit-box-shadow:0 15px 30px 0 rgba(50,50,50,.19);-moz-box-shadow:0 15px 30px 0 rgba(50,50,50,.19);box-shadow:0 15px 30px 0 rgba(50,50,50,.19);overflow:hidden}#fmlr-console.animated.bounceOutDown:hover{cursor:pointer;opacity:1}.fmlr-console-update,.fmlr-console-update-2{transition:all 1s;-webkit-animation:consoleUpdate 2s;animation:consoleUpdate 2s}@-webkit-keyframes consoleUpdate{from{color:rgba(227,72,56,1)}to{color:rgba(0,0,0,1)}}@keyframes consoleUpdate{from{color:rgba(277,72,56,1)}to{color:rgba(0,0,0,1)}}#fmlr-console ul{padding:0;width:50%;float:left}#fmlr-console ul li{position:relative;list-style:none;padding:5px;font-size:14px}#fmlr-console ul li:nth-child(odd){background-color:#fafafa}#fmlr-console ul li span:nth-child(1){width:140px;text-align:right;display:inline-block;padding-right:5px}#fmlr-console ul li span:nth-child(2){font-weight:700;border-left:1px dotted rgba(220,225,225,1);display:inline-block;width:60px;text-align:left;padding-left:8px;transition:all 1s}#fmlr-console-title{background-color:rgba(48,187,230,1);color:#fff;border-bottom:3px solid rgba(220,225,225,1);padding:8px;position:relative}#fmlr-console-close,#fmlr-console-open{display:inline-block;font-weight:400;position:absolute;top:6px;right:8px;background-color:rgba(255,255,255,.5);color:rgba(42,180,223,1);transition:all .25s;height:24px;width:21px;line-height:21px;border-radius:3px;-webkit-box-shadow:0 3px 0 0 rgba(42,180,223,1);-moz-box-shadow:0 3px 0 0 rgba(42,180,223,1);box-shadow:0 3px 0 0 rgba(42,180,223,1);font-size:24px;padding-left:3px}.fmlr-global,.fmlr-local{display:inline-block;font-weight:400;background-color:rgba(255,255,255,.5);color:rgba(42,180,223,1);transition:all .25s;border:0;outline:0;font-size:14px;line-height:21px;border-radius:3px;-webkit-box-shadow:0 3px 0 0 rgba(42,180,223,1);-moz-box-shadow:0 3px 0 0 rgba(42,180,223,1);box-shadow:0 3px 0 0 rgba(42,180,223,1);padding:0 8px;margin-left:8px}#fmlr-console-open,#fmlr-console.bounceOutDown #fmlr-console-close{display:none}#fmlr-console.bounceOutDown #fmlr-console-open{display:inline-block}#fmlr-console-close:hover,#fmlr-console-open:hover,.fmlr-global.selected,.fmlr-global:hover,.fmlr-local.selected,.fmlr-local:hover{cursor:pointer;background-color:rgba(255,255,255,1);-webkit-box-shadow:0 3px 0 0 rgba(32,170,213,1);-moz-box-shadow:0 3px 0 0 rgba(32,170,213,1);box-shadow:0 3px 0 0 rgba(32,170,213,1)}#fmlr-console-most-recent-time,#fmlr-console-previous-time{overflow:hidden;width:65px;height:14px;display:block}#fmlr-console-most-recent-time:hover,#fmlr-console-previous-time:hover{cursor:pointer;width:200px;display:block;position:absolute;overflow:visible;top:0;left:140px;z-index:1000}.set-familiarity-level,.view-familiarity-level{padding:8px;text-align:center;display:block}.set-familiarity-level .console-btn,.view-familiarity-level .console-btn{display:inline-block;font-weight:200;background-color:rgba(100,100,100,1);color:rgba(240,245,245,1);transition:all .25s;height:24px;line-height:21px;border-radius:3px;-webkit-box-shadow:0 3px 0 0 rgba(220,225,225,1));-moz-box-shadow:0 3px 0 0 rgba(220,225,225,1);box-shadow:0 3px 0 0 rgba(220,225,225,1);outline:0;border:0;font-size:15px;padding:0 8px 1px;margin:0 3px}.set-familiarity-level .console-btn.selected,.view-familiarity-level .console-btn.selected{background-color:rgba(180,180,180,1)}.fmlr-xpath{font-size:12px;color:#8a8a8a}.set-familiarity-level .console-btn:hover,.view-familiarity-level .console-btn:hover{cursor:pointer;background-color:rgba(229,71,49,1)}.fmlr-id{margin:0}.fmlr-console-container{padding:8px}.fmlr-local-console{top:53px}.fmlr-global-console{top:37px}.fmlr-global-console,.fmlr-local-console{position:absolute;width:100%;opacity:1;transition:all .25s}.fmlr-global-console.fmlr-hide,.fmlr-local-console.fmlr-hide{opacity:0}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}100%{opacity:.5;-webkit-transform:translate3d(0,138px,0);transform:translate3d(0,138px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}100%{opacity:.5;-webkit-transform:translate3d(0,138px,0);transform:translate3d(0,138px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes bounceInUp{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:.5;-webkit-transform:translate3d(0,138px,0);transform:translate3d(0,138px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}75%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}90%{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:.5;-webkit-transform:translate3d(0,138px,0);transform:translate3d(0,138px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}75%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}90%{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-duration:.5s;animation-duration:.5s}</style>';

$(document).ready(function(){
  $("head").append(fmlrConsoleCss);
  $("body").append(fmlrConsoleHtml);
});

function fmlrSetConsoleMetric (fmlrId, fmlrMetricValue) {
  $(fmlrId).toggleClass("fmlr-console-update fmlr-console-update-2")
  $(fmlrId).html(fmlrMetricValue);
}

function fmlrRefreshConsole(fmlrObj) {
  if(fmlrObj) {
    $(".fmlr-id").html("#" + fmlrObj.fmlrId);
    $("#current-state").html(fmlrObj.familiarityStatus);
    $("#local-clicks").html(fmlrObj.clicks);
    $("#set-stranger").attr("state-content", fmlrObj.stateContent.stranger);
    $("#set-friend").attr("state-content", fmlrObj.stateContent.friend);
    $("#set-family").attr("state-content", fmlrObj.stateContent.family);
    $(".fmlr-local-console button").attr("fmlr-id", fmlrObj.fmlrId);
    
    $(".set-familiarity-level .selected, .view-familiarity-level .selected").removeClass("selected");
    switch (fmlrObj.familiarityStatus) {
      case "stranger":
        $("#save-stranger, #set-stranger").addClass("selected");
      break;
      case "friend":
        $("#save-friend, #set-friend").addClass("selected");
      break;
      case "family":
        $("#save-family, #set-family").addClass("selected");
      break;
    }
        
    $(".view-familiarity-level button").click(function(){
      var fmlrId = "#" + $(this).attr("fmlr-id");
      var state = $(this).attr("state");
      var stateContent = $(this).attr("state-content");
      $(".view-familiarity-level button").removeClass("selected");
      $(this).addClass("selected");
      switch (state) {
        case "stranger":
          $(fmlrId).removeClass("family friend").addClass("stranger");
          if (fmlrObj.hasAttributes  && stateContent != "false") {
            $(fmlrId).html(stateContent);
            console.log(stateContent);
          }
        break;
        case "friend":
          $(fmlrId).removeClass("stranger family").addClass("friend");
          if (fmlrObj.hasAttributes  && stateContent != "false") {
            $(fmlrId).html(stateContent);
          }
        break;
        case "family":
          $(fmlrId).removeClass("stranger friend").addClass("family");
          if (fmlrObj.hasAttributes  && stateContent != "false") {
            $(fmlrId).html(stateContent);
          }
        break;
      }
    });
    $(".set-familiarity-level button").click(function(){
      $(".set-familiarity-level button").removeClass("selected");
      $(this).addClass("selected");
    });
  }

  fmlrSetConsoleMetric("#fmlr-console-familiarized", FMLR.familiarized);
  fmlrSetConsoleMetric("#fmlr-console-expiration", FMLR.expiration);
  fmlrSetConsoleMetric("#fmlr-console-decay-threshold", FMLR.thresholds.decayFriend + " & " + FMLR.thresholds.decayFamily);
  fmlrSetConsoleMetric("#fmlr-console-most-recent-time", FMLR.mostRecentTime);
  fmlrSetConsoleMetric("#fmlr-console-previous-time", FMLR.previousMostRecentTime)
  fmlrSetConsoleMetric("#fmlr-console-total-session-clicks", FMLR.totalSessionClicks);
  fmlrSetConsoleMetric("#fmlr-console-num-strangers", $('[fmlr-status="stranger"]').length);
  fmlrSetConsoleMetric("#fmlr-console-num-friends", $('[fmlr-status="friend"]').length);
  fmlrSetConsoleMetric("#fmlr-console-num-family", $('[fmlr-status="family"]').length);
  fmlrSetConsoleMetric("#fmlr-most-recent", FMLR.mostRecent);
}

function fmlrUpdateConsoleMetrics(fmlrMetricName, fmlrMetricValue) {
  switch (fmlrMetricName) {
    case "click":
      if (fmlrMetricValue) {
        FMLR.totalSessionClicks = FMLR.totalSessionClicks + fmlrMetricValue;
      } else {
        FMLR.totalSessionClicks++;
      }
      fmlrSetConsoleMetric("#fmlr-console-total-session-clicks", FMLR.totalSessionClicks);
    break;
    case "most recent":
      FMLR.mostRecent = fmlrMetricValue;
      fmlrSetConsoleMetric("#fmlr-console-most-recent", FMLR.mostRecent);
    break;
    case "new stranger":
      FMLR.numStrangers++;
      fmlrSetConsoleMetric("#fmlr-console-num-strangers", FMLR.numStrangers);
    break;
    case "promote stranger":
      FMLR.numStrangers--;
      FMLR.numFriends++;
      fmlrSetConsoleMetric("#fmlr-console-num-strangers", FMLR.numStrangers);
      fmlrSetConsoleMetric("#fmlr-console-num-friends", FMLR.numFriends);
    break;
    case "promote friend":
      FMLR.numFriends--;
      FMLR.numFamily++;
      fmlrSetConsoleMetric("#fmlr-console-num-friends", FMLR.numFriends);
      fmlrSetConsoleMetric("#fmlr-console-num-family", FMLR.numFamily);
    break;
    
    case "demote family":
      FMLR.numFamily--;
      FMLR.numFriends++;
      fmlrSetConsoleMetric("#fmlr-console-num-friends", FMLR.numFriends);
      fmlrSetConsoleMetric("#fmlr-console-num-family", FMLR.numFamily);
    break;
    
    case "demote friend":
      FMLR.numFriends--;
      FMLR.numStrangers++;
      fmlrSetConsoleMetric("#fmlr-console-num-strangers", FMLR.numStrangers);
      fmlrSetConsoleMetric("#fmlr-console-num-friends", FMLR.numFriends);
    break;
  }
}

function fmlrSetUpConsole(action, fmlrObj) {
  if (FMLR.consoleOn == true) {
    switch (action) {
      case "init":    
        $("#fmlr-console-close, #fmlr-console-open").click(function(){
          $("#fmlr-console").toggleClass("bounceInUp bounceOutDown");
          if($("#fmlr-console").hasClass("bounceOutDown")) {
            FMLR.console = "closed";    
          } else {
            FMLR.console = "open";
          }
          fmlrSaveGlobals();
        });
        $(".fmlr-local, .fmlr-global").click(function(){
          $(".fmlr-local-console, .fmlr-global-console").toggleClass("fmlr-hide");
          $(".fmlr-local, .fmlr-global").toggleClass("selected");
        });
      break;
      case "refresh":
        if (fmlrObj) {
          fmlrRefreshConsole(fmlrObj);
        } else {
          fmlrRefreshConsole();
        }
      break;
    }
  }
}