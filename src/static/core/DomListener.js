export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('Error $root')
    }
    this.$root = $root
  }
}