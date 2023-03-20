const form = document.querySelector('#issue-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get values from form
	const issue = form.issue.value;
	const name = form.name.value;
	const email = form.email.value;

	// Send data to Google Sheet
	google.script.run.submitForm(issue, name, email);

	// Send email to user
	const subject = "Issue Reported";
	const message = `Thank you for reporting the issue. We have received your report and will investigate it as soon as possible.`;
	google.script.run.sendEmail(email, subject, message);

	// Clear form
	form.reset();

	// Show confirmation message
	alert('Issue reported successfully');
});
