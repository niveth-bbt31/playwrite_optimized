import { Page } from "@playwright/test";
import BasePage from "../_page";

export default class LoginPage extends BasePage{
	public constructor(page: Page) {
		super(page);
	}
}