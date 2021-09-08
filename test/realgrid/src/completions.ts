export const dotCompletions = [
    {
        name: 'columnByName()',
        text: 'columnByName("${1}")',
        className: 'GridView',
    },
    {
        name: 'addPopupMenu()',
        text: 'addPopupMenu("${1}", ${2});',
        className: 'GridView',
    },
    {
        name: 'setColumnProperty()',
        text: 'setColumnProperty("${1}", "${2}", { ${3} });',
        className: 'GridView',
    },
    {
        name: 'onCellButtonClicked',
        text: 
`onCellButtonClicked = function(grid, index, column) {
    \${1}
}`,
        className: 'GridView',
    },
    {
        name: 'onMenuItemClicked',
        text: 
`onMenuItemClicked = function(grid, item, clickData) {
    \${1}
}`,
        className: 'GridView',
    },
    {
        name: 'editOptions',
        className: 'GridView',
    },
    {
        name: 'movable',
        text: 'movable = ${1|true,false|};',
        endwith: 'editOptions.',
    },
    {
        name: 'displayOptions',
        className: 'GridView',
    },
    {
        name: 'rowMovable',
        text: 'rowMovable = ${1|true,false|};',
        endwith: 'displayOptions.',
    },
    {
        name: 'dataDropOptions',
    },
    {
        name: 'dropMode',
        text: 'dropMode = ${1|"copy","move"|};',
        endwith: 'dataDropOptions.',
    },
    {
        name: 'callback',
        text: 
`callback = function(source, sourceItems, target, targetItem) {
    \${1}
}`,
        endwith: 'dataDropOptions.',
    },
    {
        name: 'dragCallback',
        text: 
`dragCallback = function(source, sourceItems, target, targetItem) {
    \${1}
}`,
        endwith: 'dataDropOptions.',
    },
    {
        name: 'fieldMapCallback',
        text: 
`fieldMapCallback = function(source, sourceItems, target, targetItem) {
    \${1}
}`,
        endwith: 'dataDropOptions.',
    },
    {
        name: 'labelCallback',
        text: 
`labelCallback = function(source, sourceItems, target, targetItem) {
    \${1}
}`,
        endwith: 'dataDropOptions.',
    },

    {
        name: 'length',
    },    
    {
        name: 'buttonVisibility',
        text: 'buttonVisibility = "${2|always,default,visible,hidden|}";',
    },
];