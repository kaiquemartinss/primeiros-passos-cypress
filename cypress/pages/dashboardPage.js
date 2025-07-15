class DashboardPage {
    selectorList() {
        const selectors = {
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid)
    }
}

export default DashboardPage