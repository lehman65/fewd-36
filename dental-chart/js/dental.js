

var inArea,
    map = $('#upper'),
    captions = {
        paul: ["Paul McCartney - Bass Guitar and Vocals",
            "Paul McCartney's song, Yesterday, recently voted the most popular song "
                + "of the century by a BBC poll, was initially composed without lyrics. "
                + "Paul used the working title 'scrambled eggs' before coming up with the final words."],
        ringo: ["Ringo Starr - Drums",
            "Dear Prudence was written by John and Paul about Mia Farrow's sister, Prudence, "
            + "when she wouldn't come out and play with Mia and the Beatles at a religious retreat "
            + "in India."],
        john: ["John Lennon - Guitar and Vocals",
            "In 1962, The Beatles won the Mersyside Newspaper's biggest band in Liverpool "
            + "contest principally because they called in posing as different people and voted "
            + "for themselves numerous times."],
        george: ["George Harrison - Lead Guitar and Vocals",
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
          $('#upper-caption').show();
      },
      onMouseout: function (data) {
          inArea = false;
          $('#upper-caption').hide();
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
     });