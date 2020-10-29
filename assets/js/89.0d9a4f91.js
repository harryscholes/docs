(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{674:function(g,I,C){"use strict";C.r(I);var c=C(0),t=Object(c.a)({},(function(){var g=this,I=g.$createElement,C=g._self._c||I;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"testing"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[g._v("#")]),g._v(" Testing")]),g._v(" "),C("iframe",{attrs:{src:"https://player.vimeo.com/video/457705991",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}}),g._v(" "),C("p",[g._v("At this point your code should be compiling, although we did not test if it works.\nYou can deploy the code to the chain everytime when you make a change. But come on, your time is more valuable than that.\nAlso, good to keep the contract break-free and tested for future changes.")]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tjZmcodGVzdCldCm1vZCB0ZXN0cyB7CiAgICB1c2Ugc3VwZXI6Oio7CiAgICB1c2UgY29zbXdhc21fc3RkOjp0ZXN0aW5nOjp7bW9ja19kZXBlbmRlbmNpZXMsIG1vY2tfZW52LCBNT0NLX0NPTlRSQUNUX0FERFJ9OwogICAgdXNlIGNvc213YXNtX3N0ZDo6e2NvaW5zLCBsb2csIENvc21vc01zZ307Cg=="}}),g._v(" "),C("p",[g._v("This is how testing in Rust begins. "),C("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples/blob/master/simple-option/src/contract.rs",target:"_blank",rel:"noopener noreferrer"}},[g._v("Code reference"),C("OutboundLink")],1),g._v(".\nYou can keep test and code in the same or separate files.")]),g._v(" "),C("h2",{attrs:{id:"test-initialization"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#test-initialization"}},[g._v("#")]),g._v(" Test Initialization")]),g._v(" "),C("div",{staticClass:"custom-block tip"},[C("p",[g._v("Timecode "),C("a",{attrs:{href:"https://vimeo.com/457705991#t=3m34s",target:"_blank",rel:"noopener noreferrer"}},[g._v("https://vimeo.com/457705991#t=3m34s"),C("OutboundLink")],1)])]),g._v(" "),C("p",[g._v("For each test, test specific variables such as block time, state must be mocked. Write a function for easy setup.")]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1t0ZXN0XQpmbiBwcm9wZXJfaW5pdGlhbGl6YXRpb24oKSB7CiAgICAvKgogICAgICogbW9jayBkZXBlbmRlbmNpZXMKICAgICAqIGZpcnN0IGlucHV0IGlzIGNhbm9uaWNhbCBhZGRyZXNzIGxlbmd0aAogICAgICogYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGluaXRpYWwgZnVuZCBpbiB0aGUgY29udHJhY3QKICAgICAqLwogICAgbGV0IG11dCBkZXBzID0gbW9ja19kZXBlbmRlbmNpZXMoMjAsICZhbXA7W10pOwogICAgbGV0IG1zZyA9IEluaXRNc2cgewogICAgICAgIGNvdW50ZXJfb2ZmZXI6IGNvaW5zKDQwLCAmcXVvdDtFVEgmcXVvdDspLAogICAgICAgIGV4cGlyZXM6IDEwMF8wMDAsCiAgICB9OwoKICAgIC8qCiAgICAgKiBtb2NrIGV4ZWN1dGlvbiBlbnZpcm9ubWVudAogICAgICogZmlyc3Qgc2VuZGVyIGFkZHJlc3MsIHNlY29uZCBpcyB0aGUgZnVuZHMgc2VudCBpbiB0aGUgbWVzc2FnZQogICAgICovCgogICAgbGV0IGVudiA9IG1vY2tfZW52KCZxdW90O2NyZWF0b3ImcXVvdDssICZhbXA7Y29pbnMoMSwgJnF1b3Q7QlRDJnF1b3Q7KSk7CgogICAgLy8gd2UgY2FuIGp1c3QgY2FsbCAudW53cmFwKCkgdG8gYXNzZXJ0IHRoaXMgd2FzIGEgc3VjY2VzcwogICAgbGV0IHJlcyA9IGluaXQoJmFtcDttdXQgZGVwcywgZW52LCBtc2cpLnVud3JhcCgpOwogICAgYXNzZXJ0X2VxISgwLCByZXMubWVzc2FnZXMubGVuKCkpOwoKICAgIC8vIGl0IHdvcmtlZCwgbGV0J3MgcXVlcnkgdGhlIHN0YXRlCiAgICBsZXQgcmVzID0gcXVlcnlfY29uZmlnKCZhbXA7ZGVwcykudW53cmFwKCk7CiAgICBhc3NlcnRfZXEhKDEwMF8wMDAsIHJlcy5leHBpcmVzKTsKICAgIGFzc2VydF9lcSEoJnF1b3Q7Y3JlYXRvciZxdW90OywgcmVzLm93bmVyLmFzX3N0cigpKTsKICAgIGFzc2VydF9lcSEoJnF1b3Q7Y3JlYXRvciZxdW90OywgcmVzLmNyZWF0b3IuYXNfc3RyKCkpOwogICAgYXNzZXJ0X2VxIShjb2lucygxLCAmcXVvdDtCVEMmcXVvdDspLCByZXMuY29sbGF0ZXJhbCk7CiAgICBhc3NlcnRfZXEhKGNvaW5zKDQwLCAmcXVvdDtFVEgmcXVvdDspLCByZXMuY291bnRlcl9vZmZlcik7Cn0K"}}),g._v(" "),C("p",[g._v("Good we now have a test environment initializer. This is a very simple one, you can pass in variables to the function and do different tweaks.\nCheck cosmwasm-plus for more.")]),g._v(" "),C("h3",{attrs:{id:"mock-dependencies-and-environment"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#mock-dependencies-and-environment"}},[g._v("#")]),g._v(" Mock Dependencies and Environment")]),g._v(" "),C("p",[g._v("There are two important mocking tools we should improve on:")]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"Ly8vIEFsbCBleHRlcm5hbCByZXF1aXJlbWVudHMgdGhhdCBjYW4gYmUgaW5qZWN0ZWQgZm9yIHVuaXQgdGVzdHMuCi8vLyBJdCBzZXRzIHRoZSBnaXZlbiBiYWxhbmNlIGZvciB0aGUgY29udHJhY3QgaXRzZWxmLCBub3RoaW5nIGVsc2UKcHViIGZuIG1vY2tfZGVwZW5kZW5jaWVzKAogICAgY2Fub25pY2FsX2xlbmd0aDogdXNpemUsCiAgICBjb250cmFjdF9iYWxhbmNlOiAmYW1wO1tDb2luXSwKKSAtJmd0OyBFeHRlcm4mbHQ7TW9ja1N0b3JhZ2UsIE1vY2tBcGksIE1vY2tRdWVyaWVyJmd0OyB7CiAgICBsZXQgY29udHJhY3RfYWRkciA9IEh1bWFuQWRkcjo6ZnJvbShNT0NLX0NPTlRSQUNUX0FERFIpOwogICAgRXh0ZXJuIHsKICAgICAgICBzdG9yYWdlOiBNb2NrU3RvcmFnZTo6ZGVmYXVsdCgpLAogICAgICAgIGFwaTogTW9ja0FwaTo6bmV3KGNhbm9uaWNhbF9sZW5ndGgpLAogICAgICAgIHF1ZXJpZXI6IE1vY2tRdWVyaWVyOjpuZXcoJmFtcDtbKCZhbXA7Y29udHJhY3RfYWRkciwgY29udHJhY3RfYmFsYW5jZSldKSwKICAgIH0KfQo="}}),g._v(" "),C("p",[g._v("This sets up dependencies for testing such as storage, api, and querier.")]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"Ly8vIEp1c3Qgc2V0IHNlbmRlciBhbmQgc2VudCBmdW5kcyBmb3IgdGhlIG1lc3NhZ2UuIFRoZSByZXN0IHVzZXMgZGVmYXVsdHMuCi8vLyBUaGUgc2VuZGVyIHdpbGwgYmUgY2Fub25pY2FsaXplZCBpbnRlcm5hbGx5IHRvIGFsbG93IGRldmVsb3BlcnMgcGFzaW5nIGluIGh1bWFuIHJlYWRhYmxlIHNlbmRlcnMuCi8vLyBUaGlzIGlzIGludGVuZGVkIGZvciB1c2UgaW4gdGVzdCBjb2RlIG9ubHkuCnB1YiBmbiBtb2NrX2VudiZsdDtVOiBJbnRvJmx0O0h1bWFuQWRkciZndDsmZ3Q7KHNlbmRlcjogVSwgc2VudDogJmFtcDtbQ29pbl0pIC0mZ3Q7IEVudiB7CiAgICBFbnYgewogICAgICAgIGJsb2NrOiBCbG9ja0luZm8gewogICAgICAgICAgICBoZWlnaHQ6IDEyXzM0NSwKICAgICAgICAgICAgdGltZTogMV81NzFfNzk3XzQxOSwKICAgICAgICAgICAgY2hhaW5faWQ6ICZxdW90O2Nvc21vcy10ZXN0bmV0LTE0MDAyJnF1b3Q7LnRvX3N0cmluZygpLAogICAgICAgIH0sCiAgICAgICAgbWVzc2FnZTogTWVzc2FnZUluZm8gewogICAgICAgICAgICBzZW5kZXI6IHNlbmRlci5pbnRvKCksCiAgICAgICAgICAgIHNlbnRfZnVuZHM6IHNlbnQudG9fdmVjKCksCiAgICAgICAgfSwKICAgICAgICBjb250cmFjdDogQ29udHJhY3RJbmZvIHsKICAgICAgICAgICAgYWRkcmVzczogSHVtYW5BZGRyOjpmcm9tKE1PQ0tfQ09OVFJBQ1RfQUREUiksCiAgICAgICAgfSwKICAgIH0KfQo="}}),g._v(" "),C("p",[C("code",[g._v("mock_env")]),g._v(" is for mocking transaction, block, and contract environment.")]),g._v(" "),C("h2",{attrs:{id:"test-handler"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#test-handler"}},[g._v("#")]),g._v(" Test Handler")]),g._v(" "),C("div",{staticClass:"custom-block tip"},[C("p",[g._v("Timecode "),C("a",{attrs:{href:"https://vimeo.com/457705991#t=7m34s",target:"_blank",rel:"noopener noreferrer"}},[g._v("https://vimeo.com/457705991#t=7m34s"),C("OutboundLink")],1)])]),g._v(" "),C("h3",{attrs:{id:"test-transfer-handler"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#test-transfer-handler"}},[g._v("#")]),g._v(" Test Transfer Handler")]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1t0ZXN0XQpmbiB0cmFuc2ZlcigpIHsKICAgIGxldCBtdXQgZGVwcyA9IG1vY2tfZGVwZW5kZW5jaWVzKDIwLCAmYW1wO1tdKTsKCiAgICBsZXQgbXNnID0gSW5pdE1zZyB7CiAgICAgICAgY291bnRlcl9vZmZlcjogY29pbnMoNDAsICZxdW90O0VUSCZxdW90OyksCiAgICAgICAgZXhwaXJlczogMTAwXzAwMCwKICAgIH07CiAgICBsZXQgZW52ID0gbW9ja19lbnYoJnF1b3Q7Y3JlYXRvciZxdW90OywgJmFtcDtjb2lucygxLCAmcXVvdDtCVEMmcXVvdDspKTsKCiAgICAvLyB3ZSBjYW4ganVzdCBjYWxsIC51bndyYXAoKSB0byBhc3NlcnQgdGhpcyB3YXMgYSBzdWNjZXNzCiAgICBsZXQgcmVzID0gaW5pdCgmYW1wO211dCBkZXBzLCBlbnYsIG1zZykudW53cmFwKCk7CiAgICBhc3NlcnRfZXEhKDAsIHJlcy5tZXNzYWdlcy5sZW4oKSk7CgogICAgLy8gcmFuZG9tIGNhbm5vdCB0cmFuc2ZlcgogICAgbGV0IGVudiA9IG1vY2tfZW52KCZxdW90O2FueW9uZSZxdW90OywgJmFtcDtbXSk7CiAgICBsZXQgZXJyID0gaGFuZGxlX3RyYW5zZmVyKCZhbXA7bXV0IGRlcHMsIGVudiwgSHVtYW5BZGRyOjpmcm9tKCZxdW90O2FueW9uZSZxdW90OykpLnVud3JhcF9lcnIoKTsKICAgIG1hdGNoIGVyciB7CiAgICAgICAgU3RkRXJyb3I6OlVuYXV0aG9yaXplZCB7IC4uIH0gPSZndDsge30KICAgICAgICBlID0mZ3Q7IHBhbmljISgmcXVvdDt1bmV4cGVjdGVkIGVycm9yOiB7fSZxdW90OywgZSksCiAgICB9CgogICAgLy8gb3duZXIgY2FuIHRyYW5zZmVyCiAgICBsZXQgZW52ID0gbW9ja19lbnYoJnF1b3Q7Y3JlYXRvciZxdW90OywgJmFtcDtbXSk7CiAgICBsZXQgcmVzID0gaGFuZGxlX3RyYW5zZmVyKCZhbXA7bXV0IGRlcHMsIGVudiwgSHVtYW5BZGRyOjpmcm9tKCZxdW90O3NvbWVvbmUmcXVvdDspKS51bndyYXAoKTsKICAgIGFzc2VydF9lcSEocmVzLmxvZy5sZW4oKSwgMik7CiAgICBhc3NlcnRfZXEhKHJlcy5sb2dbMF0sIGxvZygmcXVvdDthY3Rpb24mcXVvdDssICZxdW90O3RyYW5zZmVyJnF1b3Q7KTsKCiAgICAvLyBjaGVjayB1cGRhdGVkIHByb3Blcmx5CiAgICBsZXQgcmVzID0gcXVlcnlfY29uZmlnKCZhbXA7ZGVwcykudW53cmFwKCk7CiAgICBhc3NlcnRfZXEhKCZxdW90O3NvbWVvbmUmcXVvdDssIHJlcy5vd25lci5hc19zdHIoKSk7CiAgICBhc3NlcnRfZXEhKCZxdW90O2NyZWF0b3ImcXVvdDssIHJlcy5jcmVhdG9yLmFzX3N0cigpKTsKfQo="}}),g._v(" "),C("h3",{attrs:{id:"test-execute"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#test-execute"}},[g._v("#")]),g._v(" Test Execute")]),g._v(" "),C("div",{staticClass:"custom-block tip"},[C("p",[g._v("Timecode "),C("a",{attrs:{href:"https://vimeo.com/457705991#t=14m21s",target:"_blank",rel:"noopener noreferrer"}},[g._v("https://vimeo.com/457705991#t=14m21s"),C("OutboundLink")],1)])]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1t0ZXN0XQpmbiBleGVjdXRlKCkgewogICAgbGV0IG11dCBkZXBzID0gbW9ja19kZXBlbmRlbmNpZXMoMjAsICZhbXA7W10pOwoKICAgIGxldCBjb3VudGVyX29mZmVyID0gY29pbnMoNDAsICZxdW90O0VUSCZxdW90Oyk7CiAgICBsZXQgY29sbGF0ZXJhbCA9IGNvaW5zKDEsICZxdW90O0JUQyZxdW90Oyk7CiAgICBsZXQgbXNnID0gSW5pdE1zZyB7CiAgICAgICAgY291bnRlcl9vZmZlcjogY291bnRlcl9vZmZlci5jbG9uZSgpLAogICAgICAgIGV4cGlyZXM6IDEwMF8wMDAsCiAgICB9OwogICAgbGV0IGVudiA9IG1vY2tfZW52KCZxdW90O2NyZWF0b3ImcXVvdDssICZhbXA7Y29sbGF0ZXJhbCk7CgogICAgLy8gd2UgY2FuIGp1c3QgY2FsbCAudW53cmFwKCkgdG8gYXNzZXJ0IHRoaXMgd2FzIGEgc3VjY2VzcwogICAgbGV0IF8gPSBpbml0KCZhbXA7bXV0IGRlcHMsIGVudiwgbXNnKS51bndyYXAoKTsKCiAgICAvLyBzZXQgbmV3IG93bmVyCiAgICBsZXQgZW52ID0gbW9ja19lbnYoJnF1b3Q7Y3JlYXRvciZxdW90OywgJmFtcDtbXSk7CiAgICBsZXQgXyA9IGhhbmRsZV90cmFuc2ZlcigmYW1wO211dCBkZXBzLCBlbnYsIEh1bWFuQWRkcjo6ZnJvbSgmcXVvdDtvd25lciZxdW90OykpLnVud3JhcCgpOwoKICAgIC8vIHJhbmRvbSBjYW5ub3QgZXhlY3V0ZQogICAgbGV0IGVudiA9IG1vY2tfZW52KCZxdW90O2NyZWF0b3ImcXVvdDssICZhbXA7Y291bnRlcl9vZmZlcik7CiAgICBsZXQgZXJyID0gaGFuZGxlX2V4ZWN1dGUoJmFtcDttdXQgZGVwcywgZW52KS51bndyYXBfZXJyKCk7CiAgICBtYXRjaCBlcnIgewogICAgICAgIFN0ZEVycm9yOjpVbmF1dGhvcml6ZWQgeyAuLiB9ID0mZ3Q7IHt9CiAgICAgICAgZSA9Jmd0OyBwYW5pYyEoJnF1b3Q7dW5leHBlY3RlZCBlcnJvcjoge30mcXVvdDssIGUpLAogICAgfQoKICAgIC8vIGV4cGlyZWQgY2Fubm90IGV4ZWN1dGUKICAgIGxldCBtdXQgZW52ID0gbW9ja19lbnYoJnF1b3Q7b3duZXImcXVvdDssICZhbXA7Y291bnRlcl9vZmZlcik7CiAgICBlbnYuYmxvY2suaGVpZ2h0ID0gMjAwXzAwMDsKICAgIGxldCBlcnIgPSBoYW5kbGVfZXhlY3V0ZSgmYW1wO211dCBkZXBzLCBlbnYpLnVud3JhcF9lcnIoKTsKICAgIG1hdGNoIGVyciB7CiAgICAgICAgU3RkRXJyb3I6OkdlbmVyaWNFcnIgeyBtc2csIC4uIH0gPSZndDsgYXNzZXJ0X2VxISgmcXVvdDtvcHRpb24gZXhwaXJlZCZxdW90OywgbXNnLmFzX3N0cigpKSwKICAgICAgICBlID0mZ3Q7IHBhbmljISgmcXVvdDt1bmV4cGVjdGVkIGVycm9yOiB7fSZxdW90OywgZSksCiAgICB9CgogICAgLy8gYmFkIGNvdW50ZXJfb2ZmZXIgY2Fubm90IGV4ZWN1dGUKICAgIGxldCBlbnYgPSBtb2NrX2VudigmcXVvdDtvd25lciZxdW90OywgJmFtcDtjb2lucygzOSwgJnF1b3Q7RVRIJnF1b3Q7KSk7CiAgICBsZXQgZXJyID0gaGFuZGxlX2V4ZWN1dGUoJmFtcDttdXQgZGVwcywgZW52KS51bndyYXBfZXJyKCk7CiAgICBtYXRjaCBlcnIgewogICAgICAgIFN0ZEVycm9yOjpHZW5lcmljRXJyIHsgbXNnLCAuLiB9ID0mZ3Q7IGFzc2VydCEobXNnLmNvbnRhaW5zKCZxdW90O2NvdW50ZXIgb2ZmZXImcXVvdDspKSwKICAgICAgICBlID0mZ3Q7IHBhbmljISgmcXVvdDt1bmV4cGVjdGVkIGVycm9yOiB7fSZxdW90OywgZSksCiAgICB9CgogICAgLy8gcHJvcGVyIGV4ZWN1dGlvbgogICAgbGV0IGVudiA9IG1vY2tfZW52KCZxdW90O293bmVyJnF1b3Q7LCAmYW1wO2NvdW50ZXJfb2ZmZXIpOwogICAgbGV0IHJlcyA9IGhhbmRsZV9leGVjdXRlKCZhbXA7bXV0IGRlcHMsIGVudikudW53cmFwKCk7CiAgICBhc3NlcnRfZXEhKHJlcy5tZXNzYWdlcy5sZW4oKSwgMik7CiAgICBhc3NlcnRfZXEhKAogICAgICAgIHJlcy5tZXNzYWdlc1swXSwKICAgICAgICBDb3Ntb3NNc2c6OkJhbmsoQmFua01zZzo6U2VuZCB7CiAgICAgICAgICAgIGZyb21fYWRkcmVzczogTU9DS19DT05UUkFDVF9BRERSLmludG8oKSwKICAgICAgICAgICAgdG9fYWRkcmVzczogJnF1b3Q7Y3JlYXRvciZxdW90Oy5pbnRvKCksCiAgICAgICAgICAgIGFtb3VudDogY291bnRlcl9vZmZlciwKICAgICAgICB9KQogICAgKTsKICAgIGFzc2VydF9lcSEoCiAgICAgICAgcmVzLm1lc3NhZ2VzWzFdLAogICAgICAgIENvc21vc01zZzo6QmFuayhCYW5rTXNnOjpTZW5kIHsKICAgICAgICAgICAgZnJvbV9hZGRyZXNzOiBNT0NLX0NPTlRSQUNUX0FERFIuaW50bygpLAogICAgICAgICAgICB0b19hZGRyZXNzOiAmcXVvdDtvd25lciZxdW90Oy5pbnRvKCksCiAgICAgICAgICAgIGFtb3VudDogY29sbGF0ZXJhbCwKICAgICAgICB9KQogICAgKTsKCiAgICAvLyBjaGVjayBkZWxldGVkCiAgICBsZXQgXyA9IHF1ZXJ5X2NvbmZpZygmYW1wO2RlcHMpLnVud3JhcF9lcnIoKTsKfQo="}}),g._v(" "),C("p",[g._v("Now run the tests:")]),g._v(" "),C("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y2FyZ28gdGVzdAo="}}),g._v(" "),C("p",[g._v("If all green, the code will run work on chain.")])],1)}),[],!1,null,null,null);I.default=t.exports}}]);