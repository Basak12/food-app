import React, { ReactNode, useState } from "react";
interface ReviewContextValue {
    handleReview: (id: string, title: string, content: string, rating: string) => void;
    reviews: any;
    filterReviewsById: (id: string) => any;
    filteredReviews: any;
}

export const ReviewContext = React.createContext<ReviewContextValue>({
    handleReview: () => {},
    reviews: [],
    filterReviewsById: () => {},
    filteredReviews: []
});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
    const [reviews, setReviews] = useState<any>([]);
    const [filteredReviews, setFilteredReviews] = useState<any>([]);


    const handleReview = (id: string, title: string, content: string, rating: string) => {
        setReviews([...reviews, { id, title, content, rating }]);
    }

    const filterReviewsById = (id: string) => {
        setFilteredReviews(reviews.filter((review: any) => review.id === id));
    }

    const contextValue: ReviewContextValue = {
            handleReview, reviews, filterReviewsById, filteredReviews
    };

    return (
        <ReviewContext.Provider value={contextValue}>
            {children}
        </ReviewContext.Provider>
    );
};
