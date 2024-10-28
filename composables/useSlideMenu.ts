export const useSlideMenu = () => {
    const isMenuOpen = ref(false)
    const isOpen = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
    return {
        isMenuOpen,
        isOpen,
    }
}