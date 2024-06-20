export default function getTotalMonthsSince(dateString: string) {
    const [day, month, year] = dateString.split('/').map(Number);
    const pastDate = new Date(year, month - 1, day);

    const now = new Date();
    const yearsDiff = now.getFullYear() - pastDate.getFullYear();
    const monthsDiff = now.getMonth() - pastDate.getMonth();
    const daysDiff = now.getDate() - pastDate.getDate();

    let totalMonths = yearsDiff * 12 + monthsDiff;
    if (daysDiff < 0) {
        totalMonths -= 1;
    }

    return totalMonths;
};