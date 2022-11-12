import { Accordion } from "./accordion";

export const AccordionGroup = () => {
  return (
    <div className='accordion'>
      <Accordion title='Personal Information' show>
        <p>
          <span>Name *:</span>
          <input type="text" />
        </p>
        <p>
          <span>Email *:</span>
          <input type="text" />
        </p>
        <p>
          <span>Phone:</span>
          <input type="text" />
        </p>
        <p>
          <span>Extension:</span>
          <input type="text" /> 
        </p>
        <p>
          <span>Country:</span>
          <input type="text" />
        </p>
        <p>
          <span>City/Province:</span>
          <input type="text" />
        </p>
      </Accordion>
      <Accordion title='Billing Address'>
        <p>
          <span>Address 1:</span>
          <input type="text" />
        </p>
        <p>
          <span>Address 2:</span>
          <input type="text" />
        </p>
        <p>
          <span>City:</span>
          <input type="text" />
        </p>
        <p>
          <span>State:</span>
          <input type="text" /> 
        </p>
        <p>
          <span>Zip Code:</span>
          <input type="text" />
        </p>
      </Accordion>
      <Accordion title='Shipping Address'>
        <p>
          <span>Address 1:</span>
          <input type="text" />
        </p>
        <p>
          <span>Address 2:</span>
          <input type="text" />
        </p>
        <p>
          <span>City:</span>
          <input type="text" />
        </p>
        <p>
          <span>State:</span>
          <input type="text" /> 
        </p>
        <p>
          <span>Zip Code:</span>
          <input type="text" />
        </p>
      </Accordion>
    </div>
  );
};