"use client";
import { Button, CaretDownIcon, CogIcon, EditIcon, IconButton, ManualIcon, Pane, Radio, SearchIcon, SelectField, TextInput, TextInputField, TrashIcon } from "evergreen-ui";

const Evergreen = () => {
  return (
    <div className="container m-auto"> 
      <div className="text-3xl text-center p-5 m-5"> Test Creative Manager</div>   
        <div className="flex justify-between secondary-nav">
          <div className="left-side">
            <div> 
              <span>Campaigns</span> 
              <Button marginRight={16} marginLeft={32} size="large">Campaign One</Button> 
              <Button size="large" marginRight={16}>Campaign Two</Button> 
              <Button marginRight={16} appearance="primary" size="large"> Campaign Three  </Button> 
              <Button marginRight={16} size="large">Campaign Four</Button> 

              </div>
          </div>
          <div className="right-side">
            <Button className="navy-custom" size="large" marginRight={16} appearance="primary">
              Upload Creative
            </Button>
            <br />
            <TextInput
              className="makesearch"
              name="name"
              placeholder="Search"
            /><IconButton className="makesearch" height={56} icon={SearchIcon} />
          </div>
        </div>
        
                                   
        <br />
        <hr />
        <h3 className="text-3xl p-5 m-5 text-center"> Other EverGreen Components </h3>
        <Pane aria-label="Radio Group Label 16" role="group">
          <Radio checked size={16} name="group2" label="Radio default" />
          <Radio size={16} name="group2" checked label="Radio checked" />
          <Radio size={16} name="group2" disabled label="Radio disabled" />
          <Radio size={16} name="group2" disabled label="Radio checked disabled" />
        </Pane>
        

        <TextInputField
          label="Default text input field"
          description="This is a description."
          placeholder="Placeholder text"
        />
        <SelectField
          label="Default text input field"
          description="This is a description."
        >
          <option value="foo" selected>
            Foo
          </option>
          <option value="bar">Bar</option>
        </SelectField>

        <Button marginRight={16} appearance="minimal">
          Minimal
        </Button>

      <Button marginY={8} marginRight={12} iconAfter={CogIcon}>
        Settings
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={EditIcon}>
        Edit
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={ManualIcon}>
        Docs
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={TrashIcon} intent="danger">
        Delete...
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={SearchIcon}>
        Search
      </Button>
      <Button marginY={8} marginRight={12} iconAfter={CaretDownIcon}>
        Filter
      </Button>

      
    </div>
  );
};

export default Evergreen;
