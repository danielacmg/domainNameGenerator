/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];
  let domain = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          domain = pronoun[i] + adj[j] + noun[k] + extension[l] + "\n";
          console.log(domain + "\n");
          document.getElementById("domainName").innerHTML += "</br>" + domain;
        }
      }
    }
  }
};
