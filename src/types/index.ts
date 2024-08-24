export interface Event {
    id: string;
    theme: string;
    time: string;
    location: {
      type: string;
      place?: {
        name: string;
        pin: string;
      };
      online?: string;
    };
    speaker: {
      name: string;
      jobRole: string;
    };
    pitchDeck: {
      targetAudience: string;
      prerequisites: string[];
      contentLinks: {
        slideDeck: string;
        github: string;
        additionalResources: string[];
      };
    };
  }


export interface Member  {
    name: string;
    website: string;
    github: string;
}

export interface Sponsor {
    name: string;
    website: string
}