export const dotCompletions = [
    {
        name: 'length',
    },    
    {
        name: 'buttonVisibility',
        text: 'buttonVisibility = "${2|always,default,visible,hidden|}";',
    },
    {
        name: 'editOptions',
    },
    {
        name: 'movable',
        text: 'movable = ${1|true,false|};',
        endwith: 'editOptions.',
    },
    {
        name: 'displayOptions',
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
];