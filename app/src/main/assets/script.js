window.onload = () => {
	let date = new Date();
	let today = calculateDays(date);
	if (date.getHours() > 17) {
		today ++;
	}
	loadDay(today);
}

function loadDay(day) {
	const etmol = document.getElementById("etmol");
	const hayom = document.getElementById("hayom");
	const sefira = document.getElementById("sefira");
	etmol.innerText = yesterdayString(day - 1);
	hayom.innerText = todayString(day);
	sefira.innerText = sefiraString(day);
}

function yesterdayString(day) {
	let yesterdayString = "אֶתְמוֹל סָפַרְנוּ " + days[day-1];
	return yesterdayString;
}

function todayString(day) {
	let todayString = "הַיּוֹם " + days[day-1];
	return todayString;
}

function sefiraString(day) {
	let week = Math.floor((day - 1)/7);
	let dayInWeek = (day - 1)%7;
	return sefirot[dayInWeek] + "  שֶׁבַּ" + sefirot[week];
}



function calculateDays(date) {
	let year = date.getFullYear();
	let startDate = new Date(year,startMonths[(year-2000)%19],startDays[(year-2000)%19]);
	let difference = date.getTime() - startDate.getTime();
	return Math.ceil(difference / (1000 * 60 * 60 * 24));
}


const days = [
	"יוֹם אֶחָד לָעֹֽמֶר: ",
	"שְׁנֵי יָמִים לָעֹֽמֶר: ",
	"שְׁלֹשָׁה יָמִים לָעֹֽמֶר: ",
	"אַרְבָּעָה יָמִים לָעֹֽמֶר: ",
	"חֲמִשָּׁה יָמִים לָעֹֽמֶר: ",
	"שִׁשָּׁה יָמִים לָעֹֽמֶר: ",
	"שִׁבְעָה יָמִים לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד: ",
	"שְׁמוֹנָה יָמִים לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד וְיוֹם אֶחָד: ",
	"תִּשְׁעָה יָמִים לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד וּשְׁנֵי יָמִים: ",
	"עֲשָׂרָה יָמִים לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד וּשְׁלֹשָׁה יָמִים: ",
	"אַחַד עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד וְאַרְבָּעָה יָמִים: ",
	"שְׁנֵים עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד וַחֲמִשָּׁה יָמִים: ",
	"שְׁלֹשָׁה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שָׁבֽוּעַ אֶחָד וְשִׁשָּׁה יָמִים: ",
	"אַרְבָּעָה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת: ",
	"חֲמִשָּׁה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת ויוֹם אֶחָד: ",
	"שִׁשָּׁה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְׁנֵי יָמִים: ",
	"שִׁבְעָה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים: ",
	"שְׁמוֹנָה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְאַרְבָּעָה יָמִים: ",
	"תִּשְׁעָה עָשָׂר יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים: ",
	"עֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְשִׁשָּׁה יָמִים: ",
	"אֶחָד וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת: ",
	"שְׁנַיִם וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וְיוֹם אֶחָד: ",
	"שְׁלֹשָׁה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים: ",
	"אַרְבָּעָה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים: ",
	"חֲמִשָּׁה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים: ",
	"שִׁשָּׁה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים: ",
	"שִׁבְעָה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים: ",
	"שְׁמוֹנָה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת: ",
	"תִּשְׁעָה וְעֶשְׂרִים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְיוֹם אֶחָד: ",
	"שְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁנֵי יָמִים: ",
	"אֶחָד וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים: ",
	"שְׁנַיִם וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים: ",
	"שְׁלֹשָׁה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים: ",
	"אַרְבָּעָה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים: ",
	"חֲמִשָּׁה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת: ",
	"שִׁשָּׁה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד: ",
	"שִׁבְעָה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים: ",
	"שְׁמוֹנָה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים: ",
	"תִּשְׁעָה וּשְׁלֹשִׁים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים: ",
	"אַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים: ",
	"אֶחָד וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים: ",
	"שְׁנַיִם וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת: ",
	"שְׁלֹשָׁה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד: ",
	"אַרְבָּעָה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים: ",
	"חֲמִשָּׁה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים: ",
	"שִׁשָּׁה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים: ",
	"שִׁבְעָה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים: ",
	"שְׁמוֹנָה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים: ",
	"תִּשְׁעָה וְאַרְבָּעִים יוֹם לָעֹֽמֶר, שֶׁהֵם שִׁבְעָה שָׁבוּעוֹת: "
]

const sefirot = [
	"חֶסֶד",
	"גְּבוּרָה",
	"תִּפְאֶרֶת",
	"נֶצַח",
	"הוֹד",
	"יְסוֹד",
	"מַלְכוּת",
]

const startMonths = [3,3,2,3,3,3,3,3,3,3,2,3,3,2,3,3,3,3,2];
const startDays = [20,8,28,17,6,24,13,3,20,9,30,19,7,26,15,4,23,11,31];