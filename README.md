# PersonOnDuty

#####*What are used in that project.*

*JavaScript and jQuery were used together in this project."

#####"The libraries that are used in this project.*
1. **Jquery UI**
2. **Jqx widget**

#####*The plugins are used in that project.*
1. **jQuery UI datepicker**
2. **Jqx widget Calendar**

#####*Aim of this software*

*This frontend development is aimed to offer good interface for such companies carries out the operation in 7/24 basis. Each department must assign a person for not only observing system but also report any problem to related department." 

#####*Feature and functionality of this Software (Briefly)*

1. **Two calendar plugins were used.**
2. **Calendars are Turkish.**
3. **When you create datepicker with + button. And after selecting range of date.  Days between those dates will be disabled also days before "starting date" will be disabled.**
4. **When you select a date from next months the next calendar will show the other months automatically.**
5. **Both calendars show the last days of pervious month**
6. **Jqx widget calendar can be colorized after selecting both dates.**
7. **Weekend Days are shown within a box**
8. **When you select the dates from both input boxes. Jqx calendar will be colorized and when you hover over you will see "tooltip" with your selection from dropdown and radiobox.**
9. **You can remove any dates of range by clicking "pencil" button that you see beside input box.**
10. **When you remove one of the input boxes, Above calendar will be colorized with other range of dates and with the choice you made, that is spesific to range of date. You can see when you hover over spesific range of date. (This feature is personal logic, fot from API)**
11. **You will see current date which is colorized with red in jqx calendar.**

#####*Feature Plan (Future)*
1. **In the datepicker's title you select month and year with dropdown. Make it like windows calenrdar's esque is in future plan. You click month to get all months in a box. And you click year in the datepicker's title to get years inside year box**
2. ** Lets say you choose a date from may and web are in January. Showing all months calendar together. **
3. **To show official holidays either in the jquery ui datepicker or in jqx calendar**


#####"The working flow of this projet*
1. **Select the department from first dropdown.**
2. **Select a person name from second dropdown.**
3. **Select the type of duty from radio boxes.**
4. **Create input boxes with + button.**
5. **And select dates.**
6. **Optional: You can remove any ranges of date with the choice you made by clicking pencil button. **


#**[Working demo](http://jsfiddle.net/hellyeah/smzz2vvk/)**

#####*Semantic Overview*

*Two calendar plugins were used.*
1. **https://jqueryui.com/datepicker/**
2. **http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxcalendar/jquery-calendar-getting-started.htm**
*Calendar are Turkish*
``
      monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      monthNamesShort: ['Oca', 'Åub', 'Mar', 'Nis', 'May', 'Haz',
        'Tem', 'AÄu', 'Eyl', 'Eki', 'Kas', 'Ara'
      ],
      dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      dayNamesShort: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
      dayNamesMin: ['Pz', 'Pt', 'Sa', 'Çr', 'Pr', 'Cu', 'Ct'],
``
###**Figure 1 - jQuery Datepicker UI**

``
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
``
###**Figure 2 - Jqx widget calendar**  

*When you create datepicker with + button. And after selecting range of date.  Days between those dates will be disabled also days before "starting date" will be disabled.*

![Dates1][Dates1]

[Dates1]: https://i.itsosticky.com/iq2udc.png "Disabled Dates"

*Both calendars show the last days of pervious month*

![Dates2][Dates2]

[Dates2]: https://i.itsosticky.com/10njc8l.png "Pervious Dates"

*Jqx widget calendar can be colorized after selecting both dates.*

![Colorized][Colorized]

[Colorized]: https://i.itsosticky.com/10o9lqw.png "Colorized"

*When you select the dates from both input boxes. Jqx calendar will be colorized and when you hover over you will see "tooltip" with your selection from dropdown and radiobox.*
![Tooltip][Tooltip]

[Tooltip]: https://i.itsosticky.com/zhi1pb.png "Tooltip"

When you remove one of the input boxes, Above calendar will be colorized with other range of dates and with the choice you made, that is spesific to range of date. You can see when you hover over spesific range of date. (This feature is personal logic, fot from API)

![Before][Before]

[Before]: https://i.itsosticky.com/1a1iu96.png "Before"

![After][After]

[After]: https://i.itsosticky.com/131uzod.png "After"


