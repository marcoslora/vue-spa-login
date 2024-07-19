import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default defineComponent({
  setup() {
    const counter = ref(0);
    console.log('setup');
    onMounted(() => {
      console.log('Home Page mounted');
    });
    onUpdated(() => {
      console.log('El componente ha sido actualizado');
    });
    onUnmounted(() => {
      console.log('El componente será desmontado');
    });
    onBeforeMount(() => {
      console.log('El componente está a punto de montarse');
    });
    onBeforeUpdate(() => {
      console.log('El componente está a punto de actualizarse');
    });
    onBeforeUnmount(() => {
      console.log('El componente está a punto de desmontarse');
    });
    onErrorCaptured((err, instance, info) => {
      console.error('Error capturado:', err);
      return false;
    });
    onRenderTracked((e) => {
      console.log('Renderizado rastreado:', e);
    });
    onActivated(() => {
      console.log('El componente ha sido activado');
    });
    onRenderTriggered((e) => {
      console.log('Renderizado disparado:', e);
    });
    onDeactivated(() => {
      console.log('El componente ha sido desactivado');
    });
    return { counter };
  },
});
