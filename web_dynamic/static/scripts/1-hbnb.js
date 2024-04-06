$(document).ready(() => {
    // store the amenities that has been checked
    const selectedAmenities = {};
    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(() => {
        // Get the 'data-name'
        const amenityName = $(this).data('name');
        // Check if checkbox is checked
        if ($(this).is(':checked')) {
            // set the amanity as a property in the amenities object
            // with the value of true
            selectedAmenities[amenityName] = true;
        } else {
            // if unchecked, delete the amenity from amenities
            delete selectedAmenities[amenityName]
        }
        // store the list of selected amenities in a string
        let amenitiesList = '';
        for (const id in amenities) {
            // if amenitiesList is empty add the ammenity without comma
            if (amenitiesList === '') amenitiesList += id;
            else amenitiesList += ', ' + id;
        }
        // update the h4 tag inside the div Amenities with the
        // list of Amenities checked
        $('div.amenities h4').text(amenitiesList)
    });
});
