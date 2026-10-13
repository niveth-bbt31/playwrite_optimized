import {test} from '@playwright/test'
import {registerUser,registerExistingUser} from '../DEMO/scenarios/account-scenarios';
import LoginSteps from '../../src/steps/Generic/login.steps';

test.describe(
    'User Accounts Test',
    {tag:['@account','@smoke']},
    ()=>{
        const testScenarios = [
            {scenario:registerUser},
            // {scenario:registerExistingUser}
        ]
        for(const {scenario} of testScenarios){
            test(
                `Register User - ${scenario.expected} Flow`,
                {tag:['@success']},
                async ({page})=>{
                    const loginSteps = new LoginSteps(page);
                    await loginSteps.openBaseUrl();
                }
            );
        }
    }
);