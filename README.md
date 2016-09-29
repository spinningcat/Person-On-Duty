# PersonOnDuty

##### *What were use in this development.*

*JavaScript and jQuery were used together in this project.*

##### *The libraries that were used in this development.*

1. **Jquery UI**
2. **Jqx widget**
3. **Moment.js**

##### *The plugins are used in that project.*

1. **jQuery UI datepicker -> https://jqueryui.com/datepicker/**
2. **Jqx widget Calendar -> http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxcalendar/jquery-calendar-getting-started.htm**

##### *Aim of this development*

*This frontend development is aimed to offer good interface for such companies carries out the operation in 7/24 basis. Each department must assign a person for not only observing system but also report any problem to related department." 

##### *Feature and functionality of this Software (With images and code pieces)*

- **Both calendars are Turkish. Here is the piece of code that makes calendar Turkish.**

```javascript
      monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      monthNamesShort: ['Oca', 'Åub', 'Mar', 'Nis', 'May', 'Haz',
        'Tem', 'AÄu', 'Eyl', 'Eki', 'Kas', 'Ara'
      ],
      dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      dayNamesShort: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
      dayNamesMin: ['Pz', 'Pt', 'Sa', 'Çr', 'Pr', 'Cu', 'Ct'],
```

### **Figure 1 - jQuery Datepicker UI**

```javascript
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
```
### **Figure 2 - Jqx widget calendar**  

- You select the dates after creating datepickers with "+". After selecting both dates e.g. 16 September - 19 September, the dates in this range (16 to 19 inclusive) will be disabled. And days and the days before spesific date you select from first datepicker will be disabled too.**
![Dates1][Dates1]

[Dates1]: https://i.itsosticky.com/iq2udc.png "Disabled Dates"

- **When you select a date from next months in any datepickers. The next datepickers will show the next month automatically. Such as You pick a date from first datepicker. The date you picked is in next months such as OctoberEkim), November(Kasım), December(Aralık), etc. (Calendar indicates the current month as September(Eylül) currently.) In that case, second datepicker will show October(Ekim), Novermber(Kasım) or December(Aralık) as current month. Thanks to that functionality, you can save your time instead of wasting your time with trying to find month that you have select the dates. The reason of that, When you select 1 Oct.(Ekim) from first datepicker you cannot select any days from September(Eylül) in next datepickers.. Thats the prerequisite of this program.**
![Dates2][Dates2]

[Dates2]: https://i.itsosticky.com/10njc8l.png "Pervious Dates"

 - **Both calendars show the last days of pervious month.**
 - **Jqx widget calendar can be colorized after selecting dates from both datepickers.**
![Colorized][Colorized]

[Colorized]: https://i.itsosticky.com/10o9lqw.png "Colorized"

 - **Weekend Days are shown within a box in the image above**
 - **When you select the dates from both datepickers. Jqx calendar will be colorized with those selections and dates between. And when you hover over dates in the jqx calendar you will see "tooltip" with selected dates and dates between. Also selection from dropdowns and radiobox.**
![Tooltip][Tooltip]

[Tooltip]: https://i.itsosticky.com/zhi1pb.png "Tooltip"

 - You can remove any dates of range by clicking "pencil" button that you see beside input box.**
- **Anytime you can remove any datepickers. In case of concerning you made a mistake or in case of assigning different dates for a person. The operation is very simple but lots of going on behind the scene in functionality fashion. You just hit pencil button you can see besides input boxes. When you click it. It will remove input boxes and removes all colors and selection you made earlier. Then it will be recolorized with convenient informations. In short all range of dates and all informations you select from radiobox and dropdowns will be remembered. (This feature is personal logic, fot from API)**
![Before][Before]

[Before]: https://i.itsosticky.com/1a1iu96.png "Before"

![After][After]

[After]: https://i.itsosticky.com/131uzod.png "After"



##### *Feature Plans (Future)*

1. **In the datepicker's title you select month and year with dropdown. Make it like windows calendar's esque is in future plan. You click month to get all months in a box. And you click year in the datepicker's title to get years inside year box.**

![Months][Months]

[Months]: https://i.itsosticky.com/ij8mf0.png "Months"

![Years][Years]

[Years]: https://i.itsosticky.com/1tetm8k.png "Years"



2. **In case of the other months selection like October(Ekim), November(Kasım), December(Aralık), Next datepickers you create will show all next months accordingly. For example we are in September(Eylül) currently, if you use a date from October(Ekim), next datepicker will show October(Ekim) and November(Kasım). It is illustrated with image below. And code is below to accompolist that** 

```javascript
   var minDate = moment($date.setDate($date.getDate() + 1)).format('M');
          var difference = minDate - moment().format('M');
          $(this).datepicker( "option", "numberOfMonths", difference + 1);
```

![NextMonths][NextMonths]

[NextMonths]: https://i.itsosticky.com/8zw9f.png "NextMonths"

3. ***To show official holidays within a box in either jquery ui calendar or jqxwidget may
 be necessary so as to give a warning to user. Because person who plan the schedule
 To to spesific person, may need to be careful about that.**

##### "The working flow of this projet*

1. **Select the department from first dropdown.**
2. **Select a person name from second dropdown.**
3. **Select the type of duty from radio boxes.**
4. **Create input boxes with + button.**
5. **And select dates.**
6. **Optional: You can remove any ranges of date with the choice you made by clicking pencil button.**


#**[Working demo](http://jsfiddle.net/hellyeah/smzz2vvk/)**
