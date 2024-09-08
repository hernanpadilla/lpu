$(document).ready(function() {
    $('#excelFile').change(function(e) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
  
        var worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
        var table = $('#myTable');
        table.empty();
  
        for (var i = 0; i < jsonData.length; i++) {
          var row = $('<tr></tr>');
  
          for (var j = 0; j < jsonData[i].length; j++) {
            var cellData = jsonData[i][j];
            var cell = $('<td></td>').text(cellData);
            row.append(cell);
          }
  
          table.append(row);
        }
      };
  
      reader.readAsArrayBuffer(e.target.files[0]);
    });
  });
  