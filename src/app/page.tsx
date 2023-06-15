import reader from "@/lib/keystatic"

export default async function Home() {
  const homepage = await reader.singletons.homepage.read()

  const story = await homepage?.storyDescription()

  return (
    <main className="">
      <pre>
        <code>{JSON.stringify(homepage, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(story, null, 2)}</code>
      </pre>
    </main>
  )
}
