export default function rejectP<A> (value: A): Promise<A> {
  return Promise.reject(value);
}
