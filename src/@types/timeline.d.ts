interface JobRole {
    position: string;
    startYear: number;
    endYear: number;
}

interface TimelineEventData {
    companyLogo: ImageMetadata;
    companyName: string;
    startYear: number;
    endYear: number;
    roles: JobRole[];
}
