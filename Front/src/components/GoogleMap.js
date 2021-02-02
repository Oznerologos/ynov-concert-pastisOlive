

const adresses = {
    Aix:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.973771466552!2d5.430907015719922!3d43.52373966880998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d0b5057bd43%3A0x88b7715d87622590!2sYnov%20Aix-en-Provence!5e0!3m2!1sfr!2sfr!4v1611084778141!5m2!1sfr!2sfr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',

    Bourges:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21732.754830945563!2d2.3938917874435552!3d47.0874178947304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fa96792a64f8ad%3A0x8e2570c1d1ba3366!2sLe%2022%20d&#39;Auron!5e0!3m2!1sfr!2sfr!4v1611084873218!5m2!1sfr!2sfr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',

    Cannes: 
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23130.11315460182!2d6.989677907389635!3d43.559378791565834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce827289dc5d7f%3A0x919f3989515ee2c8!2sLA%20PALESTRE!5e0!3m2!1sfr!2sfr!4v1611084992285!5m2!1sfr!2sfr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',

    Dunkerque: 
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10032.855057718112!2d2.3798093697753964!3d51.04914060000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc8c40324e6797%3A0x89794851ab3c8b7d!2sDunkerque%20Kursaal%20-%20Palais%20des%20Congr%C3%A8s!5e0!3m2!1sfr!2sfr!4v1611085121568!5m2!1sfr!2sfr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',

    Echirolles: 
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45000.93960078116!2d5.687177082180581!3d45.175784964662604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4cc4505e741%3A0x539c902c7cb983c7!2sLe%20Summum!5e0!3m2!1sfr!2sfr!4v1611085202403!5m2!1sfr!2sfr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default function googleMap(props) {
  return (

      <Iframe iframe={adresses[props.lieu]} allow="autoplay" />

  );
}


