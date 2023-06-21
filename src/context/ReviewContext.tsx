import React, { ReactNode, useState } from "react";
interface ReviewContextValue {
    handleReview: (id: string, title: string, content: string) => void;
    reviews?: any;
}

export const ReviewContext = React.createContext<ReviewContextValue>({
    handleReview: () => {},
    reviews: []
});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
    const [reviews, setReviews] = useState<any>([]);

    const handleReview = (id: string, title: string, content: string) => {
        setReviews([...reviews, { id, title, content }]);
    }

    const contextValue: ReviewContextValue = {
            handleReview, reviews
    };

    return (
        <ReviewContext.Provider value={contextValue}>
            {children}
        </ReviewContext.Provider>
    );
};
