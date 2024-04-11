
/// <reference path="./entityreference.d.ts" />
/// <reference path="./collections.d.ts" />
/// <reference path="./controls.d.ts" />
/// <reference path="./executioncontext.d.ts" />
/// <reference path="./formcontextdataentity.d.ts" />

// Reference: https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/webapi/query-metadata-web-api

declare namespace D365 {
    export namespace Sdk {
        /**
         * Localized label
         * */
        export interface Label {
            Label: string,
            LanguageCode: number,
            IsManaged: boolean,
            MetadataId: string,
            HasChanged?: boolean
        }

        /**
         * Localized text
         * */
        export interface LocalizedLabel {
            LocalizedLabels: Label[],
            UserLocalizedLabels: Label[]
        }

        export interface MetadataFlag {
            Value: boolean,
            CanBeChanged: boolean,
            ManagedPropertyLogicalName: string
        }

        /**
         * The Entity metadata
         */
        export interface EntityMetadata {
            ActivityTypeMask: number;
            AutoRouteToOwnerQueue: boolean;
            CanTriggerWorkflow: boolean,
            EntityHelpUrlEnabled: boolean,
            EntityHelpUrl: string,
            IsDocumentManagementEnabled: boolean,
            IsOneNoteIntegrationEnabled: boolean,
            IsInteractionCentricEnabled: boolean,
            IsKnowledgeManagementEnabled: boolean,
            IsSLAEnabled: boolean,
            IsBPFEntity: boolean,
            IsDocumentRecommendationsEnabled: boolean,
            IsMSTeamsIntegrationEnabled: boolean,
            DataProviderId?: string,
            DataSourceId?: string,
            AutoCreateAccessTeams: boolean,
            IsActivity: boolean,
            IsActivityParty: boolean,
            IsAvailableOffline: boolean,
            IsChildEntity: boolean,
            IsAIRUpdated: boolean,
            IconLargeName: string,
            IconMediumName: string,
            IconSmallName: string,
            IconVectorName: string,
            IsCustomEntity: boolean,
            IsBusinessProcessEnabled: boolean,
            SyncToExternalSearchIndex: boolean,
            IsOptimisticConcurrencyEnabled: boolean,
            ChangeTrackingEnabled: boolean,
            IsImportable: boolean,
            IsIntersect: boolean,
            IsManaged: boolean,
            IsEnabledForCharts: boolean,
            IsEnabledForTrace: boolean,
            IsValidForAdvancedFind: boolean,
            DaysSinceRecordLastModified: number,
            MobileOfflineFilters: string,
            IsReadingPaneEnabled: boolean,
            IsQuickCreateEnabled: boolean,
            LogicalName: string,
            ObjectTypeCode: number,
            OwnershipType: string,
            PrimaryNameAttribute: string,
            PrimaryImageAttribute: string,
            PrimaryIdAttribute: string,
            RecurrenceBaseEntityLogicalName: string,
            ReportViewName: string,
            SchemaName: string,
            IntroducedVersion: string,
            IsStateModelAware: boolean,
            EnforceStateTransitions: boolean,
            ExternalName: string,
            EntityColor: string,
            LogicalCollectionName: string,
            ExternalCollectionName: string,
            CollectionSchemaName: string,
            EntitySetName: string,
            IsEnabledForExternalChannels: boolean,
            IsPrivate: boolean,
            UsesBusinessDataLabelTable: boolean,
            IsLogicalEntity: boolean,
            HasNotes: boolean,
            HasActivities: boolean,
            HasFeedback: boolean,
            IsSolutionAware: boolean,
            MetadataId: string,
            HasChanged?: boolean,
            Description: LocalizedLabel,
            DisplayCollectionName: LocalizedLabel,
            DisplayName: LocalizedLabel,
            IsAuditEnabled: MetadataFlag,
            IsValidForQueue: MetadataFlag,
            IsConnectionsEnabled: MetadataFlag,
            IsCustomizable: MetadataFlag,
            IsRenameable: MetadataFlag,
            IsMappable: MetadataFlag,
            IsDuplicateDetectionEnabled: MetadataFlag,
            CanCreateAttributes: MetadataFlag,
            CanCreateForms: MetadataFlag,
            CanCreateViews: MetadataFlag,
            CanCreateCharts: MetadataFlag,
            CanBeRelatedEntityInRelationship: MetadataFlag,
            CanBePrimaryEntityInRelationship: MetadataFlag,
            CanBeInManyToMany: MetadataFlag,
            CanBeInCustomEntityAssociation: MetadataFlag,
            CanEnableSyncToExternalSearchIndex: MetadataFlag,
            CanModifyAdditionalSettings: MetadataFlag,
            CanChangeHierarchicalRelationship: MetadataFlag,
            CanChangeTrackingBeEnabled: MetadataFlag,
            IsMailMergeEnabled: MetadataFlag,
            IsVisibleInMobile: MetadataFlag,
            IsVisibleInMobileClient: MetadataFlag,
            IsReadOnlyInMobileClient: MetadataFlag,
            IsOfflineInMobileClient: MetadataFlag,
            Privileges: any
        }

    }
}
