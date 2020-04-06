<template>
    <div></div>
</template>

<script>
    export default {
        name: "Glossary",
        methods:{
            data(){
                return{
                    sunrise:"The instant in the morning under ideal meteorological conditions, " +
                            "with standard refraction of the Sun's rays, when the upper edge of the " +
                            "sun's disk is coincident with an ideal horizon.",
                    sunset:"The instant in the evening under ideal meteorological conditions, with " +
                        "standard refraction of the Sun's rays, when the upper edge of the sun's disk " +
                        "is coincident with an ideal horizon.",
                    dayLength:"The the time each day from the moment the upper limb of the sun's disk " +
                              "appears above the horizon during sunrise to the moment when the upper limb " +
                              "disappears below the horizon during sunset.",
                    solarNoon:"The moment which the Sun reaches its highest position in the sky.",
                    sunDistance:"The distance of your location to the Sun.",

                    moonrise:"The instant when, in the eastern sky, under ideal meteorological conditions, " +
                            "with standard refraction of the Moon's rays, the upper edge of the Moon's disk " +
                            "is coincident with an ideal horizon.",
                    moonset:"The instant when, in the western sky, under ideal meteorological conditions, with " +
                            "standard refraction of the Moon's rays, the upper edge of the Moon's disk is " +
                        "coincident with an ideal horizon.",
                    moonDistance:"The distance of your location to the Moon.",

                    latitude:"The angular distance of a place north or south of the earth's equator, " +
                             "or of a celestial object north or south of the celestial equator, usually " +
                             "expressed in degrees and minutes.",
                    longitude:"The angular distance of a place east or west of the meridian at Greenwich, " +
                              "England, or west of the standard meridian of a celestial object, usually " +
                              "expressed in degrees and minutes.",

                    marsWeatherDateEarth:"The latest forecast of the weather in Mars on gregorian calendar.",
                    marsWeatherSol:"The term Sol is used by planetary astronomers to refer to the " +
                                   "duration of a solar day on Mars.",
                    marsWeatherAverage:"The average temperature of Mars based on this date.",
                    marsWeatherMaximum:"The maximum temperature of Mars based on this date.",
                    marsWeatherMinimum:"The minimum temperature of Mars based on this date.",
                    marsWeatherSeason:"Mars has seasons. The planet experiences all four seasons " +
                                      "that the Earth does, but, since the year is longer on the planet, the axial " +
                                      "tilt is different, and Mars has a more eccentric orbit than Earth, the seasons " +
                                      "are not the same length as each other or the same in each hemisphere.",

                    earthMass:"The Earth mass is a standard unit of mass in astronomy that is used to indicate the " +
                              "masses of other planets, including rocky terrestrial planets and exoplanets.",
                    earthVolume:"The earth is approximately a sphere (actually it is sphere slightly flattened at the " +
                              "poles). Its volume can be calculated if you know its radius.",
                    earthDensity:"This is an average value of density of the all known materials on the planet.",
                    earthGravity:"The force that attracts a body toward the center of the earth, " +
                                 "or toward any other physical body having mass.",
                    earthEscape:"The minimum velocity which a body should travel to escape from the earth's " +
                                "gravitational field.",
                    earthInclination:"Orbital inclination measures the tilt of an object's orbit around a celestial " +
                                     "body. It is expressed as the angle between a reference plane and the orbital " +
                                     "plane or axis of direction of the orbiting object. An inclination of 0° means " +
                                     "the orbiting body has a prograde orbit in the planet's equatorial plane.",
                    earthRadius:"Earth radius is the distance from the center of Earth to a point on its surface.",
                    earthSiderealOrbit:"The amount of time (in days) which Earth takes to do a complete revolution " +
                                      "around a celestial body, e.g. the Earth orbiting the Sun. This is the " +
                                      "reason why a normal year has 365 calendar days. Each year this remaining " +
                                      ".256 value is summed and after four years we have the leap day.",
                    earthSiderealRotation:"The amount of time it takes for the Earth to complete one " +
                                         "rotation about its axis with respect to the 'fixed' stars.",

                    magneticDeclination:"The angle on the horizontal plane between magnetic north (the direction " +
                                        "the north end of a magnetized compass needle points, corresponding to " +
                                        "the direction of the Earth's magnetic field lines) and true north " +
                                        "(the direction along a meridian towards the geographic North Pole). " +
                                        "This angle varies depending on position on the Earth's surface and " +
                                        "changes over time.",
                    magneticInclination:"The angle made with the horizontal by the Earth's magnetic field lines. " +
                                        "This angle varies at different points on the Earth's surface. " +
                                        "Positive values of inclination indicate that the magnetic " +
                                        "field of the Earth is pointing downward, into the Earth, " +
                                        "at the point of measurement, and negative values " +
                                        "indicate that it is pointing upward.",
                    magneticTotal_intensity:"Attribute of a magnetic, electric, gravitational, or other field " +
                                            "of force that at any point is measured by the force which the " +
                                            "field exerts upon a unit pole, unit charge, or unit " +
                                            "mass placed at that point",

                    cometAbsoluteMagnitude:"Scale which measures the luminosity of a celestial object. " +
                                           "The lower the value more brighter the object is.",
                    cometDesignation:"The name of the Comet. Comets are now designated by the year of their discovery " +
                                     "followed by a letter indicating the half-month of the discovery and a number" +
                                     " indicating the order of discovery.",
                    cometEstimatedDiameter:"The average of maximum and minimum estimated diameter of the comet.",
                    cometPotentiallyHazard:"Potentially hazardous asteroids and comets or, more generally, " +
                                           "potentially hazardous objects (PHOs) are defined to be " +
                                           "near-Earth asteroids or comets (near-Earth objects [NEOs]) " +
                                           "with orbits that come close to Earth. These potentially " +
                                           "hazardous objects have the potential to cause significant " +
                                           "human suffering unlike anything we have encountered in our " +
                                           "history if Earth impact with a PHO did indeed occur.",
                    cometSentryObject:"Comet's possibility of future impact with Earth over the next 100 years.",
                    cometId:"ID of the Comet within the database.",
                    cometCloseApproach:"The exact date which the comet will pass/passed closest to Earth.",
                    cometRelativeVelocity:"The velocity which the comet will be/was travelling when on closest " +
                                          "approach phase of Earth.",
                    cometMissDistance:"The closest distance which the comet will be/was from Earth.",

                    CloseApproachDate:"The exact time which the comet will pass/passed closest to Earth.",
                    CloseApproachRelativeVelocity:"The velocity which the comet will be/was travelling when on closest " +
                                                  "approach phase of Earth.",
                    CloseApproachMissDistance:"The closest distance which the comet will be/was from Earth.",
                    CloseApproachOrbitingBody:"The celestial body the comet will pass/passed nearby.",

                    cometSearchId:"The ID of the comet.",
                    cometSearchName:"The name of the comet.",
                    cometSearchAbsoluteMagnitude:"Scale which measures the luminosity of a celestial object. " +
                                                 "The lower the value more brighter the object is.",
                    cometSearchCloseApproach:"The exact time which the comet will pass/passed closest to Earth.",

                    feltOnEarthId:"The ID of the comet.",
                    feltOnEarthType:"If has fell from sky or was found on Earth.",
                    feltOnEarthLatitude:"The angular distance of a place north or south of the earth's equator, " +
                        "or of a celestial object north or south of the celestial equator, usually " +
                        "expressed in degrees and minutes.",
                    feltOnEarthLongitude:"The angular distance of a place east or west of the meridian at Greenwich, " +
                        "England, or west of the standard meridian of a celestial object, usually " +
                        "expressed in degrees and minutes.",
                    feltOnEarthMass:"The measure of the amount of matter in a comet.",
                    feltOnEarthName:"Name of the local which the comet fell/was found.",
                    feltOnEarthYear:"Year the comet fell on Earth.",

                    issSatelliteNumber:"The Satellite ID of the station.",
                    issLatitude:"The angular distance of a place north or south of the earth's equator, " +
                                "or of a celestial object north or south of the celestial equator, usually " +
                                "expressed in degrees and minutes.",
                    issLongitude:"The angular distance of a place east or west of the meridian at Greenwich, " +
                                 "England, or west of the standard meridian of a celestial object, usually " +
                                 "expressed in degrees and minutes.",
                    issAltitude:"The height of an object or point in relation to sea level or ground level.",
                    issVelocity:"The speed of something in a given direction.",
                    issVisibility:"If the station is visible in the sky or not.",
                }
            }
        }
    }
</script>

<style>
</style>