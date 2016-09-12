/**
 * This file is part of pwt.
 *
 * pwt is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * pwt is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the
 * implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser
 * General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with pwt. If not,
 * see <http://www.gnu.org/licenses/>.
 */
package fr.putnami.pwt.doc.shared.page.sample.constants;

import fr.putnami.pwt.core.editor.shared.constant.ValidationConstants;

public interface SampleConstants extends ValidationConstants {

	@DefaultStringValue("Save")
	String saveButton();

	@DefaultStringValue("Cancel")
	String cancelButton();

	@DefaultStringValue("Submit")
	String submitButton();

	@DefaultStringValue("Close")
	String closeButton();

	@DefaultStringValue("Open")
	String openButton();

	@DefaultStringValue("Add")
	String addButton();

	@DefaultStringValue("Gender")
	String gender();

	@DefaultStringValue("Name")
	String name();

	@DefaultStringValue("Enable")
	String enable();

	@DefaultStringValue("Login account enable")
	String enableCheckbox();

	@DefaultStringValue("Enter the full name of the person")
	String nameHelp();

	@DefaultStringValue("Weight")
	String weight();

	@DefaultStringValue("Weight...")
	String weightPlaceholder();

	@DefaultStringValue("Birthday")
	String birthday();

	@DefaultStringValue("Day/Month/Year")
	String birthdayPlaceholder();

	@DefaultStringValue("Address")
	String address();

	@DefaultStringValue("Your not fat...")
	String weightTooltip();

	@DefaultStringValue("Boss")
	String bossNameHeader();

	@DefaultStringValue("Mr.")
	String genderMaleEnum();

	@DefaultStringValue("Mrs.")
	String genderFemaleEnum();

	@DefaultStringValue("Emails")
	String emails();

	@DefaultStringValue("Phones")
	String phones();

	@DefaultStringValue("Groups")
	String groups();

	@DefaultStringValue("Remarks")
	String remarks();

	@DefaultStringValue("Your comments...")
	String remarksPlaceholder();

	@DefaultStringValue("Contat name...")
	String namePlaceholder();

	@DefaultStringValue("Street")
	String street();

	@DefaultStringValue("City")
	String city();

	@DefaultStringValue("Postcode")
	String postcode();

	@DefaultStringValue("Edit a contact !")
	String newPersonTitle();
}
