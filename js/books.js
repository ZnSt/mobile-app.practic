// const books = [
//   {
//     id: "1",
//     title: `Apple. Эволюция компьютера`,
//     author: `Владимир Невзоров`,
//     img: `https://bukva.ua/img/products/449/449532_200.jpg`,
//     plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно
//     и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории
//     персональных компьютеров в целом.
//     В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей,
//     сопровождающиеся большим количеством оригинальных студийных фотографий.
//     Книга предназначена для широкого круга читателей, интересующихся историей электроники.
//     Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
//   },
//   {
//     id: "2",
//     title: `Как объяснить ребенку информатику`,
//     author: `Кэрол Вордерман`,
//     img: `https://bukva.ua/img/products/480/480030_200.jpg`,
//     plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах
//     в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы,
//     оставаясь в безопасности.
//     Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве,
//     от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном
//     обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина -
//     объясняются наглядно с помощью иллюстраций и схем.`,
//   },
//   {
//     id: "3",
//     title: `Путь скрам-мастера. #ScrumMasterWay`,
//     author: `Зузана Шохова`,
//     img: `https://bukva.ua/img/products/480/480090_200.jpg`,
//     plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой.
//     Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными
//     знаниями будете в течение всей карьеры.
//     Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера,
//     как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером,
//     какими инструментами ему нужно пользоваться.`,
//   },
// ];

// export default books;

// const array = [1, 2, 5, 7, 8, 9, 12, 14, 15, 17, 18, 22];

// let total = 0;

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);

//   if (array[i] % 2 === 0) {
//     total += array[i];
//   }
// }
// console.log("Total: ", total);

// const string = "Top 10 benefits of React framework";
// console.log(string);

// const normilizedString = string.toLocaleLowerCase().split(" ").join("-");
// console.log(normilizedString);

// const array1 = [5, 10, 25, 30];
// const array2 = [10, 35, 45];
// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// const calculateTotalPrice = function (items) {
//   console.log("items:", items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 5]));
// console.log(calculateTotalPrice([15, 15, 15]));
// console.log(calculateTotalPrice([45, 56, 76]));

// const calculateTotalSum = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalSum([1, 2, 5]));
// console.log(calculateTotalSum([15, 15, 15]));
// console.log(calculateTotalSum([45, 56, 76]));
// console.log(calculateTotalSum([100, 300, 500]));

// const changeCase = function (string) {
//   const letters = string.split("");
//   let invertedString = "";

//   for (const letter of letters) {
//     const isItLowerCase = letter === letter.toLowerCase();

//     invertedString += isItLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase("qweRTY"));
// console.log(changeCase("mAnGo"));
// console.log(changeCase("AjAX"));
// console.log(changeCase("PolY"));

// const slugify = function (string) {
//   // const lowerWords = string.toLowerCase();
//   // const splitWords = lowerWords.split(" ");
//   // const words = splitWords.join("-");

//   // return words;

//   const slug = string.toLowerCase().split(" ").join("-");
//   return slug;
// };

// console.log([slugify("Top 10 benefits of React framework")]);
// console.log([slugify("Azure Static Web Apps are Awesome")]);
// console.log([slugify("Techical writing tips for non-native English speakers")]);
// console.log([slugify("Top 20 Video Extreame in YouTube")]);

// const add = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5, 6, 7));

// const filterNumbers = function (array, ...args) {
//   // console.log("array:", array);
//   // console.log("args:", args);

//   const uniqueElement = [];

//   for (const element of array) {
//     const real = args.includes(element);

//     if (real) {
//       uniqueElement.push(real);
//       console.log(`${element} есть!`);
//     }
//   }
//   return uniqueElement;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 2, 12, 4));
// console.log(filterNumbers([10, 20, 30, 40, 50], 23, 30, 34, 40));
// console.log(filterNumbers([100, 200, 300, 400, 500], 5, 24, 400, 67));

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let result = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > result.length) {
//       result = words[i];
//     }
//   }

//   return result;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   const checkFruits = fruits.includes(fruit) ? true : false;

//   return checkFruits;
// }

// console.log(checkFruit());

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function getEvenNumbers(start, end) {
//   const newArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }

//   return newArray;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);

// function calculateEngravingPrice(message, pricePerWord) {
//   let total = 0;
//   const split = message.split(" ");
//   console.log(split);
//   const length = split.length;
//   console.log(length);

//   total = length * pricePerWord;
//   return total;
// }

// calculateEngravingPrice("JavaScript is in my blood");
// calculateEngravingPrice("JavaScript is in my blood");
// calculateEngravingPrice("Web-development is creative work");
// calculateEngravingPrice("Web-development is creative work");

// function findLongestWord(string) {
//   const words = string.split(" ");
//   console.log(words);
//   let result = words[0];
//   console.log(result);

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > result.length) {
//       result = words[i];
//     }
//   }

//   return result;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// const playlist = {
//   name: "The best my tracklist",
//   rating: 5,
//   trackId: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.trackId.push(track);
//   },

//   changeRating(newRating) {
//     this.rating = newRating;
//   },

//   updateTrackCount() {
//     return this.trackId.length;
//   },
// };

// playlist.changeName("New name");

// playlist.addTrack("New track");
// playlist.addTrack("New track");

// playlist.changeRating(10);
// console.log(playlist);

// const friends = [
//   {
//     name: "Mango",
//     online: false,
//   },
//   {
//     name: "Kiwi",
//     online: true,
//   },
//   {
//     name: "Poly",
//     online: true,
//   },
//   {
//     name: "Ajax",
//     online: false,
//   },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//   const friendsOnline = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       friendsOnline.push(friend);
//     }
//   }
//   return friendsOnline;
// };

// console.log(getOnlineFriends(friends));

// const getFriendOffline = function (allFriends) {
//   const offlineFriends = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(!friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getFriendOffline(friends));

// const status = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//     } else {
//       friendsByStatus.offline.push(friend);
//     }
//   }

//   return friendsByStatus;
// };

// console.log(status(friends));

// const temps = [1, 2, 3, 4, 5, 6, 78, 98];
// const result = [...temps];
// console.log(result);

// const a = [{ x: 1 }, { y: 2 }, { z: 4 }];
// const b = [...a];
// console.log(a);
// console.log(b);

// console.log(a === b);
// console.log(a[1]);
// console.log(b[1]);

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };

// const { name, rating, tracks, trackCount: numberOfTracks, author = 555 } = playlist;
// console.log(name, rating, tracks, numberOfTracks, author);

// const profile = {
//   name: "James Brown",
//   tags: "jjbr",
//   locations: "Oslo, Norway",
//   avatar: "links",
//   stats: {
//     followers: 5456,
//     likes: 4578,
//     views: 5678,
//   },
// };

// const {
//   name,
//   tags,
//   locations,
//   avatar,
//   stats: { followers, likes, views },
// } = profile;

// console.log(name, tags, locations, avatar, followers, likes, views);

const authors = {
  kiwi: 4,
  poly: 6,
  ajax: 8,
  mango: 9,
};

