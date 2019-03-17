import React from 'react'
import {navigate} from 'gatsby-link'
import parseQueryString from '../../lib/parse-query-string'

const SITE_URL = 'https://jameswlane.com'

function SubjectSelector({options, noSelectionUi, label, value, ...rest}) {
  return (
    <>
      <div>
        <label htmlFor="subject-selector">{label}</label>
        <br />
        <select id="subject-selector" value={value} {...rest}>
          {Object.keys(options).map(key => (
            <option key={key} value={key}>
              {options[key].display}
            </option>
          ))}
        </select>
      </div>
      {options[value] ? (
        <React.Fragment key={options[value].display}>
          {options[value].ui}
        </React.Fragment>
      ) : (
        noSelectionUi
      )}
    </>
  )
}

function CountupTextarea({
                           maxLength,
                           defaultValue = '',
                           onChange = () => {},
                           wrapperClassName,
                           ...rest
                         }) {
  const [length, setLength] = React.useState(defaultValue.length)
  function handleChange(e) {
    setLength(e.target.value.length)
    onChange(e)
  }
  // this allows us to increase the opacity exponensially as they near the maxLength
  const level = Math.pow(length, 6) / Math.pow(maxLength, 6)
  return (
    <div>
      <StoredFormControl>
        <textarea
          maxLength={maxLength}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...rest}
        />
      </StoredFormControl>
      <div
        style={{
          opacity: level,
          fontSize: 12,
          color: level > 0.3 ? 'red' : null,
          fontWeight: level > 0.5 ? 'bold' : null,
        }}
      >
        <span>
          {length} / {maxLength}
        </span>
        <span>{length >= maxLength ? ' please be more brief' : null}</span>
      </div>
    </div>
  )
}

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

function StoredFormControl({
                             children,
                             formControl = React.Children.only(children),
                             lsKey = `lsfc:${formControl.props.name}`,
                             queryParamName = lsKey.replace(/lsfc:/, ''),
                           }) {
  const queryParams =
    typeof window === 'undefined'
      ? {}
      : parseQueryString(window.location.search)
  const queryParamValue = queryParams[queryParamName]
  const [hasChanged, setHasChanged] = React.useState(false)
  const [value, setValue] = React.useState(
    () =>
      queryParamValue ||
      (typeof window === 'undefined'
        ? false
        : window.localStorage.getItem(lsKey)) ||
      formControl.props.defaultValue ||
      '',
  )

  if (
    formControl.props.value !== undefined &&
    formControl.props.value !== value
  ) {
    setValue(formControl.props.value)
  }

  React.useEffect(() => {
    if (hasChanged) {
      if (value) {
        window.localStorage.setItem(lsKey, value)
      } else {
        window.localStorage.removeItem(lsKey)
      }
    }
  }, [value, lsKey, hasChanged])

  return React.cloneElement(formControl, {
    onChange: callAll(formControl.props.onChange, e => {
      setHasChanged(true)
      setValue(e.target.value)
    }),
    value,
    defaultValue: undefined,
  })
}

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch(`${SITE_URL}/api/contact`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(getFormValues(form)),
    }).then(
      () => {
        // navigate('/contact/success')
      },
      error => {
        /* eslint no-alert:0 */
        window.alert('There was a problem. Check the developer console.')
        /* eslint no-console:0 */
        console.log(error)
        throw error
      },
    )
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      css={{
        display: 'grid',
        gridGap: 20,
      }}
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <br />
        <StoredFormControl>
          <input id="name-input" type="text" name="name" required />
        </StoredFormControl>
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <br />
        <StoredFormControl>
          <input id="email-input" type="email" name="email" required />
        </StoredFormControl>
      </div>
      <div css={{display: 'grid', gridGap: 20}}>
        <StoredFormControl>
          <SubjectSelector
            label="Email Type"
            name="type"
            options={{
              workshop: {
                display: 'Enterprise Workshop Inquiry',
                ui: (
                  <>
                    <div>
                      <label htmlFor="company-name-input">Company Name</label>
                      <br />
                      <StoredFormControl>
                        <input
                          type="text"
                          id="company-name-input"
                          name="company"
                          required
                          css={{width: '100%'}}
                        />
                      </StoredFormControl>
                    </div>
                    <div>
                      <label htmlFor="subject-input">Email Subject</label>
                      <br />
                      <StoredFormControl lsKey="lsfc:training-subject">
                        <input
                          defaultValue="My organization needs training"
                          type="text"
                          id="subject-input"
                          name="subject"
                          required
                          css={{width: '100%'}}
                        />
                      </StoredFormControl>
                    </div>
                  </>
                ),
              },
              testimonial: {
                display: 'Submit a testimonial',
                ui: (
                  <>
                    <small>
                      {`
                      I love hearing about people that I've helped.
                      I ocassionally use testimonials on my website.
                      If you had a good experience with some of my material,
                      I'd love to hear about it!
                    `}
                    </small>
                    <div>
                      <label htmlFor="subject-input">Email Subject</label>
                      <br />
                      <StoredFormControl lsKey="lsfc:testimonial-subject">
                        <input
                          defaultValue="I want to submit a testimonial"
                          type="text"
                          name="subject"
                          id="subject-input"
                          required
                          css={{width: '100%'}}
                        />
                      </StoredFormControl>
                    </div>
                    <div>
                      <label htmlFor="link-input">
                        {`Link to testimonial (tweet/blog post/etc.)`}
                      </label>
                      <small css={{marginLeft: 6}}>
                        {`(optional, but `}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/intent/tweet"
                        >
                          appreciated
                        </a>
                        {`)`}
                      </small>
                      <br />
                      <StoredFormControl lsKey="lsfc:testimonial-url">
                        <input type="url" name="link" css={{width: '100%'}} />
                      </StoredFormControl>
                    </div>
                  </>
                ),
              },
              help: {
                display: 'Help / Ask a question',
                ui: (
                  <>
                    <div>
                      <small>
                        If you need help with one of my open source projects,
                        please either ask on the official support channel for
                        the project or open an issue on GitHub. Please do not
                        ask here.
                      </small>
                      <br />
                      <small>
                        {`I prefer general questions to be asked on `}
                        <a href="https://jwl.codes/ama">{`my AMA`}</a>
                        {`. If you ask here, `}
                        <strong>
                          {`I can't make any promises that `}
                          <a href="https://jwl.codes/no-time">{`I'll have time`}</a>
                          {` to respond,`}
                        </strong>
                        {`but I'll try.`}
                      </small>
                    </div>
                    <div>
                      <label htmlFor="subject-input">Help Subject</label>
                      <br />
                      <StoredFormControl lsKey="lsfc:help-subject">
                        <input
                          type="text"
                          name="subject"
                          id="subject-input"
                          required
                          css={{width: '100%'}}
                          defaultValue="I need help"
                        />
                      </StoredFormControl>
                    </div>
                  </>
                ),
              },
              other: {
                display: 'Other...',
                ui: (
                  <div>
                    <label htmlFor="subject-input">Subject</label>
                    <br />
                    <StoredFormControl lsKey="lsfc:other-subject">
                      <input
                        type="text"
                        name="subject"
                        id="subject-input"
                        required
                        css={{width: '100%'}}
                      />
                    </StoredFormControl>
                  </div>
                ),
              },
            }}
          />
        </StoredFormControl>
      </div>
      <div>
        <div>
          <label htmlFor="body-textarea">Email body</label>
          <small css={{marginLeft: 6}}>(**markdown** _supported_)</small>
        </div>
        <CountupTextarea
          id="body-textarea"
          name="body"
          style={{width: '100%'}}
          rows="10"
          maxLength="1000"
          minLength="10"
          required
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

function getFormValues(formNode) {
  return Object.getOwnPropertyNames(formNode.elements).reduce((obj, key) => {
    const formControl = formNode.elements[key]
    const name = formControl.getAttribute('name')
    if (name && !obj[name]) {
      obj[name] = formControl.value
    }
    return obj
  }, {})
}

export default ContactForm
