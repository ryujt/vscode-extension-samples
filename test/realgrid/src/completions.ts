export const dotCompletions = [
    // gridView.
    {
        name: 'setFocus()',
        text: 'setFocus()',
        endwith: 'gridView.',
    },
    {
        name: 'columnByName()',
        text: 'columnByName("${1}")',
        endwith: 'gridView.',
    },
    {
        name: 'addPopupMenu()',
        text: 'addPopupMenu("${1}", ${2});',
        endwith: 'gridView.',
    },
    {
        name: 'setColumnProperty()',
        text: 'setColumnProperty("${1}", "${2}", { ${3} });',
        endwith: 'gridView.',
    },
    {
        name: 'onCellButtonClicked',
        text: 
`onCellButtonClicked = function(grid, index, column) {
    \${1}
}`,
        endwith: 'gridView.',
    },
    {
        name: 'onMenuItemClicked',
        text: 
`onMenuItemClicked = function(grid, item, clickData) {
    \${1}
}`,
        endwith: 'gridView.',
    },
    {
        name: 'getCurrent()',
        text: 'getCurrent()',
        endwith: 'gridView.',
    },

    // getCurrent().
    {
        name: 'itemIndex',
        text: 'itemIndex',
        endwith: 'getCurrent().',
    },

    // options.
    {
        name: 'modal',
        text: 'modal = ${1|true,false|};',
        endwith: 'options.',
    },
    {
        name: 'saveLabel',
        text: 'saveLabel = "${1}";',
        endwith: 'options.',
    },
    {
        name: 'cancelLabel',
        text: 'cancelLabel = "${1}";',
        endwith: 'options.',
    },

    // editOptions.
    {
        name: 'movable',
        text: 'movable = ${1|true,false|};',
        endwith: 'editOptions.',
    },
    {
        name: 'appendable',
        text: 'appendable = ${1|true,false|};',
        endwith: 'editOptions.',
    },

    // displayOptions.
    {
        name: 'rowMovable',
        text: 'rowMovable = ${1|true,false|};',
        endwith: 'displayOptions.',
    },

    // dataDropOptions.
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

    // name only
    { name: 'length' },
    { name: 'options' },
    { name: 'editOptions' },
    { name: 'displayOptions' },
    { name: 'dataDropOptions' },
    { name: 'appendRow()' },

    // name + text
    {
        name: 'buttonVisibility',
        text: 'buttonVisibility = "${2|always,default,visible,hidden|}";',
    },
    {
        name: 'visible',
        text: 'visible = ${1|true,false|};',
    },
];