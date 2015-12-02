
// populates unique values in an array from area keys

Array.prototype.unique = function () {
    var o = {}, i, l = this.length,
        r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};

$(document).ready(function () {
    var img = $('img'),
        list = $('#boundList');
    // get each unique value of attribute "state" from the areas;
    // sort them; then generate an unordered list from these values(boundList).
    // add an attribute "state='#'" to each one to bind to the map(imagemapping)
    // key
    //calling unique values from array
    var states = Array.prototype.map.call($('area'),
    function (e) {
        return e.getAttribute('state');
    }).unique()
        .sort()
        .forEach(function (e) {
        var el = $('<li/>').attr('state', e).text(e);
        list.append(el);
    });
    // bind selection of a state to the UL we created. The "listSelectedClass"
    // option causes the class "selected" to be added or removed
    // from the element in "boundList" whose "state" attribute has a value
    // matching the mapKey for the selected area.
    img.mapster({ 
        mapKey: 'state',
        boundList: list.find('li'),
        listKey: 'state',
        listSelectedClass: 'selected'
    });
    // bind click event 
    $(document).on('click','#boundList li',function(e) {
        var el = $(e.target);
       //el.toggleClass('selected');
        //debugger;
        img.mapster('set',null,el.attr('state')); 
        //changing selections manually doesn't result in the boundList
        // being fired, we still have to set the state on the list item
        //clear all function 
    }).on('click','#clearAll',function(e) {
       e.preventDefault();
        img.mapster('set',false,img.mapster('get'));
    });
});