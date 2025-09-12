import {create} from 'zustand';

interface StoreState {
    isQuoteModalOpen: boolean;
    openQuoteModal: () => void;
    closeQuoteModal: () => void;
}

export const useStore = create<StoreState>((set) => ({
    isQuoteModalOpen: false,
    openQuoteModal: () => set({isQuoteModalOpen: true}),
    closeQuoteModal: () => set({isQuoteModalOpen: false}),
}));