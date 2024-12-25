export const getPublishedInfo = (publishedDate) => {
    const date = new Date(publishedDate);
    const currentDate = new Date();
    const diffs = currentDate - date;   // Difference in milliseconds
    const seconds = Math.floor(diffs / 1000);     // Diff in Seconds
    const minutes = Math.floor(seconds / 60);     // Diff in minutes
    const hours = Math.floor(minutes / 60);        // Diff in hours
    const days = Math.floor(hours / 24);           // Diff in days
    const months = Math.floor(days / 30);              // Diff in months
    const years = Math.floor(months / 12);              // Diff in years

    if (years !== 0) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
    }

    if (months !== 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
    }

    if (days !== 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
    }

    if (hours !== 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }

    if (minutes !== 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    }

    return "now";
}

export const getViewCount = (views) => {
    // views = "20142967" => 20M
    // 142967 => 142K
    // 42967 => 42K

    if (views.length > 6) {
        return `${views.slice(0, -6)}M views`
    } else if (views.length > 3) {
        return `${views.slice(0, -3)}K views`
    } else {
        return `${views} views`
    }

}

export function convertTime(input) {
    // Regex to capture hours (optional), minutes (optional), and seconds (optional)
    const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;

    // Match the input string with the regex
    const match = input.match(regex);

    if (match) {
        // Extract hours, minutes, and seconds (default to 0 if not present)
        const hours = match[1] ? parseInt(match[1], 10) : 0;
        const minutes = match[2] ? parseInt(match[2], 10) : 0;
        const seconds = match[3] ? parseInt(match[3], 10) : 0;

        // Format the result as HH:MM:SS
        let formattedTime;
        if (hours !== 0) {
            formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        return formattedTime;
    } else {
        return null; // Invalid format
    }
}

export function generateRandomFirstName() {
    const firstNames = [
        "John", "Jane", "Alex", "Emily", "Chris", "Katie",
        "Michael", "Sarah", "David", "Sophia", "Daniel", "Emma"
    ];

    // Generate a random index for the array
    const randomIndex = Math.floor(Math.random() * firstNames.length);

    // Return the random first name
    return firstNames[randomIndex];
}

export function generateRandomMessage() {
    const messages = [
        "Hello! How are you today?",
        "Have a great day ahead!",
        "Keep pushing forward, you're doing great!",
        "Don't forget to take breaks and stay hydrated.",
        "Success is the sum of small efforts, repeated daily.",
        "You’ve got this! Keep up the amazing work.",
        "Believe in yourself and all that you are.",
        "A little progress each day adds up to big results.",
        "Stay positive and keep smiling!",
        "The best way to predict the future is to create it."
    ];

    // Generate a random index for the array
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Return the random message
    return messages[randomIndex];
}

