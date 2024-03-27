import {classLists} from '../constants/cssClasses';
import { colorConstants } from '../constants/colors';

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space character before the maxLength
  const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

  // If a space is found, cut the text at that point
  if (lastSpaceIndex !== -1) {
    return text.substring(0, lastSpaceIndex) + "...";
  }

  // Otherwise, just cut the text at the maxLength
  return text.substring(0, maxLength) + "...";
}

export function formatDate(date) {
  const dateObject = new Date(date)
  const day = dateObject.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  // Add ordinal suffix for the day (e.g., "1st", "2nd", "3rd", "4th")
  const ordinalSuffix = ["th", "st", "nd", "rd"][
    day % 10 > 3 ? 0 : (((day % 100) - (day % 10) !== 10) * day) % 10
  ];

  return `${day}${ordinalSuffix} ${month}, ${year}`;
}

// FIXME:  do it
export function sentenceToSlug(sentence) {
    // Convert the sentence to lowercase.
    // sentence = sentence.toLowerCase();
  
    // Replace spaces with hyphens.
    let slug = sentence //.replace(/ /g, "-");
  
    // Remove special characters.
    // slug = slug.replace(/[^a-z0-9-]/g, "");
  
    return slug;
  }

export function classAdd(baseClass, ...args) {
  const allClasses = [baseClass, ...args];
  const filteredClasses = allClasses.filter(className => className);
  return filteredClasses.join(" ");
}

export function getClasses(componentIdentifier) {
  let classArr = classLists[componentIdentifier]
  return classArr ? classArr.filter(Boolean).join(' ') : "";
}

export function getClassesFromConstants(arr) {
  return arr.join(' ');
}

export function capitalizeWords(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase())
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getThemeColor(isDark){
  const theme = isDark ? colorConstants.light : colorConstants.dark;
  return theme;
}