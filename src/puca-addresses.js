var module_addresses = {
  init: function(){
    var rows = $('tr:has(.btn-primary)');
    var older_rows = $('tr:not(.btn-primary)');

    this.addFromAddresses(rows, "packages to send");
    this.addFromAddresses(older_rows, "all packages including sent");
  },

  addFromAddresses: function (rows, message) {
    var messages = this.buildMessages(rows);
    messages = this.removeDuplicates(messages);
    this.addToDisplay(messages, message);
  },

  buildMessages: function (rows) {
      var messages = [];
      var addresses = $('.address_text', rows);
      for (i=0; i < addresses.size(); i++) {
          var address = $(addresses[i]).html();
          console.log(addresses[i], address);
          address = this.normalizeAddress(address);
          var message = address.replace(/<br>/g, '|');
          messages.push(message);
      }
      return messages;
  },

  normalizeAddress: function (address) {
      var lineBreakCount = (address.match(/<br>/g) || []).length;
      if (lineBreakCount < 4) {
          address = this.addBlankAddressLine2(address);
      }
      return address;
  },

  addBlankAddressLine2: function (text) {
      var delimiter = '<br>';
      tokens = text.split(delimiter);
      tokens.splice(2, 0, '');
      return tokens.join(delimiter);
  },

  removeDuplicates: function (array) {
      return array.filter(function(item, index, array){
          return index == array.indexOf(item);
      });
  },

  addToDisplay: function (messages, message) {
      var dumpingGround = $('.headerbar');
      console.log('adding messages to element', dumpingGround);
      dumpingGround.before("<div><h1>Found " + messages.length + " " + message + " </h1></div>");
      dumpingGround.before("<div>Copy this to a new file, save as CSV, and use the pipe character ('|') as the column delimiter.</div>");
      var csv = "<div>";

      for (i=0; i < messages.length; i++) {
          csv += messages[i];
          csv += "<br/>";
      }

      csv += "</div>";
      dumpingGround.before(csv);
  }
};
