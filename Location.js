
    $(document).ready(function () {
        $("button").click(function () {
            alert("Name: " + $("#Name").val());
        });
    $("button").click(function () {
        alert("Father's Name: " + $("#FatherName").val());
            });
    $("button").click(function () {
        alert("Form has been submitted successfully");
            });
        });

    var countryObject = {
        "France": {
        "Bordeaux": ["Cenon", "Libourne", "Pessac"],
    "Grand Est": ["Colmar", "Villé", "Strasbourg"],
    "Occitanie": ["Albi", "Béziers", "Carcassonne"]
            },
    "India": {
        "Madhya Pradesh": ["Betul", "Bhind", "Bhopal", "Burhanpur", "Chhindwara", "Chhatarpur", "Damoh", "Datia", "Dewas", "Guna", "Gwalior", "Indore", "Itarsi", "Khargone", "Jabalpur", "Katni", "Khandwa", "Mandsaur", "Morena", "Nagda", "Narmadapuram", "Neemuch", "Pitampur", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shivpuri", "Singrauli", "Ujjain", "Vidisha"],
    "Maharashtra": ["Achalpur", "Ahmednagar", "Amravati", "Aurangabad", "Jalgaon", "Kalyan-Dombivli", "Kolhapur", "Mumbai", "Nagpur", "Nashik", "Navi Mumbai", "Panvel", "Pune", "Sangli", "Satara", "Solapur", "Thane"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Amroha", "Ayodha", "Bareilly", "Budaun", "Chandausi", "Etah", "Etawah", "Fatehpur", "Firozabad", "Ghaziabad", "Gorakhpur", "Hapur", "Hardoi", "Hathras", "Jhansi", "Kasganj", "Mirzapur", "Muzzafarngar", "Kanpur", "Lucknow", "Mathura", "Meerut", "Moradabad", "Noida", "Pilibhit", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Shahjahanpur", "Varanasi"],
    "Uttarakhand": ["Almora", "Bageshwar", "Champawat", "Dehradun", "Devprayag", "Haldwani", "Haridwar", "Jyotirmath", "Kashipur", "Khatima", "Kirtinagar", "Kotdwar", "Mussorie", "Nainital", "Pantnagar", "Pauri", "Pithoragarh", "Purola", "Ramnagar", "Ranikhet", "Rishikesh", "Roorkee", "Rudrapur", "Sitarganj", "Srinagar Garhwal", "Tanakpur", "Uttarkashi", "Vikas Nagar"]
            },
    "USA": {
        "California": ["Los Angeles", "San Francisco"],
    "Florida": ["Cape Coral", "Sea Side"]
            }
        }

    window.onload = function () {
            var countryl = document.getElementById("country");
    var statel = document.getElementById("state");
    var cityl = document.getElementById("city");
    for (var x in countryObject) {
        countryl.options[countryl.options.length] = new Option(x, x);
            }
    countryl.onchange = function () {
        cityl.length = 1;
    statel.length = 1;
    for (var y in countryObject[this.value]) {
        statel.options[statel.options.length] = new Option(y, y);
                }
            }
    statel.onchange = function () {
        cityl.length = 1;
    var z = countryObject[countryl.value][this.value];
    for (var i = 0; i < z.length; i++) {
        cityl.options[cityl.options.length] = new Option(z[i], z[i]);
                }
            }
        }
