import React from 'react'  
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSelect from './citiesSelect';
import Icon from '@material-ui/core/Icon';


class FaqMain extends React.Component{

    render(){
        return(
            <div className="contenaireFaq">
            <div class='faq'>
                  <input id='faq-a' type='checkbox'></input>
                  <label for='faq-a'>
                  <p class="faq-heading">Informations Générales</p>
                <div class='faq-arrow'></div>
                <p class="faq-text">
                <br/>    
                <h4>Comment puis-je réserver mes places ?</h4><br/>
                Vous pouvez réserver vos places sur le site de Symfony Concert. Choisissez le concert
                qui vous intéresse en allant sur la page <a  href="dd">Tous les évènements</a>.
                <h4> Comment vous contacter ?</h4>
                Vous pouvez nous contacter via le <a  href="/Contact">formulaire de contact.</a>
                </p>
                </label>
                <input id='faq-b' type='checkbox'/>
                <label for='faq-b'>
                    <p class="faq-heading">Billetterie & Réservations </p>
                    <div class='faq-arrow'></div>
                    <br/>
                    <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet turpis semper, pellentesque tortor quis, convallis lorem. In bibendum ante et ipsum pellentesque, eleifend tincidunt massa posuere. Mauris ac sem vitae nulla aliquam sollicitudin sit amet sed turpis. Suspendisse pharetra lectus ex, quis facilisis ante scelerisque eu. Fusce pellentesque orci ac metus feugiat iaculis. Donec varius est diam, vel convallis massa vehicula quis. Aliquam massa mi, tincidunt ac urna in, pulvinar scelerisque nibh. Mauris venenatis ex eget massa accumsan dignissim. Nullam bibendum neque ut nulla hendrerit, at tristique tellus pretium. Nam interdum pretium interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id augue blandit, hendrerit sapien eu, convallis ante. Aliquam vulputate porttitor justo sed dignissim. In id lorem lectus. Vivamus hendrerit ut mi non congue.</p>
                </label>

                <input id='faq-c' type='checkbox'/>
                <label for='faq-c'>
                    <p class="faq-heading">Accessibilité et Réservations PMR / PSH</p>
                    <div class='faq-arrow'></div>
                    <br/>
                    <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet turpis semper, pellentesque tortor quis, convallis lorem. In bibendum ante et ipsum pellentesque, eleifend tincidunt massa posuere. Mauris ac sem vitae nulla aliquam sollicitudin sit amet sed turpis. Suspendisse pharetra lectus ex, quis facilisis ante scelerisque eu. Fusce pellentesque orci ac metus feugiat iaculis. Donec varius est diam, vel convallis massa vehicula quis. Aliquam massa mi, tincidunt ac urna in, pulvinar scelerisque nibh. Mauris venenatis ex eget massa accumsan dignissim. Nullam bibendum neque ut nulla hendrerit, at tristique tellus pretium. Nam interdum pretium interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id augue blandit, hendrerit sapien eu, convallis ante. Aliquam vulputate porttitor justo sed dignissim. In id lorem lectus. Vivamus hendrerit ut mi non congue.</p>
                </label>
                <input id='faq-d' type='checkbox'/>
                <label for='faq-d'>
                    <p class="faq-heading">Accès - Parkings</p>
                    <div class='faq-arrow'></div>
                    <br/>
                    <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet turpis semper, pellentesque tortor quis, convallis lorem. In bibendum ante et ipsum pellentesque, eleifend tincidunt massa posuere. Mauris ac sem vitae nulla aliquam sollicitudin sit amet sed turpis. Suspendisse pharetra lectus ex, quis facilisis ante scelerisque eu. Fusce pellentesque orci ac metus feugiat iaculis. Donec varius est diam, vel convallis massa vehicula quis. Aliquam massa mi, tincidunt ac urna in, pulvinar scelerisque nibh. Mauris venenatis ex eget massa accumsan dignissim. Nullam bibendum neque ut nulla hendrerit, at tristique tellus pretium. Nam interdum pretium interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id augue blandit, hendrerit sapien eu, convallis ante. Aliquam vulputate porttitor justo sed dignissim. In id lorem lectus. Vivamus hendrerit ut mi non congue.</p>
                </label>
                <input id='faq-e' type='checkbox'/>
                <label for='faq-e'>
                    <p class="faq-heading">Restauration</p>
                    <div class='faq-arrow'></div>
                    <br/>
                    <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet turpis semper, pellentesque tortor quis, convallis lorem. In bibendum ante et ipsum pellentesque, eleifend tincidunt massa posuere. Mauris ac sem vitae nulla aliquam sollicitudin sit amet sed turpis. Suspendisse pharetra lectus ex, quis facilisis ante scelerisque eu. Fusce pellentesque orci ac metus feugiat iaculis. Donec varius est diam, vel convallis massa vehicula quis. Aliquam massa mi, tincidunt ac urna in, pulvinar scelerisque nibh. Mauris venenatis ex eget massa accumsan dignissim. Nullam bibendum neque ut nulla hendrerit, at tristique tellus pretium. Nam interdum pretium interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id augue blandit, hendrerit sapien eu, convallis ante. Aliquam vulputate porttitor justo sed dignissim. In id lorem lectus. Vivamus hendrerit ut mi non congue.</p>
                </label>
                    <input id='settings' type='checkbox'/>
                <input id='faq-f' type='checkbox'/>
                <label for='faq-f'>
                    <p class="faq-heading">Privatisation - Location de salles - Organisation d'évènements</p>
                    <div class='faq-arrow'></div>
                    <br/>
                    <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet turpis semper, pellentesque tortor quis, convallis lorem. In bibendum ante et ipsum pellentesque, eleifend tincidunt massa posuere. Mauris ac sem vitae nulla aliquam sollicitudin sit amet sed turpis. Suspendisse pharetra lectus ex, quis facilisis ante scelerisque eu. Fusce pellentesque orci ac metus feugiat iaculis. Donec varius est diam, vel convallis massa vehicula quis. Aliquam massa mi, tincidunt ac urna in, pulvinar scelerisque nibh. Mauris venenatis ex eget massa accumsan dignissim. Nullam bibendum neque ut nulla hendrerit, at tristique tellus pretium. Nam interdum pretium interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id augue blandit, hendrerit sapien eu, convallis ante. Aliquam vulputate porttitor justo sed dignissim. In id lorem lectus. Vivamus hendrerit ut mi non congue.</p>
                </label>
                </div>
                </div>
        );
    }
}

export default FaqMain;