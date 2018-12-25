// ==UserScript==
// @name         点击复制ff14.灰机wiki物品详情的物品名
// @namespace    https://github.com/Elypha/copy_itemname_ff14huijiwiki
// @version      0.1
// @description  添加一个按钮，点击即可复制ff14 灰机wiki里，物品制作材料里的材料名
// @author       Elypha 鈴鹿御前@幻影群岛 金光闪闪大萌德@NGA
// @date         2018-12-25
// @modified     2018-12-25
// @match        https://ff14.huijiwiki.com/wiki/*
// @grant        none
// @license      GUN 3.0
// ==/UserScript==

var style = document.createElement("style")
style.type = "text/css"
style.innerHTML=".copy_button{margin-left: 10px;margin-right: 6px;height: 18px;width: 42px;vertical-align: middle;color: #ea6060;font-style: normal;"+
    "font-variant-ligatures: normal;font-variant-caps: normal;font-variant-numeric: normal;font-variant-east-asian: normal;"+
    "font-weight: 400;font-stretch: normal;font-size: 12px;line-height: normal;font-family: Arial;padding-left: 0px;padding-right: 0px;"+
    "background-color: #ffc8c8;border-color: #ffe8e8;border-radius: 4px;border-width: 1px;box-shadow: 1px 1px 1px #6b4040;}";
document.getElementsByTagName("HEAD").item(0).appendChild(style)

var craft_list = document.getElementsByClassName("item-craft-list")[0]
var item_name = craft_list.querySelectorAll(".item-name")
console.log(item_name[1].innerText)
var item_append = craft_list.querySelectorAll(".item-number")


function copy_text(text) {
    var textArea = document.createElement('textArea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("Copy")
    document.body.removeChild(textArea)
}

function item_0(){
    var item_bar = craft_list.querySelectorAll(".item-baseinfo")[0]
    var button_copy = document.createElement("button")
    button_copy.className = "copy_button"
    button_copy.innerHTML = "COPY"
    button_copy.addEventListener ("click", function() {
        var text = item_name[0].innerText
        copy_text(text)
    })
    item_bar.appendChild(button_copy)
}
item_0()

function set_button(order) {
    var item_bar = item_append[order-1]
    var button_copy = document.createElement("button")
    button_copy.className = "copy_button"
    button_copy.innerHTML = "COPY"
    button_copy.addEventListener ("click", function() {
        var text = item_name[order].innerText
        copy_text(text)
    })
    item_bar.appendChild(button_copy)
}

for(var i=1;i<item_name.length;i++){
    set_button(i)
}

