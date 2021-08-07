import * as vscode from 'vscode';

// getCompletionItems

let property_button = new vscode.CompletionItem("button:");
property_button.insertText = new vscode.SnippetString('button: "${1|none,action,popup|}"');

let property_children = new vscode.CompletionItem("children:");
property_children.insertText = new vscode.SnippetString('children: [\n\t${1}\n]');

let property_direction = new vscode.CompletionItem("direction:");
property_direction.insertText = new vscode.SnippetString('direction: "${1|horizontal,vertical|}"');

let menu_type = new vscode.CompletionItem("type: (menu item)");
menu_type.insertText = new vscode.SnippetString('type: "${1|check,radio|}"]');

let menu_group = new vscode.CompletionItem("group: (menu item)");
menu_group.insertText = new vscode.SnippetString('group: "${1}"]');

function keywords() {
    var result:vscode.CompletionItem[] = [];

    // TODO: gridView와 같은 변수명 등은 현재 파일의 텍스트를 파싱으로 처리하기
    const words = ["RealGrid", "gridView", "index", "column"];

    for (let word of words) {
        let item = new vscode.CompletionItem(word);
        result.push(item);
    }
    return result;
}

function string_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = ["fieldName:", "name:", "label:", "group:", "tag:"];
    for (let property of properties) {
        let item = new vscode.CompletionItem(property);
        item.insertText = new vscode.SnippetString(property + ' "${1}"');
        result.push(item);
    }
    return result;
}

function number_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = ["step:", "min:", "max:", "delay:"];
    for (let property of properties) {
        let item = new vscode.CompletionItem(property);
        item.insertText = new vscode.SnippetString(property + ' ${1}');
        result.push(item);
    }
    return result;
}

function boolean_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = ["enabled:", "checked:", "showStepButton:"];
    for (let property of properties) {
        let item = new vscode.CompletionItem(property);
        item.insertText = new vscode.SnippetString(property + ' ${1|true,false|}');
        result.push(item);
    }
    return result;
}

export function getCompletionItems() {
    var result:vscode.CompletionItem[] = [];
    result = result.concat(keywords());

    result = result.concat(string_properties());
    result = result.concat(boolean_properties());

    result.push(property_button);
    result.push(property_children);
    result.push(property_direction);

    result.push(menu_type);
    result.push(menu_group);

    return result;
}

// getGridViewCompletionItem

let gridView_columnByName = new vscode.CompletionItem('columnByName');
gridView_columnByName.insertText = new vscode.SnippetString('columnByName("${1}")');

let gridView_addPopupMenu = new vscode.CompletionItem("addPopupMenu");
gridView_addPopupMenu.insertText = new vscode.SnippetString('addPopupMenu("${1}", ${2});');

let gridView_setColumnProperty = new vscode.CompletionItem("setColumnProperty");
gridView_setColumnProperty.insertText = new vscode.SnippetString('setColumnProperty("${1}", "${2}", { ${3} });');

let gridView_onCellButtonClicked = new vscode.CompletionItem("onCellButtonClicked"); 
gridView_onCellButtonClicked.insertText = new vscode.SnippetString(
`onCellButtonClickedgrd = function(grid, index, column) {\n
}`);

let gridView_onMenuItemClicked = new vscode.CompletionItem("onMenuItemClicked"); 
gridView_onMenuItemClicked.insertText = new vscode.SnippetString(
`onMenuItemClicked = function(grid, item, clickData) {\n
}`);

export function getGridViewCompletionItem() {
    var result:vscode.CompletionItem[] = [];
    result.push(gridView_columnByName);
    result.push(gridView_addPopupMenu);
    result.push(gridView_setColumnProperty);
    result.push(gridView_onCellButtonClicked);
    result.push(gridView_onMenuItemClicked);
    return result;
}

// getDotCompletionItem

let column_buttonVisibility = new vscode.CompletionItem("buttonVisibility");
column_buttonVisibility.insertText = new vscode.SnippetString('buttonVisibility = ${2|always,default,visible,hidden|};');

export function getDotCompletionItem() {
    var result:vscode.CompletionItem[] = [];
    result.push(column_buttonVisibility);
    return result;
}