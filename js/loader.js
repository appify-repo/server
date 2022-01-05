export default (props, { $update }) => {
    let isLoading = false;

    const load = () => {
      isLoading = true;
      $update();
      setTimeout(() => {
        isLoading = false;
        $update();
      }, 3000);
    }

    return $render;
  }