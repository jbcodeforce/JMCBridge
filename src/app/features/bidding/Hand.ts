import { Card } from './Card';
import { TrustedString } from '@angular/core/src/sanitization/bypass';

export class Hand {
    position: string = "South";
    cardsAsString?: string[];
    cards?: Card[];
}