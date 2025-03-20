export const reviewsLoader = async () => {
    try {
    const response = await fetch('../../public/review.json');
    if (!response.ok) {
        throw new Error('Failed to fetch reviews');
    }
    return response.json();
    } catch (error) {
    console.error('Error fetching reviews:', error);
      return []; // Return an empty array if there's an error
    }
};
