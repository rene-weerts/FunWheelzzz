import React from 'react';
import './Region.css';
import photoLimburgSouth from '../../assets/photo-Limburg-South.jpg';
import photoRepair from '../../assets/photo-repair.jpeg';

const Region = () => {

    return (
        <>
            <main className="region-main-outer-container">

                <div className="region-outer-container-1">
                    <img className="region-photo-church" src={photoLimburgSouth} alt="church"/>
                    <div className="region-inner-container-1">
                        <h1 className="region-h1-1">
                            De Regio...
                        </h1>
                        <p className="region-text-1">
                            Hier vind u een overzicht van de informatie die wij voor u verzamelt hebben.<br/>
                            We hebben een keuze gemaakt uit locaties waarvan wij denken dat ze net iets meer
                            te bieden hebben.<br/>
                        </p>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                De leukste terrassen
                            </li>
                            <li className="region-li-items-1">
                                De mooiste evenementen
                            </li>
                            <li className="region-li-items-1">
                                De beste restaurants
                            </li>
                            <li className="region-li-items-1">
                                De mooiste hotels en B&B's
                            </li>
                            <li className="region-li-items-1">
                                De beste speciaal zaken
                            </li>
                            <li className="region-li-items-1">
                                De beste hulp bij technische problemen
                            </li>
                            <li className="region-li-items-1">
                                Visit Zuid-Limburg
                            </li>
                        </ul>
                        <p className="region-text-1">
                            Mocht uw keuze er niet tussen staan kunt u gebruik maken van Visit Zuid-Limburg.
                        </p>
                        <p className="region-text-succes-1">Succes met het maken van uw keuzes en veel
                            plezier...</p>
                    </div>
                </div>

                <section className="region-container-info-blok">
                    <div className="region-outer-container-2">
                        <h2 className="region-h2-1">
                            De leukste terrassen
                        </h2>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.aontbat.nl/?utm_source=visitzuidlimburg.nl&utm_medium=referral"
                                   target="blank">Aon 't bat</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.heerdeberg.nl/?utm_source=visitzuidlimburg.nl&utm_medium=referral"
                                   target="blank">Landgoed Heerdeberg</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://noonmaastricht.nl/"
                                   target="blank">Noon</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://gerardushoeve.nl/"
                                   target="blank">Gerardushoeve</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href='https://www.boscafe.nl/home/" target="blank'>Boscafe
                                    't Hijgend Hert</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.geulhof.nl/"
                                   target="blank">Geulhof</a>
                            </li>
                        </ul>
                    </div>

                    <div className="region-outer-container-2">
                        <h2 className="region-h2-1">
                            De mooiste evenementen
                        </h2>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.andrerieu.com/nl" target="blank">André
                                    Rieu</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://preuvenemint.nl/"
                                   target="blank">Preuvenemint</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="amstel.nl/amstelgoldrace/toerversie"
                                   target="blank">Amstel Gold</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="regio-a-element" href="https://www.mh2d.nl/" target="blank">Mh2d</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.mh2d.nl/" target="blank">Limburgs
                                    Mooiste</a>
                            </li>
                        </ul>
                    </div>

                    <div className="region-outer-container-2">
                        <h1 className="region-h2-1">
                            De beste restaurants
                        </h1>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.prix-de-rome.nl/" target="blank">Prix
                                    de Rome</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.oostwegelcollection.nl/chateau-neercanne/restaurants/lunchrestaurant-lauberge/"
                                   target="blank">l'Auberge de Neercanne</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://pastory.nl/" target="blank">Pastory</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://deleuf.nl/" target="blank">De Leuf</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.dunordnoorbeek.nl/" target="blank">Du
                                    Nord</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.restaurantinfini.net/"
                                   target="blank">Infini</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.chateauwittem.com/restaurants-bar/haute-cuisine-julemont/"
                                   target="blank">Chateau Wittem</a>
                            </li>
                        </ul>
                    </div>

                    <div className="region-outer-container-2">
                        <h1 className="region-h2-1">
                            De mooiste hotels en B&B's
                        </h1>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.smockelaer.nl/nl/" target="blank">De
                                    Smockelaer</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.oostwegelcollection.nl/kruisherenhotel-maastricht/" target="blank">Kruisheren
                                    hotel</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.bilderberg.nl/vaals/kasteel-vaalsbroek/?gclid=Cj0KCQiAiJSeBhCCARIsAHnAzT8mdulrR5ZBJUnsOyo7NGQSU0rxbMFRgpLSHLaf0cQxGEGm2d2mbRsaAntYEALw_wcB"
                                   target="blank">Bilderberg Vaals</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.terworm.nl/?gclid=Cj0KCQiAiJSeBhCCARIsAHnAzT_CW01AEttsze-tTCdkjcLa6v6UaP6dc9sacqFZ_VcpokCiSmcEuTAaAvQ4EALw_wcB"
                                   target="blank">Kasteel Terworm</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.wolfshuis.nl/"
                                   target="blank">Wolfshuis</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.herbergsintbrigida.nl/"
                                   target="blank">Herberg
                                    Sint Brigida</a>
                            </li>
                        </ul>
                    </div>

                    <div className="region-outer-container-2">
                        <h1 className="region-h2-1">
                            De beste speciaal zaken
                        </h1>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.jefabelsbikes.nl/" target="blank">Jef
                                    Abels Bikes</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.salden.nl/" target="blank">Math
                                    Salden</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.frmd.nl/" target="blank">Framed</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://cyclesjeanhabets.nl/" target="blank">Jean
                                    Habets</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.valkbike.nl/" target="blank">ValkBike
                                    verhuur</a>
                            </li>
                        </ul>
                    </div>

                    <div className="region-outer-container-2">
                        <h1 className="region-h2-1">
                            De lijst van VVV's
                        </h1>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.visitzuidlimburg.nl/" target="blank">Visit
                                    Zuid-Limburg</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.bezoekmaastricht.nl/" target="blank">Bezoek
                                    Maastricht</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.vvvsittard-geleen.nl/" target="blank">VVV
                                    Sittard-Geleen</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.bezoekbrunssum.nl/" target="blank">Bezoek
                                    Brunssum</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://www.toerismevaals.nl/vvv-info/"
                                   target="blank">VVV Vaals</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element"
                                   href="https://www.visitzuidlimburg.nl/omgeving/plaatsen/detail/margraten/84/"
                                   target="blank">VVV Margraten</a>
                            </li>
                        </ul>
                    </div>

                </section>
                <div className="region-outer-container-1">
                    <img className="region-photo-repair" src={photoRepair} alt="repair"/>

                    <div className="region-inner-container-1">
                        <h1 className="region-h2-1">
                            De beste hulp bij technische problemen
                        </h1>
                        <ul className="region-ul-list-1">
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="https://cyclesjeanhabets.nl/" target="blank">Jean
                                    Habets</a>
                            </li>
                            <li className="region-li-items-1">
                                <a className="region-a-element" href="/https://www.fietsned-zuidlimburg.nl"
                                   target="blank">L. Walstock fietsNed</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>

    );
};

export default Region;