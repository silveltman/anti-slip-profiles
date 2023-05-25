<script lang="ts">
  import {
    Button,
    Image,
    Container,
    Masonry,
    Section,
    Split,
    Highlight,
  } from 'fulldev-ui'
</script>

<Section>
  <Container>
    <Split>
      <div class="flex w-52 gap-2">
        <Image
          src="/image-1.jpg"
          alt="image"
        />
        <Image
          src="/image-1.jpg"
          alt="image"
        />
      </div>
      <Highlight class="dark-orange">
        <p class="text-base-11">Gepatenteerd</p>
        <h2>Anti-Slip Profiel®</h2>
        <p>
          Het gepatenteerde vlonder antislip-profiel is voorzien van een
          antislip-strip, eenvoudig te plaatsen zonder gebruik te maken van kit,
          lijm of schroeven! Voor zowel hout als composiet vlonderdelen en in
          alle seizoenen te plaatsen! zoals: galerijen, terrassen, bruggen en
          steigers.
        </p>
        <Button
          variant="solid"
          class="light-orange"
          text="Bekijk product"
          slot="footer"
        />
      </Highlight>
    </Split>
  </Container>
</Section>