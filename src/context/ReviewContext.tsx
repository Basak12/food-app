import React, { ReactNode, useState } from "react";
interface ReviewContextValue {
    handleReview: (id: string, title: string, content: string) => void;
    reviews: any;
    filterReviews: (id: string) => any;
}

export const ReviewContext = React.createContext<ReviewContextValue>({
    handleReview: () => {},
    reviews: [],
    filterReviews: () => {}
});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
    const [reviews, setReviews] = useState<any>([]);

    const handleReview = (id: string, title: string, content: string) => {
        setReviews([...reviews, { id, title, content }]);
    }

    const filterReviews = (id: string) => {
        return reviews.filter((review: any) => review.id === id);
    }

    const contextValue: ReviewContextValue = {
            handleReview, reviews, filterReviews
    };

    return (
        <ReviewContext.Provider value={contextValue}>
            {children}
        </ReviewContext.Provider>
    );
};
