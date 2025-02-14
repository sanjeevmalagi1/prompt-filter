interface Reference {
    _id: string;
    created: string;
    updated: string;
    url: string;
    storage_url: string | null;
    name: string | null;
    source: string;
    summary: string | null;
    type: string;
    tags: string[];
}

interface Metrics {
    version: string;
    vectorString: string;
    attackVector: string;
    attackComplexity: string;
    privilegesRequired: string;
    userInteraction: string;
    scope: string;
    confidentialityImpact: string;
    integrityImpact: string;
    availabilityImpact: string;
    baseScore: number;
    baseSeverity: string;
    exploitCodeMaturity: string | null;
    remediationLevel: string | null;
    reportConfidence: string | null;
    temporalScore: number | null;
    temporalSeverity: string | null;
    confidentialityRequirement: string | null;
    integrityRequirement: string | null;
    availabilityRequirement: string | null;
    modifiedAttackVector: string | null;
    modifiedAttackComplexity: string | null;
    modifiedPrivilegesRequired: string | null;
    modifiedUserInteraction: string | null;
    modifiedScope: string | null;
    modifiedConfidentialityImpact: string | null;
    modifiedIntegrityImpact: string | null;
    modifiedAvailabilityImpact: string | null;
    environmentalScore: number | null;
    environmentalSeverity: string | null;
}

interface WeaknessDescription {
    lang: string;
    value: string;
}

interface Weakness {
    source: string;
    type: string;
    description: WeaknessDescription[];
}

interface CpeMatch {
    vulnerable: boolean;
    criteria: string;
    matchCriteriaId: string;
    versionStartExcluding: string | null;
    versionStartIncluding: string | null;
    versionEndExcluding: string | null;
    versionEndIncluding: string | null;
}

interface Node {
    operator: string;
    negate: boolean | null;
    cpeMatch: CpeMatch[];
}

interface Configuration {
    operator: string;
    negate: boolean | null;
    nodes: Node[];
}

export interface ICVE {
    name: string;
    severity: number;
    api_last_modified: string;
    api_created: string;
    references: Reference[];
    metrics: Metrics;
    weaknesses: Weakness[];
    configurations: Configuration[];
    epss_score: number;
    epss_percentile: number;
}
