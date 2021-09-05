import * as vscode from 'vscode';
import * as completions from './completions';

// getCompletionItems

let property_button = new vscode.CompletionItem("button:");
property_button.insertText = new vscode.SnippetString('button: "${1|none,action,popup|}"');

let property_children = new vscode.CompletionItem("children:");
property_children.insertText = new vscode.SnippetString('children: [\n\t${1}\n]');

let property_direction = new vscode.CompletionItem("direction:");
property_direction.insertText = new vscode.SnippetString('direction: "${1|horizontal,vertical|}"');

let menu_type = new vscode.CompletionItem("type: (menu item)");
menu_type.insertText = new vscode.SnippetString('type: "${1|check,radio|}"]');

function identifiers() {
    var result:vscode.CompletionItem[] = [];

    // TODO: 파싱을 통해서 변수명 등을 가져오기
    const words = [
        "provider", "gridView", "series", "sparkline", "sparkcolumn", "sparkwinloss",
    ];

    for (let word of words) {
        let item = new vscode.CompletionItem(word);
        result.push(item);
    }
    return result;
}

// TODO: 서버에서 다운받는 형식으로
const ShortenedDatas = [
    {name: "new RealGrid.LocalDataProvider()", text: "const provider = new RealGrid.LocalDataProvider();"},
    {name: "new RealGrid.GridView()", text: `const gridView = new RealGrid.GridView("\${1}");`},
];

function Shortened() {
    var result:vscode.CompletionItem[] = [];

    for (let word of ShortenedDatas) {
        let item = new vscode.CompletionItem(word.name);
        item.insertText = new vscode.SnippetString(word.text);
        result.push(item);
    }
    return result;
}

function string_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = [
        "fieldName:", "fieldNames:", "name:", "type:", "label:", "group:", "tag:",
        "header:", "column:", "dataType:", "datetimeFormat:"
    ];
    for (let property of properties) {
        let item = new vscode.CompletionItem(property);
        item.insertText = new vscode.SnippetString(property + ' "${1}"');
        result.push(item);
    }
    return result;
}

function number_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = ["width:", "height:", "baseValue:", "belowHeight:", "step:", "min:", "max:", "delay:"];
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

function object_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = ["editor:", "header:", "renderer:"];
    for (let property of properties) {
        let item = new vscode.CompletionItem(property);
        item.insertText = new vscode.SnippetString(property + ' \{${1}\}');
        result.push(item);
    }
    return result;
}

function array_properties() {
    var result:vscode.CompletionItem[] = [];
    const properties = ["item:"];
    for (let property of properties) {
        let item = new vscode.CompletionItem(property);
        item.insertText = new vscode.SnippetString(property + ' \[${1}\]');
        result.push(item);
    }
    return result;
}

export function getCompletionItems() {
    var result:vscode.CompletionItem[] = [];
    result = result.concat(identifiers());
    result = result.concat(Shortened());
    result = result.concat(string_properties());
    result = result.concat(number_properties());
    result = result.concat(boolean_properties());
    result = result.concat(object_properties());
    result = result.concat(array_properties());
    result.push(property_button);
    result.push(property_children);
    result.push(property_direction);
    result.push(menu_type);
    return result;
}

// getDotCompletionItem

export function getDotCompletionItem(linePrefix: String) {
    var result:vscode.CompletionItem[] = [];
    for (let i of completions.dotCompletions) {
        if (!!i.endwith) {
            if (linePrefix.endsWith(i.endwith) === false) {
                continue;
            }
        }

        let item = new vscode.CompletionItem(i.name);
        if (!!i.text) {
            item.insertText = new vscode.SnippetString(i.text);
        }
        result.push(item);
    }    
    return result;
}