$(function() {
    "use strict";
    ConstructFirstDropDown();
    AppearingSecondDropDown();
    eventDelegationJobs();
    fullInputBoxes();
   // removeLastInstance();
 
    deletingTheSpesificIndex();
    fillingArrayWithFields();
  //  triggerCreatingNewElementEventAfterRemoveOperation();
    demonstratingJQXCalendar();
    });
  function eventDelegationJobs() {
    var $body = $('body');
    $body.on('click', '#new', createANewDatepickerSection);
    $body.on('click', '#new', getDatesFromCurrentDatePickers);
    $body.on('click', '#new', setButtonsState);
    $body.on('click', '#remove', removeLastInstance);
   // $body.on('click', '.updateButton', removeSpesificInstance);
    $body.on('click', '.updateButton',fillingArrayWithFields);
    $body.on('click', '.updateButton',deletingSpecialDates);
  //$body.on('click', '.updateButton', deletingTheSpesificIndex());
  }
  function demonstratingJQXCalendar() {
 $("#jqxCalendar").jqxCalendar({
      width: '200px',
      height: '200px',
      columnHeaderHeight: 30,
      dayNameFormat: 'shortest',
      enableFastNavigation: true,
      enableWeekend: true,
      selectionMode: 'range',
      backText: "Bir önceki ay",
      forwardText: "Bir sonraki ay",
      enableTooltips: true,
      readOnly: true,
      enableHover: true,
/*specialDates: [{
    Date: new Date(2016, 3, 5),
    Class: '',
    Tooltip: 'Date 1'
  }, {
    Date: new Date(2016, 4, 27),
    Class: '',
    Tooltip: 'Date 2'
  }]*/
    });
  }

  var val, opt;

  function ConstructFirstDropDown() {
    var dropdownObject = {
 "Capability Center 1": "System Monitoring",
    "Capability Center 2": "System Management",
    "Capability Center 3": "Network Software"
    };
    var $firstDropdown = $('.firstdropdown');

    $firstDropdown.append($.map(dropdownObject, function(value, key) {
      return $('<option>').text(value).val(key);
    }));
  }

  function AppearingSecondDropDown() {

    var $firstDropdown = $('.firstdropdown');
    var $secondDropdown = $('.seconddropdown');
    var $radio = $('.radio');
  var capacityCenter1 = {
    "Person 1": "Anthony Tomtom",
    "Person 2": "Bres Diart",
    "Person 3": "Berat Emre Nebioğlu"
  };
  var capacityCenter2 = {
    "Person 1": "Tom Dorald",
    "Person 2": "Erich Richter",
    "Person 3": "Simona Solomon"
  };
  var capacityCenter3 = {
    "Person 1": "Daralok Dorolod",
    "Person 2": "Darold Dorald",
    "Person 3": "Jim Kenedixal"
  };
    $firstDropdown.on('change', function() {
      //  $('.firstdropdown').prop('disabled', true);
      $radio.prop('disabled', false);
      if ($(this).find(":selected").text() === "System Monitoring") {
        $secondDropdown.empty();
        $secondDropdown.prop('disabled', false);
        $secondDropdown.append($.map(capacityCenter1, function(value, key) {
          return $('<option>').text(value).val(key);

        }));
      } else if ($(this).find(":selected").text() === "System Management") {
        $secondDropdown.empty();
        $secondDropdown.prop('disabled', false);

        $secondDropdown.append($.map(capacityCenter2, function(value, key) {
          return $('<option>').text(value).val(key);
        }));


      } else if ($(this).find(":selected").text() === "Network Software") {
        $secondDropdown.empty();
        $secondDropdown.prop('disabled', false);

        $secondDropdown.append($.map(capacityCenter3, function(value, key) {
          return $('<option>').text(value).val(key);

        }));
      } else {
        $secondDropdown.prop('disabled', true);
        // $('.seconddropdown').val("");
        $secondDropdown.empty();
      }

    });
  }
  var i = 0;

  function createANewDatepickerSection() {
    var $datePart = $('.datePart'),
      $datepickerPart = $('#datepickerPart'),
      $body = $('body');
    clone = $datepickerPart.clone(true, true);
    clone
      .removeAttr('id')
      .removeClass('hidden')
      .appendTo($datePart);
    $body.append($datePart);
    $datePart.find('.datePicker').last().attr('id', 'datepicker' + i);
    /* getting values */
    datePickers();
    i++;
  }
  var specialNum = 1;
  var numColors = 25;

  function getDatesFromCurrentDatePickers() {
    var $input = $('body').find('.datePicker').last().find('.input');
    $input.on('change', function() {

      var $from = $(this).closest('.datePicker').find('.from').val();
      var $to = $(this).closest('.datePicker').find('.to').val();
      if ($from !== "" && $to !== "") {
        between = [];
        between.push($from);
        between.push($to);
        colorizingCalendar(between);
      }
    });
  }

  function splittedArray(datesArray) {
    var arrayWithDateValuesSeperately = datesArray.map(function(subArray) {
      return subArray.split('/');
    });
    return arrayWithDateValuesSeperately;
  }

  function colorizingCalendar(datesArray) {
    var parametrizedArray = splittedArray(datesArray);
    var startingDate = new Date();
    startingDate.setFullYear(Number(parametrizedArray[0][2]), (Number(parametrizedArray[0][1]) - 1), Number(parametrizedArray[0][0]));

    var endingDate = new Date();

    endingDate.setFullYear(Number(parametrizedArray[1][2]), (Number(parametrizedArray[1][1]) - 1), Number(parametrizedArray[1][0]));
    var date = new Date(startingDate);
    date.setHours(0);
    endingDate.setHours(23);
    var cal = $("#jqxCalendar");
    var obj = {
      "CapacityCenter": $('.firstdropdown').find('option:selected').text(),
      "DutyType": $(".radio:checked").closest('.type').find('.label').text(),
      "PersonInDuty": $('.seconddropdown').find('option:selected').text()
    };
    var jsonArray = [];
    jsonArray.push(obj);
    while (date < endingDate) {
      cal.jqxCalendar('addSpecialDate', date, 'special' + specialNum, jsonDataforTooltipofCalendar(jsonArray));
      date = new Date(date);
      date.setDate(date.getDate() + 1);
    }
    specialNum++;
    if (specialNum > numColors) specialNum = 1;
  }

  function removeSpesificInstance() {

    $(this).closest('.datePicker').remove();

  }

  function removeLastInstance() {
    var $datePickers = $('.datePart .datePicker');

    if ($datePickers.length > 1) {
      $datePickers.last().remove();
      $('#remove').prop('disabled', false);
      $datePickers.find('.from').last().prop('disabled', false);
      $datePickers.find('.to').last().prop('disabled', false);
    } else if ($datePickers.length === 1) {
      $('#remove').prop('disabled', true);
    }
    $(this).closest('body').find('.datePicker').last().find('.from').attr('disabled', false);
    $(this).closest('body').find('.datePicker').last().find('.from').val('');
    $(this).closest('body').find('.datePicker').last().find('.to').attr('disabled', false);
    $(this).closest('body').find('.datePicker').last().find('.to').val('');
  }

  function triggerCreatingNewElementEventAfterRemoveOperation() {
    $('.updateButton').on('click', function() {
      $("#new").trigger("click");
    });
  }

  /*function removeSpecialDatesFromJQXCalendar() {
    var sD = $("#jqxCalendar").jqxCalendar('specialDates');
    //console.log(sD);
    var dates = [];

    var specialDates = [];
    sD.forEach(function(element, index) {
      specialDates.push(element.Date);
    });
    for (var keys in valuesAll) {
      var tmp = new Date();
      tmp = valuesAll[keys].Başlangıç;
      while (tmp <= valuesAll[keys].Bitiş) {
        dates.push(tmp);
        tmp = new Date(tmp);
        tmp.setDate(tmp.getDate() + 1);
      }
    }
    var distinctDates = dates.filter(function(obj) {
    		  return specialDates.indexOf(obj) === -1;
     });*/
    //console.log(Array.isArray( $("#jqxCalendar").jqxCalendar('specialDates')));
   // $('.updateButton').on('click', function(){
 	function deletingSpecialDates(){
   // $("#jqxCalendar").jqxCalendar({ specialDates: [] });
    
	}
 



  function fullInputBoxes() {
    var $input = $('.datePicker input');
    $input.on('change', function() {
      var $from = $(this).closest('.datePicker').find('.from').val();
      var $to = $(this).closest('.datePicker').find('.to').val();
      if ($from !== "" && $to !== "") {
        $('.updateButton').attr('disabled', false);
        $('#new').attr('disabled', false);
        $(this).closest('.datePicker').find('.from').attr({
          'disabled': 'disabled'
        });
        $(this).closest('.datePicker').find('.to').attr({
          'disabled': 'disabled'
        });

      }

    });
  }

  function setButtonsState() {
    var $pickerCount = $('.datePart .datePicker');
    var $new = $('#new');
    var $remove = $('#remove');

    if ($pickerCount.length === 0) {
      $new.prop('disabled', false);
    }
    if ($pickerCount.length === 0 || $pickerCount.length === 1) {
      $remove.prop('disabled', true);

    }
    if ($pickerCount.length > 1) {
      $remove.prop('disabled', false);
    }
    if ($(this).closest('body').find('.datePicker').last().find('.from').val() === "" && $(this).closest('body').find('.datePicker').last().find('.to').val() === "") {
      $(this).prop('disabled', true);
    }

  }


  function datePickers() {
    var $body = $('body');
    var fromDatepicker = $body.find('.datePicker').last().find('.from').datepicker({
   //   changeMonth: true,
      dateFormat: 'dd/mm/yy',
      minDate: 0,
      firstDay: 1,
      hideIfNoPrevNext: true,
      showAnim: 'slideDown',
    // showOn: "both",
      showOtherMonths: true,
      selectOtherMonths: true,
      showStatus: true,
      minDate: 0,
      monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      monthNamesShort: ['Oca', 'Åub', 'Mar', 'Nis', 'May', 'Haz',
        'Tem', 'AÄu', 'Eyl', 'Eki', 'Kas', 'Ara'
      ],
      dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      dayNamesShort: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
      dayNamesMin: ['Pz', 'Pt', 'Sa', 'Çr', 'Pr', 'Cu', 'Ct'],
      beforeShowDay: function(date) {

        var enabled = true;

        var prevRows = $(this).closest('.datePicker').prevAll('.datePicker');

        prevRows.each(function() {
          var from = $(this).find(".from").datepicker("getDate");
          var to = $(this).find(".to").datepicker("getDate");
          //    console.log(date, from, to)
          if (date >= from && date <= to) {
            enabled = false;
            return false; // exit the .each() loop
          }
        });

        return [enabled, "", ""];
      },
      beforeShow: function(input, inst) {
        if ($('.datePart .datePicker').length > 1) {
          var $date = $(this).closest('.datePicker').prev().find('.to').datepicker('getDate');
          var minDate = moment($date.setDate($date.getDate() + 1)).format('M');
          var difference = minDate - moment().format('M');
          //$(this).datepicker( "option", "numberOfMonths", difference + 1);
          $(this).datepicker("option", "defaultDate", $date);



        }
      },
      onClose: function(selectedDate) {
        $body.find('.datePicker').last().find('.to').datepicker("option", "defaultDate", selectedDate);
      }

    });

    var toDatePicker = $body.find('.datePicker').last().find('.to').datepicker({
     // changeMonth: true,
      dateFormat: 'dd/mm/yy',
      minDate: 0,
      firstDay: 1,
      hideIfNoPrevNext: true,
      showAnim: 'slideDown',
     // showOn: "both",
      showOtherMonths: true,
      selectOtherMonths: true,
      showStatus: true,
      minDate: 0,
      monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      monthNamesShort: ['Oca', 'Ağu', 'Mar', 'Nis', 'May', 'Haz',
        'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'
      ],
      dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      dayNamesShort: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
      dayNamesMin: ['Pz', 'Pt', 'Sa', 'Çr', 'Pr', 'Cu', 'Ct'],
      beforeShowDay: function(date) {
        var enabled = true;
        var prevRows = $(this).closest('.datePicker').prevAll('.datePicker');
        var fromDate = fromDatepicker.datepicker('getDate');

        if (!fromDate || (date < fromDate)) {
          enabled = false;
          return false;
        }
        prevRows.each(function() {
          var from = $(this).find(".from").datepicker("getDate");
          var to = $(this).find(".to").datepicker("getDate");
          if (date >= from && date <= to) {
            enabled = false;
            return false; // exit the .each() loop
          }
        });
        return [enabled, "", ""];
      },
      onClose: function(selectedDate) {
        //$body.find('.datePicker').last().find('.to').datepicker("option", "maxDate", selectedDate + 1);
      }
    });
  }
  /* optional method disable pervious input boxes */

  function disablePreviouslyFilledInDatepickers() {
    var $datePart = $('.datePart'),
      $datePicker = $datePart.find('.datePicker').last();


    //if ($datePicker.length === 1) {
    /*   if ($datePicker.find('.from').val() && $datePicker.find('.to').val()) {

         $datePicker.find('.from').attr({
           'disabled': 'disabled'
         });
         $datePicker.find('.to').attr({
           'disabled': 'disabled'
         });
         
       }*/
    //}
  }

  function jsonDataforTooltipofCalendar(json) {
    return "Beceri Merkezi: " + json[0].CapacityCenter + " İsim: " + json[0].PersonInDuty + " Nöbet Türü: " + json[0].DutyType;
  }
  var valuesAll = [];
   var valuesFinal = [];

  function fillingArrayWithFields() {

    var $input = $('.input');


    var valuesDropdown1 = [];
    var valuesDropdown2 = [];
    var valuesRadiobox = [];
    var valuesStart = [];
    var valuesEnd = [];
    var valuesIds = [];
    
		
	
    var i = 0;
    $input.on('change', function() {
    
      var valuesPart1 = [];
      var valuesPart2 = [];
      var valuesId = [];
      var $datePicker = $('.datePart .datePicker');
     // var $datePickerId = 
     var $datePickerId =$(this).closest('.datePicker').prop('id');
     
     
      if ($datePicker.length >= 0) {
  
      
      

        if ($(this).closest('.datePicker').last().find('.from').val() !== "" &&
          $(this).closest('.datePicker').last().find('.to').val() !== "") {
        
       
           valuesId.push({'id' :{
              'id': $datePickerId
            }});
            valuesIds.push(valuesId[0]);
          
          
         
         valuesDropdown1.push({'CapacityCenter' :{
            "BeceriMerkezi": $('.firstdropdown option:selected').text()
          }});
          
         valuesDropdown2.push({'Name' :{
            "Isim": $('.seconddropdown option:selected').text()
          }});
          

          valuesRadiobox.push({'Type' :{
            'NobetTipi': $(this).closest('body').find('.radio:checked').next().text()
          }});
     
          valuesPart1.push($.extend(valuesIds[i], valuesDropdown1[i], valuesDropdown2[i], valuesRadiobox[i]));
       

          valuesStart.push({'Start' :{
            'Baslangic': $(this).closest('body').find('.datePart .datePicker').last().find('.from').datepicker("getDate")
          }});

          valuesEnd.push({'End':{
            'Bitis': $(this).closest('body').find('.datePart .datePicker').last().find('.to').datepicker("getDate")
          }});

          valuesPart2.push($.extend(valuesStart[i], valuesEnd[i]));

          i++;
      
          for (var keys in valuesPart2) {
              valuesAll.push($.extend(valuesPart1[0], valuesPart2[keys]));
          }
          console.log(valuesAll);
          
    }
 } 
    });
  }

  function deletingTheSpesificIndex() {
  	
    $('.updateButton').on('click', function() 
    {
    $('#new').prop('disabled', true);
   var $datePickerId = $(this).closest('.datePicker').prop('id');
   alert($datePickerId);
   $(this).closest('.datePicker').remove();
   $("#jqxCalendar").jqxCalendar({ specialDates: [] });
       valuesAll = valuesAll.filter(function(item) {
       console.log("id");
       console.log(item.id.id)
        return item.id.id !== $datePickerId;
     });
    
	  
        
 	  for(var keys in valuesAll)
        {
       
        var specialDatesArray = [];
          
          		var tmp = new Date();
              tmp = valuesAll[keys].Start.Baslangic;
            
              while(tmp <= valuesAll[keys].End.Bitis){
                
                       specialDatesArray.push({"date": tmp});
           
                tmp = new Date(tmp);
              	tmp.setDate(tmp.getDate() + 1);
           	
              }
						
              $.extend(valuesAll[keys], specialDatesArray);
            
				}
       console.log(valuesAll);
       var counter = 1; valuesAll.forEach(function(element,index){
       
        		for(var keys in element)
            {
              
                	if(element[keys].hasOwnProperty("date"))
                  {
                		var obj = element[keys];
  							              		
                  }
                 
                  $('#jqxCalendar').jqxCalendar('addSpecialDate', obj.date,'special' +counter,'Beceri Merkezi: ' + element.CapacityCenter.BeceriMerkezi +
'Nöbet Tipi ' + element.Type.NobetTipi+
'Nöbetçi İsmi ' + element.Name.Isim);
               
            }
            counter++;
            if(counter > 25){
            		counter = 1;
            }
            });
            createANewDatepickerSection();
            getDatesFromCurrentDatePickers();
   });

  
  }







  /* for making jqx calendar Turkish */
  (function(window, undefined) {

    var Globalize;

    if (typeof require !== "undefined" &&
      typeof exports !== "undefined" &&
      typeof module !== "undefined") {
      // Assume CommonJS
      Globalize = require("globalize");
    } else {
      // Global variable
      Globalize = window.Globalize;
    }

    Globalize.addCultureInfo("tr-TR", "default", {
      name: "tr-TR",
      englishName: "Turkish (Turkey)",
      nativeName: "Türkçe (Türkiye)",
      language: "tr",
      numberFormat: {
        ",": ".",
        ".": ",",
        "NaN": "n. def.",
        negativeInfinity: "-unendlich",
        positiveInfinity: "+unendlich",
        percent: {
          pattern: ["-n%", "n%"],
          ",": ".",
          ".": ","
        },
        currency: {
          pattern: ["-n $", "n $"],
          ",": ".",
          ".": ",",
          symbol: "€"
        }
      },
      calendars: {
        standard: {
          "/": ".",
          firstDay: 1,
          days: {
            names: ["Pazar", "Pazartesi", "Sa", "Ça", "Pe", "Cu", "Ct"],
            namesAbbr: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            namesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"]
          },
          months: {
            names: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""],
            namesAbbr: ["Oc", "Şb", "Mr", "Ns", "Ma", "Hz", "Tm", "At", "el", "Ek", "Ks", "Al", ""]
          },
          AM: null,
          PM: null,
          eras: [{
            "name": "n. Chr.",
            "start": null,
            "offset": 0
          }],
          patterns: {
            d: "dd.MM.yyyy",
            D: "dddd, d. MMMM yyyy",
            t: "HH:mm",
            T: "HH:mm:ss",
            f: "dddd, d. MMMM yyyy HH:mm",
            F: "dddd, d. MMMM yyyy HH:mm:ss",
            M: "dd MMMM",
            Y: "MMMM yyyy"
          }
        }
      }
    });

  }(this));



  $("#jqxCalendar").jqxCalendar({
    theme: 'bootstrap',
  });

  $("#jqxCalendar").jqxCalendar({
    culture: 'tr-TR'
  });
