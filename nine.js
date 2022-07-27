const subscriptions = { hasPaid: true, courses: {} };

const getSubscriptions = (course) => {
    return subscriptions.courses[`${course}`] = { course, subscribers: [] };
}
console.log(getSubscriptions('html'));
console.log(subscriptions)