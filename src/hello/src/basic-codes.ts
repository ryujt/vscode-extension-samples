export let basicCode =
`
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link href="/lib/realgrid-style.css" rel="stylesheet" />
		<script type="text/javascript" src="/lib/realgrid-lic.js"></script>
		<script type="text/javascript" src="/lib/realgrid.2.3.3.min.js"></script>
		<script type="text/javascript" src="/js/jquery-3.4.0.min.js"></script>
	</head>
	<body>
		<div id="realgrid" style="width: 100%; height: 440px;">
		</div>
	</body>
</html>

<script>
    const provider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(provider);

    provider.setFields([
        { fieldName: "area1code", dataType: "text" },
        { fieldName: "area1name", dataType: "text" },
        { fieldName: "area2code", dataType: "text" },
        { fieldName: "area2name", dataType: "text" },
        { fieldName: "area3code", dataType: "text" },
        { fieldName: "area3name", dataType: "text" },
        { fieldName: "treeId",    dataType: "text" },
        { fieldName: "treeName",  dataType: "text" },
        { fieldName: "iconField", dataType: "text" },
    ]);

    gridView.setColumns([
        { fieldName: "treeName",  name: "treeName", width: 150 },
        { fieldName: "treeId",    name: "treeId"    },
        { fieldName: "area1code", name: "area1code" },
        { fieldName: "area1name", name: "area1name" },
        { fieldName: "area2code", name: "area2code" },
        { fieldName: "area2name", name: "area2name" },
        { fieldName: "area3code", name: "area3code" },
        { fieldName: "area3name", name: "area3name" },
        { fieldName: "iconField", name: "iconField" }
    ]);

    var data_url = 
		"https://raw.githubusercontent.com/realgrid/" +
    	"open-tutorial/main/datas/areatree.json";
    $.getJSON(data_url, function (data) {
        console.log(data);
        provider.fillJsonData(data, { fillMode: "set" });
    });
</script>
`