const translations = {
    actions: {
        new: "Создание",
        edit: "Редактирование",
        show: "Просмотр",
        delete: "Удалить",
        bulkDelete: "Удалить все",
        list: "Список",
    },
    buttons: {
        save: "Сохранить",
        filter: "Фильтр",
        applyChanges: "Применить",
        resetFilter: "Сбросить",
        confirmRemovalMany: "Confirm the removal of {{count}} record",
        confirmRemovalMany_plural: "Confirm the removal of {{count}} records",
        login: "Войти",
        logout: "Выйти",
        seeTheDocumentation: "See: <1>the documentation</1>",
        createFirstRecord: "Создать первую запись",
    },
    labels: {
        navigation: "Навигация",
        pages: "Страницы",
        selectedRecords: "Выбрано ({{selected}})",
        filters: "Фильтры",
        adminVersion: "Admin: {{version}}",
        appVersion: "App: {{version}}",
        loginWelcome: "Приветствуем",
    },
    properties: {},
    resources: {},
    messages: {
        successfullyBulkDeleted: "успешно удалена {{count}} запись",
        successfullyBulkDeleted_plural: "успешно удалено {{count}} записей",
        successfullyDeleted: "Successfully deleted given record",
        successfullyUpdated: "Successfully updated given record",
        thereWereValidationErrors: "Ошибка валидации!",
        successfullyCreated: "Successfully created a new record",
        bulkDeleteError:
            "There was an error deleting records, Check out console to see more information",
        errorFetchingRecords:
            "There was an error fetching records, Check out console to see more information",
        errorFetchingRecord:
            "There was an error fetching record, Check out console to see more information",
        noRecordsSelected: "You have not selected any records",
        theseRecordsWillBeRemoved: "Following record will be removed",
        theseRecordsWillBeRemoved_plural: "Following records will be removed",
        pickSomeFirstToRemove:
            "In order to remove records, you have to pick them first",
        error404Resource:
            "Resource of given id: {{resourceId}} cannot be found",
        error404Action:
            "Resource of given id: {{resourceId}} does not have an action with name: {{actionName}}",
        error404Record:
            "Resource of given id: {{resourceId}} does not have a record with id: {{recordId}}",
        seeConsoleForMore: "See development console for more details...",
        noActionComponent:
            "You have to implement action component for your Action",
        noRecordsInResource: "There are no records in this resource",
        confirmDelete: "Do you really want to remove this item?",
        welcomeOnBoard_title: "Добро пожаловать в панель управления!",
        welcomeOnBoard_subtitle:
            "Now you are one of us! We prepared a few tips for you to start:",
        loginWelcome:
            "To AdminBro - the best admin framework for Node.js apps, based on React.",
        addingResources_title: "Adding Resources",
        addingResources_subtitle: "How to add new resources to the sidebar",
        customizeResources_title: "Customize Resources",
        customizeResources_subtitle:
            "Defining behavior, adding properties and more...",
        customizeActions_title: "Customize Actions",
        customizeActions_subtitle: "Modifying existing actions and adding new",
        writeOwnComponents_title: "Write Components",
        writeOwnComponents_subtitle:
            "How to modify the Look and Feel of AdminBro",
        customDashboard_title: "Custom Dashboard",
        customDashboard_subtitle:
            "How to modify this view and add new Pages on the sidebar",
        roleBasedAccess_title: "Role-Based Access Control",
        roleBasedAccess_subtitle:
            "Create user roles and permissions in AdminBro",
        checkoutBlog_title: "Check out our Blog",
        checkoutBlog_subtitle:
            "For the latest information about AdminBro and other technology news",
        foundBug_title: "Found a Bug? need improvement?",
        foundBug_subtitle: "Raise an issue on our GitHub repo",
        needMoreSolutions_title: "Need more advanced solutions?",
        needMoreSolutions_subtitle:
            "We are here to provide you a beautiful UX/UI design and tailor made software based (not only) on AdminBro",
        invalidCredentials: "Неверная почта и/или пароль",
    },
};

module.exports = {
    language: "ru",
    translations,
};
