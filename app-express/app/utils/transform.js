var msopdf = require('node-msoffice-pdf');

module.exports = function(input, output, type) {
  msopdf(null, function(err, office) {
    if (err) { 
      console.log("Init failed", error);
      return;
    }
    if (type == "doc" || type == "docx") {
      office.word({input: input, output: output}, function(err, pdf) {
        if (err) {
          console.log(err);
        }
      })
    }
    else if (type == "xls") {
      office.excel({input: input, output: output}, function(err, pdf) {
        if (err) {
          console.log(err);
        }
      })
    }
    office.close(null);
  })
}
