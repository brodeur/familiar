FMLR = { // Familiar globals
  familiarized : null,
  expiration : 365, // Expire the familiarity cookie after 365 days
  thresholds : { // thresholds for when events should occur
    decayFamily : 90, // decay objects with familiarity of family that have not been seen in 90 days
    decayFriend : 30, // decay objects with familiarity of friend that have not been seen in 30 days
    promoteStranger : 3, // promote to friend after 3 total clicks
    promoteFriend : 8 // promote to family after 8 total clicks
  },
  previousMostRecentTime : null,
  totalSessionClicks : 0,
  numStrangers : 0,
  numFamily : 0,
  mostRecent : "",
  objects : {},
  console : "", // open or closed
  consoleOn : true, // turn the console on to help with development
  consoleLocation : "/familiar-console.js", // set the location of your familiar console
};


if (FMLR.consoleOn == true) {	 // if the console is on, load the console script
 fmlrConsole = document.createElement("script");
 fmlrConsole.src = FMLR.consoleLocation;
 fmlrConsole.lang = "text/javascript";
 $("head").append(fmlrConsole);
}

function getPathTo(element) {
    if (element === document.body)
        return 'fmlrId-' + element.tagName;

    var ix= 0;
    var siblings= element.parentNode.childNodes;
    for (var i= 0; i<siblings.length; i++) {
        var sibling= siblings[i];
        if (sibling===element)
            return getPathTo(element.parentNode)+'_'+element.tagName+'_'+(ix+1)+'_';
        if (sibling.nodeType===1 && sibling.tagName===element.tagName)
            ix++;
    }
}

function getPageXY(element) { // TODO: This is not good enough, as element position will change when the browser does. Find a better solution.
    var x= 0, y= 0;
    while (element) {
        x+= element.offsetLeft;
        y+= element.offsetTop;
        element= element.offsetParent;
    }
    return x + "_" + y;
}

function fmlrSaveGlobals() {
  fmlrSetCookie("FMLR", JSON.stringify(FMLR), FMLR.expiration);
}

function fmlrGetGlobals() {
  FMLR = JSON.parse(fmlrGetCookie("FMLR"));
}

function fmlrSetCookie (cookieName, cookieValue, expirationDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expirationDays*24*60*60*1000));
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + d.toUTCString() + ";";
}

function fmlrGetCookie (cookieName) {
  var thisCookiesName = cookieName + "=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
      var thisCookie = cookieArray[i];
      while (thisCookie.charAt(0)==' ') thisCookie = thisCookie.substring(1);
      if (thisCookie.indexOf(thisCookiesName) == 0) return thisCookie.substring(thisCookiesName.length,thisCookie.length);
  }
  return "";
}

function fmlrCheckCookie (cookieName) {
  thisCookiesName = fmlrGetCookie(cookieName);
  if (thisCookiesName != "") {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(){
  if (FMLR.consoleOn == true) {
    fmlrSetUpConsole();
  }
  if(fmlrCheckCookie("FMLR") === true) {
    fmlrGetGlobals();
    if (FMLR.consoleOn == true) {
      fmlrRefreshConsole();
    }
  } else {
    FMLR.previousMostRecentTime = new Date();
    FMLR.familiarized = true;
    fmlrSaveGlobals();
    if (FMLR.consoleOn == true) {
      fmlrRefreshConsole();
    }   
  }
  
  if(FMLR.consoleOn === true && FMLR.console == "closed") {
    $("#fmlr-console").removeClass("bounceInUp").addClass("bounceOutDown");
  }
    
  $(".btn").hover(function(){
    $(this).toggleClass("pulse");
  });

  // Familiar!
  fmlrArray = $(".familiar"); // Get all of the familiar objects
   
  i = 0;
  
  $(fmlrArray).each(function(){ // Sort through the familiar objects
    var fmlr = {}; // FMLR for global and fmlr for local? ewwsome or awesome? TODO: Clean up namespace
    
    fmlr.xPath = getPathTo(this);
    if ($(this).attr("id")) {
      fmlr.fmlrId = $(this).attr("id");
    }

    if(fmlrCheckCookie(fmlr.xPath)) { // Checks for a fmlrCookie
      fmlr = JSON.parse(fmlrGetCookie(fmlr.xPath)); // Grab the cookie with the current xPath
      $(this).attr("id",fmlr.fmlrId); // set unique ID
      familiarityStatus = fmlr.familiarityStatus;
      $(this).attr("fmlr-status", familiarityStatus);
      $(this).addClass(familiarityStatus);
    } else { // there isn't a cookie for this xPath
      fmlr = {
        hasAttributes : false, // TODO: turn this into an object that stores which attributes it has
        views : 0,
        clicks : 0,
        mostRecent : new Date(),
        stateContent : {
          "stranger" : false,
          "friend" : false,
          "family" : false
        },
        familiarityStatus : "stranger",
        xPath : getPathTo(this),
        fmlrId : $(this).attr("id")
      }
      familiarityStatus = fmlr.familiarityStatus;
      $(this).attr("fmlr-status", familiarityStatus);
      
      if (!fmlr.fmlrId) { // if there isn't an id generate a unique one
        fmlr.fmlrId = "fmlrId-" + (Math.floor((Math.random() * 10000) + 1)); // TODO: Check other IDs to make sure there isn't a duplicate
      }
      
      $(this).attr("id",fmlr.fmlrId); // set an ID for this thing
      fmlrSetCookie (fmlr.xPath, JSON.stringify(fmlr), FMLR.expiration); // Save the familiar object with the name of the cookie as the xPath
      
    } // end checking for cookies for this xPath
   
    if (fmlr.familiarityStatus == "stranger") { // first time here!
      FMLR.numStrangers = FMLR.numStrangers + 1;
    }
           
    fmlr.fmlrId = $(this).attr("id") || false; // If the familiar has an ID, save it. Otherwise set the familiar ID to false
    
    if(fmlr.fmlrId) { // If the familiar has an ID, save it      
      fmlr.fmlrId = $(this).attr("id");
    }
        
    // Check if the object is using attributes
    if ($(this).attr("fmlr-stranger")) {
      thisStatus = "stranger";
      fmlr.hasAttributes = true; // This familiar has an attribute
      fmlr.stateContent[thisStatus] = $(this).attr("fmlr-stranger");
    } else {
      fmlr.stateContent.stranger = false;
    }

    if ($(this).attr("fmlr-friend")) {
      thisStatus = "friend";
      fmlr.hasAttributes = true; // This familiar has an attribute
      fmlr.stateContent[thisStatus] = $(this).attr("fmlr-friend");
    } else {
      fmlr.stateContent.friend = false;
    }
    
    if ($(this).attr("fmlr-family")) {
      thisStatus = "family";
      fmlr.hasAttributes = true; // This familiar has an attribute
      fmlr.stateContent[thisStatus] = $(this).attr("fmlr-family");
    } else {
      fmlr.stateContent.family = false;
    } // The familiar has no attributes
    
    // figure out what the current familiarity with this button is
    familiarityStatus = fmlr.familiarityStatus;
    if (fmlr.stateContent[familiarityStatus]) {
      $(this).html(fmlr.stateContent[familiarityStatus]);
    }
          
    $(this).click(function(){
      if (FMLR.consoleOn == true) {
        fmlrUpdateConsoleMetrics("click");
        fmlrUpdateConsoleMetrics("most recent", this.id);
      }
      fmlr.clicks = fmlr.clicks + 1; // Items with attributes are clickable.
      if (fmlr.clicks < FMLR.thresholds.promoteStranger) { // Less than 2 clicks is a stranger TODO: Make these click intervals constants

        if (FMLR.consoleOn == true) {
          if (fmlr.familiarityStatus == "friend") { //if currently a friend a familiarity decay event must have been triggered. demoting to stranger!
            fmlrUpdateConsoleMetrics("demote friend");
          } else if (fmlr.familiarityStatus != "stranger") {
            fmlrUpdateConsoleMetrics("new stranger"); // otherwise this is a new stranger
          }
        }
        
        fmlr.familiarityStatus = "stranger";

        if (fmlr.stateContent[fmlr.familiarityStatus]) {
          $(this).html(fmlr.stateContent[fmlr.familiarityStatus]);
        }

        $(this).removeClass("family, friend"); // remove other possible 
        $(this).addClass("stranger"); // set the class of the object.. TODO: use global for this familiarity level

      } else if (fmlr.clicks >= FMLR.thresholds.promoteStranger && fmlr.clicks < FMLR.thresholds.promoteFriend) { // 2-5 clicks is a friend

        if (FMLR.consoleOn == true) {
          if(fmlr.familiarityStatus == "stranger") { // if currently a stranger that means we're upgrading from stranger to friend
            fmlrUpdateConsoleMetrics("promote stranger");
          } else if (fmlr.familiarityStatus == "family") { // if currently a family member it means a decay event has been triggered and we're going back to being friends
            fmlrUpdateConsoleMetrics("demote family"); 
          }
        }

        fmlr.familiarityStatus = "friend"; // set the current state to friend

        if (fmlr.stateContent[fmlr.familiarityStatus]) {
          $(this).html(fmlr.stateContent[fmlr.familiarityStatus]);
        }

        $(this).removeClass("family, stranger"); // remove other possible 
        $(this).addClass("friend"); // set the class of the object.. TODO: use global for this familiarity level

      } else if (fmlr.clicks >= FMLR.thresholds.promoteFriend) { // More than 5 clicks is family

        if (FMLR.consoleOn == true && fmlr.familiarityStatus == "friend") { // promote to family if it's a friend!
          fmlrUpdateConsoleMetrics("promote friend");
        }

        fmlr.familiarityStatus = "family";
        $(this).addClass("family"); // set the class of the object.. TODO: use global for this familiarity level

        if (fmlr.stateContent[fmlr.familiarityStatus]) {
          $(this).html(fmlr.stateContent[fmlr.familiarityStatus]);
        }

        $(this).removeClass("stranger, friend"); // remove other possible           
      }
      $(this).attr("fmlr-status", fmlr.familiarityStatus);
      if (FMLR.consoleOn == true) {
        fmlrRefreshConsole(fmlr);
      }
      fmlrSaveGlobals(); // TODO: Figure out best places to save globals
      fmlrSetCookie (fmlr.xPath, JSON.stringify(fmlr), FMLR.expiration); // save the cookie after the click
    });
    if (FMLR.consoleOn == true) {
      fmlrRefreshConsole(fmlr); // TODO: Figure out best places to refresh console
    }
  });
});