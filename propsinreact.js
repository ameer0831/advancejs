import React from 'react';
import PropTypes from 'prop-types';

// Component 1: Button with props validation
const Button = ({ label, onClick, primary, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={primary ? 'btn-primary' : 'btn-secondary'}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {label}
    </button>
  );
};

// Prop validation using PropTypes
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

// Default props in case the parent doesn't pass them
Button.defaultProps = {
  primary: false,
  disabled: false,
};

// Component 2: Card Component with children prop
const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="card-body">{children}</div>
  </div>
);

// Using render props pattern
const List = ({ items, renderItem }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItem(item, index)}</li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

// Parent Component
const App = () => {
  const handleClick = () => alert('Button clicked!');
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className="App">
      <h1>Advanced React Props Example</h1>

      {/* Button component with props */}
      <Button label="Click Me" onClick={handleClick} primary disabled={false} />

      {/* Card component using children prop */}
      <Card title="My Card Title">
        <p>This is the body of the card. You can add any content here.</p>
      </Card>

      {/* List component using render props */}
      <List
        items={items}
        renderItem={(item, index) => (
          <span>
            {index + 1}. {item}
          </span>
        )}
      />
    </div>
  );
};

export default App;
