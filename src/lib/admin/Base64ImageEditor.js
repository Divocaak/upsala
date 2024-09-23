import { JSONEditor } from '@json-editor/json-editor';

export class Base64ImageEditor extends JSONEditor.AbstractEditor {
	build() {
		const title = this.schema.title || 'Untitled';
		const titleElement = document.createElement('b');
		titleElement.textContent = title;
		this.container.appendChild(titleElement);

		// Create the file input
		this.input = this.theme.getFormInputField('file');
		this.input.setAttribute(
			'accept',
			'image/png, image/jpeg, video/mp4, video/quicktime, image/svg+xml'
		);

		// Preview element (for image/video preview)
		this.preview = document.createElement('div');
		this.preview.style.maxWidth = '100%';
		this.preview.style.display = 'none'; // Initially hidden

		// Append input and preview to the container
		this.container.appendChild(this.input);
		this.container.appendChild(this.preview);

		// Handle file input change
		this.input.addEventListener('change', (event) => this.handleFileInput(event));

		// Set initial value if present
		if (this.value) {
			this.setValue(this.value);
		}
	}

	handleFileInput(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			const fileType = file.type;

			// Check if the file is an image or a video
			if (fileType.startsWith('image/')) {
				// If it's an image, read it as base64 and display as an image
				reader.onload = () => {
					this.value = reader.result; // Base64 string
					this.preview.innerHTML = `<img src="${this.value}" style="max-width: 200px"/>`;
					this.preview.style.display = 'block'; // Show preview
					this.onChange(true); // Notify json-editor about the change
				};
				reader.readAsDataURL(file); // Read the file as base64
			} else if (fileType.startsWith('video/')) {
				// If it's a video, read it as base64 and display as a video
				reader.onload = () => {
					this.value = reader.result; // Base64 string
					this.preview.innerHTML = `
                <video controls style="max-width: 200px">
                    <source src="${this.value}" type="${fileType}">
                    Your browser does not support the video tag.
                </video>`;
					this.preview.style.display = 'block'; // Show preview
					this.onChange(true); // Notify json-editor about the change
				};
				reader.readAsDataURL(file); // Read the file as base64
			}
		}
	}

	setValue(value, initial) {
		this.value = value || '';

		if (this.value && typeof this.value === "string") {
			// Determine if it's an image or a video by checking the data URL prefix
			if (
				this.value.endsWith('.jpeg') ||
				this.value.endsWith('.png') ||
				this.value.startsWith('data:image/')
			) {
				this.preview.innerHTML = `<img src="${this.value}" style="max-width: 200px"/>`;
			} else if (
				this.value.endsWith('.mp4') ||
				this.value.endsWith('.mov') ||
				this.value.startsWith('data:video/')
			) {
				this.preview.innerHTML = `
                <video controls style="max-width: 200px">
                    <source src="${this.value}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
			} else if (this.value.endsWith('.svg+xml')) {
				this.preview.innerHTML = `<object data="${this.value}" width="800" height="800"></object>`;
			}

			this.preview.style.display = 'block'; // Show preview
		} else {
			this.preview.style.display = 'none'; // Hide preview if no value
		}
		this.onChange(); // Notify json-editor about the change
	}

	getValue() {
		// Return the current base64-encoded value (image or video)
		return this.value;
	}

	validate() {
		const errors = [];

		// Check if value is a valid base64 image or video
		if (
			this.value &&
			!this.value.startsWith('data:image/') &&
			!this.value.startsWith('data:video/')
		) {
			errors.push({
				path: this.path,
				property: 'format',
				message: 'The file must be an image (PNG, JPEG) or video (MP4, MOV) in base64 format'
			});
		}
		return errors;
	}

	destroy() {
		// Clean up event listeners and elements when editor is destroyed
		if (this.input && this.input.parentNode) {
			this.input.removeEventListener('change', this.handleFileInput);
		}
	}
}
