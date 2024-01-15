function calculateAge() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
    var timeDifference = endDate.getTime() - startDate.getTime();
    var diffInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    var age = {
        years: Math.floor(diffInDays / 365),
        months: Math.floor((diffInDays % 365) / 30),
        days: (diffInDays % 365) % 30
    };
    document.getElementById('age').innerHTML = age.years + " Year(s), " + age.months + " Month(s), " + age.days + " Day(s)";
}