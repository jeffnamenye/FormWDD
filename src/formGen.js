//Ready made form tool

moduels.exports.formGen = function (input) {
//Creates a blank string
var formGen = '';


input.forEach(function(input){

  if(input.type){
    //Switch to make user input all to lower case and to handel a specific input
    switch (input.type.toLowCase()){
      //
      case 'label':
        formGen += '<label';
        //for id if one is avaliable
        input.id ? formGen += 'for="' + input.id + '"></label>' : formGen  += '></label>';

        break;

      //text for user to input first name
      case 'text':
        formGen += '<input type = "text"';

        input.name ? formGen += 'fname="' + input.name + '"></text>' : formGen  += '></text>';
        input.id ? formGen += ' id="' + input.id + '"' : formGen += '';
        input.required ? formGen += ' required' : formGen += '';

        formGen += '/>';
        break;

        //text for user last name
        case 'text':
          formGen += '<input type = "text"';

          input.name ? formGen += 'lname="' + input.name + '"></text>' : formGen  += '></text>';
          input.id ? formGen += ' id="' + input.id + '"' : formGen += '';
          input.required ? formGen += ' required' : formGen += '';

          formGen += '/>';
          break;

          //for users email
          case 'email':
          formGen += '<input type="email"';

          input.name ? formGen += ' email="' + input.name + '"' : formGen += '';
          input.id ? formGen += ' id="' + input.id + '"' : formGen += '';
          input.required ? formGen += ' required' : formGen += '';

          formGen += '/>';

        break;


    }
  }
});
return formGen;
}
