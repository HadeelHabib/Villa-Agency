'use client'
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Input = () => {
  return (
      <div className="rounded-[10px] shadow-md bg-[#fff] py-[35px] px-[30px] overflow-hidden">
        <Form className="">
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="form-label">Full Name</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Your Name.."
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              className="form-input"
              type="email"
              placeholder="Your E-mail.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="form-label">Subject</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Subject.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="form-label">Message</Form.Label>
            <textarea
              rows={5}
              cols={15}
              placeholder="your message.."
              className="w-full rounded-[22px] bg-[#f6f6f6] mb-6 text-[14px] p-[15px]"
            />
          </Form.Group>
           <div className="left">
           <button className="button-style">Send Message</button>
        
           </div>
        </Form>
      </div>
  );
};

export default Input;
