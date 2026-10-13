
import { getLogger } from "log4js";
import { Page } from "@playwright/test";
import TimeoutPeriod from "../common/enums/TimeOutPeriod";

const log = getLogger('Base Page');
export default class BasePage{
    public constructor(protected readonly page: Page) {}

    public async goToUrl(
        url:string,
        options?:{waitForState?: 'load' | 'domcontentloaded' | 'networkidle'}
    ): Promise<void>{
        log.info('opening url: '+url);
        const waitForState = options?.waitForState ? options?.waitForState : 'networkidle';
        await this.page.goto(url,{timeout: TimeoutPeriod.LONG, waitUntil: waitForState});
    }
}