<template>
  <BasicWrapper>
    <BasicHeading title="Icons8 Frontend developer assignment" />

    <ComponentWithFoo>
      1
      <OtherComponent>
        Random component
        <ComponentWithFoo>
          2
          <ComponentWithFoo>
            3
          </ComponentWithFoo>
        </ComponentWithFoo>
      </OtherComponent>
      <ComponentWithFoo>
        4
      </ComponentWithFoo>
      <ComponentWithFoo>
        5
      </ComponentWithFoo>
    </ComponentWithFoo>
  </BasicWrapper>
</template>

<script>
  import ComponentWithFoo from "../components/ComponentWithFoo";
  import OtherComponent from "../components/OtherComponent";
  import BasicHeading from "../components/basicComponents/BasicHeading"
  import BasicWrapper from "../components/basicComponents/BasicWrapper"
  export default {
    name: 'Home',
    components: {
      ComponentWithFoo,
      OtherComponent,
      BasicHeading,
      BasicWrapper
    },
  }
</script>
