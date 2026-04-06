export async function getServerSideProps() {
  return { redirect: { destination: '/v2', permanent: false } };
}

export default function Page() {
  return null;
}
