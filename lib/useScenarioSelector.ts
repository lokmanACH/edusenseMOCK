/**
 * Demo Scenario Selector Hook
 * Allows selection and application of demo scenarios
 * Store preference in localStorage
 */

export const SCENARIO_STORAGE_KEY = "edusense_demo_scenario";

export const useScenarioSelector = () => {
  const getSelectedScenario = (): string => {
    if (typeof window === "undefined") return "excellent_student";
    return localStorage.getItem(SCENARIO_STORAGE_KEY) || "excellent_student";
  };

  const setSelectedScenario = (scenarioId: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(SCENARIO_STORAGE_KEY, scenarioId);
  };

  const clearScenario = (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(SCENARIO_STORAGE_KEY);
  };

  return {
    getSelectedScenario,
    setSelectedScenario,
    clearScenario,
  };
};
