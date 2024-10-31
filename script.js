"use strict";

let button = document.getElementById("register"); //登録ボタンのidを変数buttonに代入する
button.addEventListener("click", function() {　//addEventListenerでボタンのクリック時に処理を実行
    
    let inputTask = document.getElementById("inputTask")//idの要素をinputTaskに代入
    let inputContent = document.getElementById("inputContent")//idの要素をinputTaskに代入
    // const listItems = [];
    // const localItem = {
    //   taskName : inputTask.value,
    //   TaskContents : inputContent.value,
    // };

    if (inputTask.value === "") { //inputTaskの値がブランクの時アラート出す
        alert ("何も入力されていません");
    } 
    else {
        let li = document.createElement("li"); //＜li＞のタグ作って、Liとする
        list.appendChild(li);   //listのidのところにliを追加する
        li.innerText = inputTask.value; //liの値はinputTaskの値
        
        // const listItems = [];
        // const localItem = {
        //   taskName : inputTask.value,
        //   TaskContents : inputContent.value,
        // };

        // listItems.push(localItem.taskName);

     
        //Deleteボタンを追加。<li>タグの子要素
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete" ;
        li.appendChild(deleteButton);

        //内容のテキストも追加<p>タグ
        let liAfterp = document.createElement("p")
        liAfterp.innerText = inputContent.value;
        li.after(liAfterp);
        liAfterp.classList.add("details");
  
        // listItems.push(localItem.TaskContents);

        //Deleteボタンにクラス名をいれる。<botton>タグは登録ボタンもあるから、２番目以降のボタンタグに名前を入れる
        let addclass = document.querySelectorAll("button"); 
        for (let i =1; i < addclass.length; i++) {  // 
            addclass[i].classList.add("delete-button");    
        }

        // Deleteボタンを押すとTaskが削除。<li>タグがいくつもあるからFor文。For分の中にイベントを入れる
        let li2 = document.querySelectorAll("li");  //getelement~ だと配列状態で取得、adEventListner使えないらしい
        let details = document.querySelectorAll(".details");
        // let localKeyDelete = localStorage.getItem("taskName");
        // let localContentsDelete = localStorage.getItem("taskName");

        for (let i =0; i < li2.length; i++) {
          let deleteButtoni = li2[i].querySelector(".delete-button"); // <li>タグのi番目のクラス.delete-buttonを取得
          deleteButtoni.addEventListener("click", function() {
          li2[i].remove();
          details[i].remove();
          // localStorage.removeItem(localKeyDelete[i]);
          // localStorage.removeItem(localContentsDelete[i]);
        },false);
        }

        } inputContent.value = "";
          inputTask.value = "";   //inputTaskを空にする
          
  },false);  
