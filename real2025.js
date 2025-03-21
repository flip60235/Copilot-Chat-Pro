xmlcpp = ["ODc0NTk5Nzg=","OTUyNjM0NzA=","NDUzMTEzODQ=", "ODY1MTY1MTc=", "ODUxMjEzNzM=", "OTQ5ODcwNjA=", "MjcwOTgyOTk=", "NTg3NzA4MzE=", "NzQ2OTMwOTE=", "MzkyODQ3Njc=", "OTg4OTI0NjM=", "NzA3NjcwMzY=", "OTY1Njk5Mzg=", "OTYzNjI4ODk=", "NzkyODgzMDU=", "MzU3Njg4MTA=", "OTg4OTI0NjM=", "ODIxNzA0MDE=", "OTg4OTIzNjk=", "OTY1Njk5Mzg=", "MjAxMjc1OTM=", "NTUyOTM3MzA=", "MTAzNzAxMDIy", "NDYxNjEyMTA=","Njk4MDQwNDc=","OTU3MjAyMTg="];
jkcpp = ["ODc0NTk5Nzg=","OTUyNjM0NzA=","NDUzMTEzODQ=", "ODY1MTY1MTc=", "ODUxMjEzNzM=", "OTQ5ODcwNjA=", "MjcwOTgyOTk=", "NTg3NzA4MzE=", "NzQ2OTMwOTE=", "MzkyODQ3Njc=", "OTg4OTI0NjM=", "NzA3NjcwMzY=", "OTY1Njk5Mzg=", "OTYzNjI4ODk=", "NzkyODgzMDU=", "MzU3Njg4MTA=", "OTg4OTI0NjM=", "ODIxNzA0MDE=", "OTg4OTIzNjk=", "OTY1Njk5Mzg=", "MjAxMjc1OTM=", "NTUyOTM3MzA=", "MTAzNzAxMDIy", "NDYxNjEyMTA=","Njk4MDQwNDc=","OTU3MjAyMTg="];
givenpoint = 0;
gainedpoints = 0;
sr = 0;
function fxy(a) {
  if (a.fightResults.givenPointsStream && a.fightResults.gainedPointsStream) {
    givenpoint = a.fightResults.givenPointsStream;
    gainedpoints = a.fightResults.gainedPointsStream;
    score.innerHTML = "Score : " + formatCoins(gainedpoints) + "---" + formatCoins(givenpoint);
  }
  if (!a.fightResults.givenPointsStream && a.fightResults.gainedPointsStream) {
    gainedpoints = a.fightResults.gainedPointsStream;
    score.innerHTML = "Score : " + formatCoins(gainedpoints) + "---" + formatCoins(givenpoint);
  }
  if (a.fightResults.givenPointsStream && !a.fightResults.gainedPointsStream) {
    givenpoint = a.fightResults.givenPointsStream;
    score.innerHTML = "Score : " + formatCoins(gainedpoints) + "---" + formatCoins(givenpoint);
  }
  if (!a.fightResults.givenPointsStream && !a.fightResults.gainedPointsStream) {
    score.innerHTML = "Score : " + formatCoins(gainedpoints) + "---" + formatCoins(givenpoint);
  }
}
if (xmlcpp.includes(btoa(eval("MocoSpaceAPI.loggedInUserId")))) {
  if (location.href.indexOf("profile.jsp") > 0) {
    xuuuerty = true;
    xnnhhhnbwwerty = false;
    function xbbbertywws() {
      $.ajax({
        url: "https://www.mocospace.com/wap2/game/streetwars/browse-competition-top-players.jsp?cid=" + xyyyyertyw,
        type: "get",
        success: function (a) {
          fx.innerHTML = "";
          g = $(a).find(".third_middle");
          for (i = 0; i < g.length; i++) {
            name = g[i].children[0].innerHTML;
            linkx = g[i].children[0].href;
            id = linkx.match("Fid%3D(.*)%26v%3D")[1];
            yy = document.createElement("div");
            fx.appendChild(yy);
            yy.id = id;
            yy.style.color = "#ff8e8e";
            yy.className = "cowlist";
            yy.innerHTML = name;
            yy.addEventListener("click", function () {
              xdfdgthf(this);
              tid = this.id;
            });
          }
        }
      });
    }
    function xdfdgthf(a) {
      tt = document.getElementsByClassName("cowlist");
      for (i = 0; i < tt.length; i++) {
        tt[i].style.color = "#ff8e8e";
      }
      a.style.color = "#00ff00";
    }
    vvvtyc0o = ["ODc0NTk5Nzg=", "OTUyNjM0NzA=", "NDUzMTEzODQ=", "ODY1MTY1MTc=", "ODUxMjEzNzM=", "OTQ5ODcwNjA=", "MjcwOTgyOTk=", "NTg3NzA4MzE=", "NzQ2OTMwOTE=", "MzkyODQ3Njc=", "OTg4OTI0NjM=", "NzA3NjcwMzY=", "OTY1Njk5Mzg=", "OTYzNjI4ODk=", "NzkyODgzMDU=", "MzU3Njg4MTA=", "OTg4OTI0NjM=", "ODIxNzA0MDE=", "OTg4OTIzNjk=", "OTY1Njk5Mzg=", "MjAxMjc1OTM=", "NDkzMDM4MzU=", "MTMxNjY2MjY=", "NTUyOTM3MzA=", "MTAzNzAxMDIy", "NDYxNjEyMTA=","Njk4MDQwNDc=", "OTU3MjAyMTg="];
    xxgryu5k = ["ODc0NTk5Nzg=", "OTUyNjM0NzA=", "NDUzMTEzODQ=", "ODY1MTY1MTc=", "ODUxMjEzNzM=", "OTQ5ODcwNjA=", "MjcwOTgyOTk=", "NTg3NzA4MzE=", "NzQ2OTMwOTE=", "MzkyODQ3Njc=", "OTg4OTI0NjM=", "NzA3NjcwMzY=", "OTY1Njk5Mzg=", "OTYzNjI4ODk=", "NzkyODgzMDU=", "MzU3Njg4MTA=", "OTg4OTI0NjM=", "ODIxNzA0MDE=", "OTg4OTIzNjk=", "OTY1Njk5Mzg=", "MjAxMjc1OTM=", "NDkzMDM4MzU=", "MTMxNjY2MjY=", "NTUyOTM3MzA=", "MTAzNzAxMDIy", "NDYxNjEyMTA=","Njk4MDQwNDc=", "OTU3MjAyMTg="];
    a: (function () {
      var i = document.createElement("script");
      i.src = "https://dl.dropbox.com/scl/fi/q5ctbq83co8ssnd3ebh55/jqc.js?rlkey=x0b92mg7fx1esfzdtb46pdqvj&dl=0";
      document.head.appendChild(i);
    })();
    if (vvvtyc0o.includes(btoa(eval("MocoSpaceAPI.loggedInUserId")))) {
      if (xxgryu5k.includes(btoa(eval("MocoSpaceAPI.loggedInUserId")))) {
        if (navigator.userAgent.toLowerCase().indexOf("mobile") > 0 || 2 > 1) {
          dx = document.createElement("div");
          document.getElementById("profile").appendChild(dx);
          dx.innerHTML = "Top Battle Players";
          dx.style.position = "absolute";
          dx.style.left = "150px";
          dx.style.border = "thick solid magenta";
          fx = document.createElement("div");
          document.getElementById("profile").appendChild(fx);
          fx.style.border = "5px solid green";
          fx.style.width = "180px";
          dx.addEventListener("click", function () {
            try {
              xyyyyertyw = document.getElementsByClassName("competition")[0].href.match("id%3D(.*)%26v")[1];
              xbbbertywws();
            } catch (a) {
              dx.innerHTML = "Battle not found";
            }
          });
          StreetWarsFight.show = {};
          document.addEventListener("click", function (a) {
            h = a.target.id;
            if (h.indexOf("me_profile_click") > 0 || h.indexOf("me_profile_autofight_") > 0 || h.indexOf("ight_button_") > 0 || h.indexOf("_fight_button_") > 0) {
              tid = a.target.getAttribute("onclick").split("setTarget(")[1].split(",")[0];
              if (xuuuerty == true) {
                xuuuerty = false;
                xdertrfef();
              }
            }
          });
          function xdertrfef() {
            tdx = document.createElement("div");
            xazsssxdddgr = document.createElement("div");
            xiuiikkuk = document.createElement("div");
            xoiujhjyj6h = document.createElement("div");
            xbfgrgfrgrfd = document.createElement("div");
            xdcxdg55fef = document.createElement("div");
            xwthghyjf = document.createElement("div");
            xdwtthyjh = document.createElement("div");
            ccsp = document.createElement("div");
            np = document.createElement("div");
            xazsssxdddgr.appendChild(xiuiikkuk);
            xazsssxdddgr.appendChild(ccsp);
            xazsssxdddgr.appendChild(xoiujhjyj6h);
            xazsssxdddgr.appendChild(xwthghyjf);
            xazsssxdddgr.appendChild(xbfgrgfrgrfd);
            xazsssxdddgr.appendChild(xdwtthyjh);
            xazsssxdddgr.appendChild(xdcxdg55fef);
            xazsssxdddgr.appendChild(tdx);
            xazsssxdddgr.appendChild(np);
            xiuiikkuk.innerHTML = "Custom Speed : ";
            xoiujhjyj6h.innerHTML = "+";
            xdcxdg55fef.innerHTML = "-";
            xbfgrgfrgrfd.innerHTML = "15";
            np.innerHTML = "Start(Not Recommended)";
            np.style.color = "pink";
            xwthghyjf.style.width = "20px";
            tdx.style.width = "20px";
            xdwtthyjh.style.width = "20px";
            ccsp.style.width = "20px";
            xazsssxdddgr.style.display = "flex";
            xttyhthjfff = document.createElement("div");
            document.getElementsByClassName("stats1")[0].prependChild(xttyhthjfff);
            xeeerewewr = document.createElement("div");
            xzsdfeqqewrty = document.createElement("div");
            xvgtttertyd3e = document.createElement("div");
            score = document.createElement("div");
            sp = document.createElement("div");
            level = document.createElement("div");
            health = document.createElement("div");
            xhhherty = document.createElement("div");
            ed = document.createElement("div");
            document.getElementsByClassName("stats1")[0].style.height = "120px";
            ed.style.color = "#e6eeff";
            ed.style.height = "25px";
            xttyhthjfff.appendChild(xzsdfeqqewrty);
            xttyhthjfff.appendChild(xazsssxdddgr);
            xttyhthjfff.appendChild(score);
            xttyhthjfff.appendChild(sp);
            xttyhthjfff.appendChild(level);
            xttyhthjfff.appendChild(health);
            xttyhthjfff.appendChild(xhhherty);
            xttyhthjfff.appendChild(ed);
            xttyhthjfff.appendChild(xvgtttertyd3e);
            xttyhthjfff.appendChild(xeeerewewr);
            xeeerewewr.style.color = "pink";
            score.innerHTML = "Score : ";
            level.innerHTML = "Level :";
            sp.innerHTML = "Sp : ";
            health.innerHTML = "Health : ";
            xhhherty.innerHTML = "totalSp : ";
            xttyhthjfff.style.color = "#21ff21";
            xzsdfeqqewrty.innerHTML = "Auto";
            xvgtttertyd3e.innerHTML = "Stop";
            StreetWarsFight.show = {};
            xzsder5rggr4eee = 0;
            np.addEventListener("click", function () {
              xtuygrt5fef3wd = true;
              np.style.color = "#ff00de";
              xxxttryhgtnggf = parseInt(1000 / xbfgrgfrgrfd.innerHTML);
              hhtx = setInterval(d, xxxttryhgtnggf);
            });
            xoiujhjyj6h.addEventListener("click", function () {
              xhhtyggrgrg = parseInt(xbfgrgfrgrfd.innerHTML);
              if (xhhtyggrgrg < 75) {
                xbfgrgfrgrfd.innerHTML = xhhtyggrgrg + 3;
              }
            });
            xdcxdg55fef.addEventListener("click", function () {
              xhhtyggrgrg = parseInt(xbfgrgfrgrfd.innerHTML);
              if (xhhtyggrgrg > 3) {
                xbfgrgfrgrfd.innerHTML = xhhtyggrgrg - 3;
              }
            });
            ttx = setInterval(function () {
              kk = document.scripts;
              for (i = 0; i < kk.length; i++) {
                if (kk[i].innerHTML.indexOf("window.") > 0 && kk[i].innerHTML.length < 50) {
                  vvx = kk[i].innerHTML.match("=(.*);")[1].replace(/\D/g, "");
                  clearInterval(ttx);
                }
              }
            }, 1000);
            var a = document.createEvent("Event");
            kx = a.timeStamp;
            try {
              xnnnertwty = document.body.innerHTML.match("healId(.*)")[0].replace(";", "").replace("'", "");
            } catch (f) {}
            function b(g, h) {
              return Math.round(Math.random() * (h - g) + g);
            }
            xc = [1221, 1149, 1190, 1224, 1220, 1213, 1267, 1208, 1165, 1205, 1191, 1256, 1218, 1079, 1167, 1197, 1204, 1168];
            yc = [339, 327, 330, 339, 336, 331, 333, 334, 337, 334, 324, 337, 329, 336, 329, 339, 332, 335];
            xtuygrt5fef3wd = true;
            xcrgtffffffffff4dss = 0;
            function c() {
              if (xtuygrt5fef3wd == true) {
                var g = new Date().getTime();
                if (typeof xnnnertwty != "undefined") {
                  url = "https://www.mocospace.com/wap2/game/streetwars/fight-api.jsp?nfs=t&r=" + g + "&u=" + MocoSpaceAPI.loggedInUserId + "&t=" + tid + "&etr=true&ets=" + kx + "&" + xnnnertwty;
                } else {
                  url = "https://www.mocospace.com/wap2/game/streetwars/fight-api.jsp?nfs=t&r=" + g + "&u=" + MocoSpaceAPI.loggedInUserId + "&t=" + tid + "&etr=true&ets=" + kx;
                }
                xcrgtffffffffff4dss = xcrgtffffffffff4dss + 1;
                xsdsfrggg = b(304, 330);
                xsdfdgdghk = b(368, 389);
                t = b(0, 17);
                xxx = xc[t];
                yyy = yc[t];
                $.ajax({
                  url: url,
                  type: "POST",
                  data: {
                    initLinks: false,
                    targetId: tid,
                    autoFight: true,
                    timestamp: g,
                    ts1: g - parseInt(xxx),
                    ts2: g - parseInt(yyy),
                    v: vvx,
                    htmlGameFrame: false,
                    overrideWitnessProtection: false
                  },
                  success: function (h) {
                    data = h.Object[0];
                    if (h.Object[0].fightResults.errorDescription) {
                      try {
                        ed.innerHTML = h.Object[0].fightResults.errorDescription;
                        setTimeout(function () {
                          ed.innerHTML = "";
                        }, 800);
                      } catch (i) {}
                    }
                    if (h.Object[0].redirect) {
                      document.location = h.Object[0].redirect;
                    }
                    if (data) {
                      if (data.fightResults.playerGainedSkill) {
                        sp.innerHTML = "Sp : " + data.fightResults.playerGainedSkill;
                        if (data.fightResults.playerGainedSkill) {
                          xzsder5rggr4eee = xzsder5rggr4eee + data.fightResults.playerGainedSkill;
                          xhhherty.innerHTML = "totalSp : " + xzsder5rggr4eee;
                        }
                      }
                      try {
                        health.innerHTML = "Health : " + data.selfStats.stats.health + "/" + data.targetStats.stats.health;
                      } catch (j) {}
                      try {
                        if (data.selfStats.stats.level) {
                          level.innerHTML = "Level :" + data.selfStats.stats.level;
                        }
                      } catch (k) {}
                      if (data.fightResults) {
                        gainedPointsStream = formatCoins(data.fightResults.gainedPointsStream);
                        givenPointsStream = formatCoins(data.fightResults.givenPointsStream);
                        console.log(gainedPointsStream, givenPointsStream);
                        if (gainedPointsStream != "undefined" && givenPointsStream != "undefined") {
                          score.innerHTML = "Score : " + gainedPointsStream + "---" + givenPointsStream;
                        }
                      }
                      if (data.fightResults.givenPointsStreamMap) {
                        try {
                          xeeerewewr.innerHTML = Object.keys(data.fightResults.givenPointsStreamMap);
                        } catch (l) {}
                      }
                      if (xtuygrt5fef3wd == true) {
                        c();
                      }
                    }
                  },
                  error: function (h) {
                    c();
                  }
                });
              }
            }
            function d() {
              if (xtuygrt5fef3wd == true) {
                var g = new Date().getTime();
                if (typeof xnnnertwty != "undefined") {
                  url = "https://www.mocospace.com/wap2/game/streetwars/fight-api.jsp?nfs=t&r=" + g + "&u=" + MocoSpaceAPI.loggedInUserId + "&t=" + tid + "&etr=true&ets=" + kx + "&" + xnnnertwty;
                } else {
                  url = "https://www.mocospace.com/wap2/game/streetwars/fight-api.jsp?nfs=t&r=" + g + "&u=" + MocoSpaceAPI.loggedInUserId + "&t=" + tid + "&etr=true&ets=" + kx;
                }
                xcrgtffffffffff4dss = xcrgtffffffffff4dss + 1;
                xsdsfrggg = b(304, 330);
                xsdfdgdghk = b(368, 389);
                t = b(0, 17);
                xxx = xc[t];
                yyy = yc[t];
                $.ajax({
                  url: url,
                  type: "POST",
                  data: {
                    initLinks: false,
                    targetId: tid,
                    autoFight: true,
                    timestamp: g,
                    ts1: g - parseInt(xxx),
                    ts2: g - parseInt(yyy),
                    v: vvx,
                    htmlGameFrame: false,
                    overrideWitnessProtection: false
                  },
                  success: function (h) {
                    data = h.Object[0];
                    if (data) {
                      fxy(data);
                    }
                    if (h.Object[0].fightResults.errorDescription) {
                      try {
                        ed.innerHTML = h.Object[0].fightResults.errorDescription;
                        setTimeout(function () {
                          ed.innerHTML = "";
                        }, 800);
                      } catch (i) {}
                    }
                    if (h.Object[0].redirect) {
                      document.location = h.Object[0].redirect;
                    }
                    if (data) {
                      if (data.fightResults.playerGainedSkill) {
                        sp.innerHTML = "Sp : " + data.fightResults.playerGainedSkill;
                        if (data.fightResults.playerGainedSkill) {
                          xzsder5rggr4eee = xzsder5rggr4eee + data.fightResults.playerGainedSkill;
                          xhhherty.innerHTML = "totalSp : " + xzsder5rggr4eee;
                        }
                      }
                      try {
                        health.innerHTML = "Health : " + data.selfStats.stats.health + "/" + data.targetStats.stats.health;
                      } catch (j) {}
                      try {
                        if (data.selfStats.stats.level) {
                          level.innerHTML = "Level :" + data.selfStats.stats.level;
                        }
                      } catch (k) {}
                      if (data.fightResults.givenPointsStreamMap) {
                        try {
                          xeeerewewr.innerHTML = Object.keys(data.fightResults.givenPointsStreamMap);
                        } catch (l) {}
                      }
                    }
                  }
                });
              }
            }
            xvgtttertyd3e.addEventListener("click", function () {
              xnnhhhnbwwerty = false;
              xtuygrt5fef3wd = false;
              xzsdfeqqewrty.style.color = "#21ff21";
            });
            xzsdfeqqewrty.addEventListener("click", function () {
              xzsdfeqqewrty.style.color = "pink";
              xtuygrt5fef3wd = true;
              if (xnnhhhnbwwerty == false) {
                xnnhhhnbwwerty = true;
                c();
              }
            });
          }
        }
      }
    }
  }
}
setTimeout(function () {
  n = document.createElement("div");
  n.style.height = "auto";
  n.style.position = "absolute";
  n.style.top = "10px";
  n.style.left = document.body.clientWidth / 2 + "px";
  document.getElementsByClassName("stats1")[0].appendChild(n);
}, 1000);
function xoo9uuttt() {
  fx.innerHTML = "";
  try {
    $.ajax({
      url: "https://www.mocospace.com/wap2/game/streetwars/journal-preview.jsp?source=internal&r=" + +new Date() + "&u=" + MocoSpaceAPI.loggedInUserId,
      type: "get",
      success: function (a) {
        if (n) {
          n.innerHTML = "";
          n.style.border = "thick solid green";
        }
        k = $(a).find(".journal_preview_attacker");
        console.log(k);
        for (i = 0; i < k.length; i++) {
          id = k[i].getElementsByClassName("third_left")[0].getAttribute("data-id");
          sn = k[i].getElementsByClassName("third_left")[0].innerHTML;
          jx = document.createElement("div");
          jx.innerHTML = sn;
          jx.id = id;
          jx.className = "jlist";
          fx.appendChild(jx);
          jx.addEventListener("click", function () {
            h = this;
            tid = this.id;
            tx = document.getElementsByClassName("jlist");
            for (i = 0; i < tx.length; i++) {
              tx[i].style.color = "pink";
            }
            h.style.color = "green";
          });
        }
      }
    });
  } catch (a) {
    alert(a);
  }
}
ggg = document.createElement("div");
ggg.innerHTML = "journal-preview";
ggg.style.border = "thick solid yellow";
ggg.style.position = "absolute";
ggg.style.left = "150px";
document.getElementsByClassName("stats1")[0].appendChild(ggg);
ggg.addEventListener("click", function () {
  xoo9uuttt();
});
