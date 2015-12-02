// a cross reference of area names to text to be shown for each area
 var xref = {
     ubu: "<b>Carrots</b> are delicious and may turn your skin orange!",
     rbu: "<b>Asparagus</b> is one of the first vegetables of the spring. " 
         +"Being a dark green, it's great for you, and has interesting side effects.",
     lu: "<b>Squash</b> is a winter vegetable, and not eaten raw too much. Is that really squash?",
     15: "<b>Red peppers</b> are actually the same as green peppers, they've just been left on "
         +"the vine longer. Delicious when fire-roasted.",
     14: "Similar to red peppers, <b>yellow peppers</b> are sometimes sweeter.",
     13: "<b>Celery</b> is a fascinating vegetable. Being mostly water, it actually takes your body "
         +"more calories to process it than it provides.",
     12: "<b>Cucumbers</b> are cool.",
     11: "<b>Broccoli</b> is like a forest of goodness in your mouth. And very good for you. "
         +"Eat lots of broccoli!",
     16: "Everything here is good for you but this one. <b>Don't be a dip!</b>"
 };
 
 var defaultDipTooltip = 'I know you want the dip. But it\'s loaded with saturated fat, just skip it '
     +'and enjoy as many delicious, crisp vegetables as you can eat.';
 
 var image = $('#upper');

 image.mapster(
 {
     fillOpacity: 0.4,
     fillColor: "d42e16",
     stroke: true,
     strokeColor: "3320FF",
     strokeOpacity: 0.8,
     strokeWidth: 4,
     singleSelect: true,
     mapKey: 'name',
     listKey: 'name',
     onClick: function (e) {
         var newToolTip = defaultDipTooltip;
         
         // update text depending on area selected
         $('#selections').html(xref[e.key]);
         
         // if Asparagus selected, change the tooltip
         if (e.key === 'rbu') {
             newToolTip = "OK. I know I have come down on the dip before, but let's be real. "
                 +"Raw asparagus without any of that delicious ranch and onion dressing "
                 +"slathered all over it is not so good.";
         }
         image.mapster('set_options', { 
             areas: [{
                 key: "16",
                 toolTip: newToolTip
                 }]
             });
     },
     showToolTip: true,
     toolTipClose: ["tooltip-click", "area-click"],
     areas: [
         {
             key: "ubu",
             fillColor: "ffffff"
         },
         {
             key: "rbu",
             fillColor: "000000"
         },
         {
             key: "ul",
             fillColor: "000000"
         },
         {
             key: "16",
             toolTip: defaultDipTooltip
         },
         {
             key: "15",
             strokeColor: "FFFFFF"
         }
         ]
 });

/*var inArea,
    map = $('#upper'),
    captions = {
        ubu: ["Paul McCartney - Bass Guitar and Vocals",
            "Paul McCartney's song, Yesterday, recently voted the most popular song "
                + "of the century by a BBC poll, was initially composed without lyrics. "
                + "Paul used the working title 'scrambled eggs' before coming up with the final words."],
        rbu: ["Ringo Starr - Drums",
            "Dear Prudence was written by John and Paul about Mia Farrow's sister, Prudence, "
            + "when she wouldn't come out and play with Mia and the Beatles at a religious retreat "
            + "in India."],
        lu: ["John Lennon - Guitar and Vocals",
            "In 1962, The Beatles won the Mersyside Newspaper's biggest band in Liverpool "
            + "contest principally because they called in posing as different people and voted "
            + "for themselves numerous times."],
        16: ["George Harrison - Lead Guitar and Vocals",
            "The Beatles' last public concert was held in San Francisco's Candlestick "
            + "Park on August 29, 1966."]
    },

single_opts = {
      fillColor: '000000',
      fillOpacity: 0,
      stroke: true,
      strokeColor: 'ff0000',
      strokeWidth: 2
  },
  all_opts = {
      fillColor: 'ffffff',
      fillOpacity: 0.6,
      stroke: true,
      strokeWidth: 2,
      strokeColor: 'ffffff'
  },
  initial_opts = {
      mapKey: 'data-name',
      isSelectable: false,
      onMouseover: function (data) {
          inArea = true;
          $('#upper-caption-header').text(captions[data.key][0]);
          $('#upper-caption-text').text(captions[data.key][1]);
          $('#upperBox').show();
      },
      onMouseout: function (data) {
          inArea = false;
          $('#upperBox').hide();
      }
  };
  opts = $.extend({}, all_opts, initial_opts, single_opts);

 
map.mapster('unbind')
     .mapster(opts)
     .bind('mouseover', function () {
         if (!inArea) {
             map.mapster('set_options', all_opts)
                 .mapster('set', true, 'all')
                 .mapster('set_options', single_opts);
         }
     }).bind('mouseout', function () {
         if (!inArea) {
             map.mapster('set', false, 'all');
         }
     });*/