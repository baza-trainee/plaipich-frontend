import Button from "../button/Button"

export default function Section1() {
  return (
    <section>
      <h1 className="text-3xl">Section 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        architecto expedita magnam inventore tempore labore aliquid neque
        mollitia at, nam explicabo ab ut maiores molestias cumque deleniti!
        Iste, deleniti esse?
      </p>
      <Button type="primary">Primary</Button>
      <Button type="secondary">secondary</Button>
      <Button type="orange">orange</Button>
      <Button type="transparent">orange</Button>
    </section>
  )
}
