# Imgly Background Removal Tool

This project is a web application that allows users to remove the background from images using a drag-and-drop interface. It is built with Next.js, Tailwind CSS, and uses the `@imgly/background-removal` library for background removal.

## Features

- Drag-and-drop image upload
- Background removal directly in the browser
- Download the processed image
- Responsive and modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jacksonkasi1/imgly-bg-remove-poc.git
    cd imgly-bg-remove-poc
    ```

2. Install dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

3. Run the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `pages/`: Contains the main page component.
- `components/`: Contains the `Header` and `ImageUpload` components.
- `utils/`: Contains the `backgroundRemoval` helper function.
- `styles/`: Contains global styles and Tailwind CSS configurations.

## Usage

1. Drag and drop an image into the designated area or click to select a file.
2. Wait for the background removal process to complete.
3. Download the processed image.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@imgly/background-removal](https://github.com/imgly/background-removal)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- Special thanks to the developers of `@imgly/background-removal` for their amazing library.
