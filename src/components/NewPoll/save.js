

    this.optionChange = this.optionChange.bind(this);
    this.addOption = this.addOption.bind(this);


      optionChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addOption(event) {
    this.setState(
      { 
        options: this.state.options.push(event.target.value),
        option: ''
      });
  }

  
        <OptionList items={options} />

        <TextFieldGroup
          name="singleOption"
          label="Add Option"
          value={singleOption}
          onChange={this.optionChange}
          error={errors.options}
        />

        <button 
          type="button"
          className="btn btn-success"
          onClick={this.addOption}
        >
          Add item
        </button>
