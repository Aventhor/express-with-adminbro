const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroSequelize = require("admin-bro-sequelizejs");
const db = require("../db");
const { language, translations } = require("./ru-locale");

AdminBro.registerAdapter(AdminBroSequelize);

const menu = {
    general: { name: "Основное" },
};

const adminBro = new AdminBro({
    locale: {
        language,
        translations,
    },
    rootPath: "/admin",
    version: {
        admin: true,
    },
    branding: {
        logo: "/public/logo.png",
        favicon: "/public/logo.png",
        companyName: "Express with admin panel",
        softwareBrothers: false,
    },
    databases: [db],
    resources: [
        {
            resource: db.users,
            options: { parent: menu.general },
        },
    ],
});

module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
        authenticate: async (email, password) => {
            if (email === "root" && password == "root") {
                return true;
            }
            return null;
        },
        cookieName: "adminbro",
        cookiePassword: "somepassword",
    },
    null,
    {
        resave: false,
        saveUninitialized: true,
    }
);
